#!/usr/bin/env bash

SESSION_NAME="MJBApp"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV_PATH="$SCRIPT_DIR/../backend/venv/bin/activate"

if tmux has-session -t "${SESSION_NAME}" 2>/dev/null; then
    echo "Attaching to existing session: ${SESSION_NAME}..."
    tmux attach -t "${SESSION_NAME}"
else
    echo "Creating new session: ${SESSION_NAME}..."

    # create new session and start nvim
    tmux new-session -d -s "${SESSION_NAME}" -n nvim nvim

    # create new window with split panes for the backend and frontend servers
    sleep 1
    tmux new-window -t "${SESSION_NAME}" -n servers

    # left pane: Django backend server
    tmux send-keys -t "${SESSION_NAME}:servers" \
        "source ${VENV_PATH} && cd ${SCRIPT_DIR}/../backend/martinbullman && python manage.py runserver" C-m

    # right pane: Nuxt frontend server
    tmux split-window -h -t "${SESSION_NAME}:servers"
    tmux send-keys -t "${SESSION_NAME}:servers" \
        "cd ${SCRIPT_DIR}/../frontend && npm run dev" C-m

    # create new window and run cluade code
    sleep 1
    tmux new-window -t "${SESSION_NAME}" claude
    
    # create new window and run lazygit
    sleep 1
    tmux new-window -t "${SESSION_NAME}" lazygit

    # focus nvim window
    tmux select-window -t "${SESSION_NAME}:nvim"

    # attache to session
    tmux attach -t "${SESSION_NAME}"
fi

echo "Martin Bullman"

