@echo off
start cmd /k "cd server && nodemon server.mjs"
start cmd /k "cd client && npm run dev"