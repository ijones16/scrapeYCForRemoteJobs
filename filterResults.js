var jobs = require('./results.json');

var remoteJobs = jobs.map(function(job){
        if (job.title.includes('remote') || job.title.includes('Remote')){
            return job;
            }
            return;
    })

console.log(remoteJobs);
