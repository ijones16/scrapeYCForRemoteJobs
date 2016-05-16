var Xray = require('x-ray');

var xray = new Xray();

xray('https://news.ycombinator.com/jobs', '.athing',
    [{
        title: 'td:nth-child(3) a',
        link: 'td:nth-child(3) a@href'
    }]
    )
        .write('./results.json');
