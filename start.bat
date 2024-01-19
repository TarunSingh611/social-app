@echo off
start cmd /k "cd server && npm i && nodemon server.mjs"
start cmd /k "cd client && npm run dev"