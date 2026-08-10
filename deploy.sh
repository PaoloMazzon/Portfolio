#!/usr/bin/env bash
PORT=5000

function log() {
    echo "[$(date)] [log]" "$@" >> /tmp/deploy.log
}

function warn() {
    echo "[$(date)] [warn]" "$@" >> /tmp/deploy.log
}

function error() {
    echo "[$(date)] [error]" "$@" >> /tmp/deploy.log
}

log "Server starting on port $PORT..."

while true; do
# Use netcat to listen for a single connection and pass the request data
# We use a subshell to parse the input stream line by line
{ 
    # Read the first line of the HTTP request (e.g., "GET /api/v1/status HTTP/1.1")
    read -r request_line

    RESPONSE=""

    # Extract the HTTP method and the URI path
    method=$(echo "$request_line" | awk '{print $1}')
    path=$(echo "$request_line" | awk '{print $2}')

    # Read the rest of the HTTP headers until the blank line (\r)
    while read -r header; do
        [[ "$header" == $'\r' || -z "$header" ]] && break
    done

    # API Route Routing Logic
    if [[ "$method" == "POST" && "$path" == "/deploy/dev" ]]; then
        log "Received dev deploy request"
        if ! kubectl apply -f /home/debian/portfolio-dev.yaml; then
            error "Failed to apply dev portfolio yaml"
        fi
        json_response='{"message": "Data received successfully"}'

        RESPONSE=$(
            echo -ne "HTTP/1.1 201 Created\r\n"
            echo -ne "Content-Type: application/json\r\n"
            echo -ne "Content-Length: ${#json_response}\r\n"
            echo -ne "Connection: close\r\n"
            echo -ne "\r\n"
            echo -ne "$json_response"
        )
    elif [[ "$method" == "POST" && "$path" == "/deploy/prod" ]]; then
        log "Received dev deploy request"
        if ! kubectl apply -f /home/debian/portfolio.yaml; then
            error "Failed to apply dev portfolio yaml"

            json_response='{"message": "Data received successfully"}'

            RESPONSE=$(
                echo -ne "HTTP/1.1 500 Internal Server Error\r\n"
                echo -ne "Content-Type: application/json\r\n"
                echo -ne "Content-Length: ${#json_response}\r\n"
                echo -ne "Connection: close\r\n"
                echo -ne "\r\n"
                echo -ne "$json_response"
            )
        else
            json_response='{"message": "Data received successfully"}'

            RESPONSE=$(
                echo -ne "HTTP/1.1 201 Created\r\n"
                echo -ne "Content-Type: application/json\r\n"
                echo -ne "Content-Length: ${#json_response}\r\n"
                echo -ne "Connection: close\r\n"
                echo -ne "\r\n"
                echo -ne "$json_response"
            )
        fi
    else
        warn "Got bad request method $method on $path"
        json_error='{"error": "Not Found", "requested_path": "'"$path"'"}'
        RESPONSE=$(
            echo -ne "HTTP/1.1 404 Not Found\r\n"
            echo -ne "Content-Type: application/json\r\n"
            echo -ne "Content-Length: ${#json_error}\r\n"
            echo -ne "Connection: close\r\n"
            echo -ne "\r\n"
            echo -ne "$json_error"
        )
    fi

    echo "$RESPONSE"
} | nc -lk -p "$PORT" -q 1
done
