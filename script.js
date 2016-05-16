var Xray = require('x-ray');
var read = require('fs').readFileSync;

var xray = new Xray();

xray('https://news.ycombinator.com/jobs', '.athing',
    [{
        title: 'td:nth-child(3) a',
        link: 'td:nth-child(3) a@href'
    }]
    )
        .paginate('a[rel="nofollow"]:last-child@href')
        .limit(10)
        .write('./results.json')
        .on('finish', function(){
            var jobs = JSON.parse(read('./results.json', 'utf8'))
            var remoteJobs = jobs.filter(function(job){
                return job.title.includes('remote') || job.title.includes('Remote')
            })
            console.log(remoteJobs);
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n end of script");
        });
        console.log('retrieving jobs...')
        console.log('this may take a couple seconds.')
 