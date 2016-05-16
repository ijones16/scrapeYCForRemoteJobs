var Xray = require('x-ray');
var read = require('fs').readFileSync;

var xray = new Xray();

xray('https://news.ycombinator.com/jobs', '.athing',
    [{
        title: 'td:nth-child(3) a',
        link: 'td:nth-child(3) a@href'
    }]
    )
        .write('./results.json')
        .on('finish', function(){
            var jobs = JSON.parse(read('./results.json', 'utf8'))
            var remoteJobs = jobs.map(function(job){
                if (job.title.includes('remote') || job.title.includes('Remote')){
                    return job;
                }
                return;
            })

            console.log(remoteJobs);
        });
