import EventEmiter from 'node:events'

const emmiter = new EventEmiter();



function sendMessage (userName, message, emmiter) {

     emmiter.emit('message', {userName, message})

}


emmiter.on('message', (data) => {
  console.log(`${data.userName}: ${data.message}`);
});


sendMessage('Mykola', 'Hallo zusammen!', emmiter);
sendMessage('Andy', 'Wie geht`s?', emmiter);
sendMessage('Irina', 'Alles gut!', emmiter);