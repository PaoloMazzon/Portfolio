#!/usr/bin/env bash
# TODO: Put this absolute dumpster fire into a small rust app
PORT=5000
FIFO=/tmp/deploy_fifo

function log()   { echo "[$(date)] [log]"   "$@" >> /tmp/deploy.log; }
function warn()  { echo "[$(date)] [warn]"  "$@" >> /tmp/deploy.log; }
function error() { echo "[$(date)] [error]" "$@" >> /tmp/deploy.log; }

log "Server starting on port $PORT..."

[[ -p "$FIFO" ]] || mkfifo "$FIFO"

while true; do
    nc -l -p "$PORT" -q 1 < "$FIFO" | {
        read -r request_line

        method=$(echo "$request_line" | awk '{print $1}')
        path=$(echo "$request_line" | awk '{print $2}')

        # Consume headers until the blank line
        while read -r header; do
            [[ "$header" == $'\r' || -z "$header" ]] && break
        done

        if [[ "$method" == "POST" && "$path" == "/deploy/dev" ]]; then
            log "Received dev deploy request"
            if ! kubectl rollout restart deployment portfolio-test-deployment &> /dev/null; then
                error "Failed to apply dev portfolio yaml"
            fi
            json_response='{"message": "Data received successfully"}'
            echo -e "HTTP/1.1 201 Created\r\nContent-Type: application/json\r\nContent-Length: ${#json_response}\r\nConnection: close\r\n\r\n${json_response}"

        elif [[ "$method" == "POST" && "$path" == "/deploy/prod" ]]; then
            log "Received prod deploy request"
            if ! kubectl rollout restart deployment portfolio-deployment &> /dev/null; then
                error "Failed to apply prod portfolio yaml"
                json_response='{"message": "Deploy failed"}'
                echo -e "HTTP/1.1 500 Internal Server Error\r\nContent-Type: application/json\r\nContent-Length: ${#json_response}\r\nConnection: close\r\n\r\n${json_response}"
            else
                json_response='{"message": "Data received successfully"}'
                echo -e "HTTP/1.1 201 Created\r\nContent-Type: application/json\r\nContent-Length: ${#json_response}\r\nConnection: close\r\n\r\n${json_response}"
            fi

        else
            warn "Got bad request method $method on $path"
            json_error='{"error": "Not Found", "requested_path": "'"$path"'"}'
            echo -e "HTTP/1.1 404 Not Found\r\nContent-Type: application/json\r\nContent-Length: ${#json_response}\r\nConnection: close\r\n\r\n${#json_response}"
        fi
    } > "$FIFO"
done
