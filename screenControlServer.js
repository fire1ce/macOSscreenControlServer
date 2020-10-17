const express = require('express');
const app = express();
const {exec} = require('child_process');
const port = 55888;

app.post('/on', function (req, res) {
    res.send('on');
    exec('caffeinate -u -t 1');
    console.log('on');
});
app.post('/off', function (req, res) {
    res.send('off');
    exec('pmset displaysleepnow');
    console.log('off');
});
app.post('/status', function (req, res) {
    exec(
        'pmset -g powerstate IODisplayWrangler | tail -1 | cut -c29',
        (error, stdout, stderr) => {
            if (stdout == 4) {
                res.send('1');
                console.log('1');
            } else {
                res.send('0');
                console.log('0');
            }
        },
    );
});
app.listen(port, () => console.log(`screenControl listening on port ${port}!`));
