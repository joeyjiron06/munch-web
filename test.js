const {spawn} = require('child_process');


function executeUntil(command, predicate) {
  return new Promise((resolve, reject) => {
    let process = spawn(command, {shell:'/bin/bash', detached:true});
    function dataReceived(message) {
      let answer = predicate(message);
      if (answer === 1) {
        resolve(process.pid);
      } else if (answer === -1) {
        console.log('error message: ' + message);
        reject(process.pid);
      }
    }

    process.stdout.on('data', dataReceived);
    process.stderr.on('data', dataReceived);
  });
}


executeUntil('npm start', (message) => {
    if (/^webpack: Compiled successfully/.test(message)) {
      return 1;
    } else if (/^webpack: Failed to compile/) {
      return -1;
    } else {
      return 0;
    }
  })
  .then((pid) => {
    console.log('done!');
    process.kill(-pid);
  })
  .catch((pid) => {
    console.log('error!');
    process.kill(-pid);
  });
