// Main calls dollarInTest.js a number of times.
const threads = 10 //Number of threads to spawn.
const { Worker } = require("worker_threads");

for (i = 0; i < threads; i++) {
    let workerone = new Worker('./dollarInTest.js');
}
