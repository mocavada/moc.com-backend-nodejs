
const LogQueue = require('./examples/LoggingQueue')
const ApiCalls = require('./examples/APICalls')
const { FileStream, HTTPStream, ReplaceText }  = require('./examples/StreamService');
const data = require('./lib/utils/task-simulator');
const localStorage = require('./examples/LocalStorage');


/// 1. Log Concurrent Task using Promises
// var delayQueue = new LogQueue(data.tasks, 4);
// delayQueue.name();
// delayQueue.run();

/// 2. Advance JS
// var apiTest = new ApiCalls
// apiTest.name();
// apiTest.spaceNames();
// apiTest.githubRequest("mocavada")

/// 3. LocalStorage.js - (Adapter Pattern)

// console.log( "localStorage length: ", localStorage.length );
// var uid = localStorage.getItem("user_id");
// console.log( "user_id: ", uid );
// if (!uid) {
//     console.log('User ID not found. Setting the user id and token...');
//     localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
//     localStorage.setItem("user_id", "12345");
// } else {
//     console.log('User ID found.', uid);
//     console.log('clearning the User ID...');
//     localStorage.clear();
// }

/// 4. StreamService.js - (Pipe, Transform, Pipe Streams)
// var file = new FileStream();
// file.readWriteStream();
var watch = new HTTPStream();
watch.videoStream();
// var xStream = new ReplaceText('X');
// process.stdin.pipe(xStream).pipe(process.stdout);