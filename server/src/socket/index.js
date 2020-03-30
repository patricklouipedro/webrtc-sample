const io = require('socket.io');

const init = http => {
  console.log('Initializing IO server...');

  const srv = io(http);

  srv.on('connection', socket => {
    console.log('a user has connected');
  });
};

module.exports = { init };
