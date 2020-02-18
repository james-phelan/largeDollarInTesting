const threads = 4
const { Worker } = require("worker_threads");

for (i = 0; i < threads; i++) {
    let workerone = new Worker('./dollarInTest.js');
}