
export default function initializeSocketIO(io) {

    io.on('connection',(socket) => {

        console.log('a user connected');
     });
}