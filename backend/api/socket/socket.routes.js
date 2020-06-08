
module.exports = connectSockets

var msgs = [];
// function connectSockets(io) {
//     io.on('connection', socket => {
//         socket.on('chat newMsg', msg => {
//             console.log(msg)
//             // io.emit('chat addMsg', msg)
//             // emits only to sockets in the same room
//             io.to(socket.myTopic).emit('chat addMsg', msg)
//         })
//         socket.on('chat topic', topic => {
//             if (socket.myTopic) {
//                 socket.leave(socket.myTopic)
//             }
//             socket.join(topic)
//             socket.myTopic = topic;
//         })
//     })
// }
function connectSockets(io) {
    io.on('connection', socket => {

        socket.emit('chat newMsgs', async msgs => {
            await saveMsg(socket.myTopic, msgs)
        });

        io.emit('chat newMsg', { txt: `New member, you are now`, from: 'System' });

        socket.on('disconnect', () => {
            io.emit('chat newMsg', { txt: 'Someone just Left', from: 'System' });
        });
        socket.on('chat typing', userName => {
            socket.broadcast.to(socket.myTopic).emit('chat userTyping', userName)
        })

        socket.on('chat msg', msg => {
            console.log('message: ', msg);
            msgs.push(msg);
            io.emit('chat newMsgs', [msg]);

            setTimeout(() => {
                socket.emit('chat newMsgs', [{ from: 'System', txt: 'Thanks for sharing' }]);
            }, 1500)
        });
        socket.on('chat topic', topic => {
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
        })
    });
}