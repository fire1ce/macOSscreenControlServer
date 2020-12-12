const express = require('express');
const app = express();
const {exec} = require('child_process');
const port = 55888;

app.get('/on', function (req, res) {
    res.send('on');
    exec('caffeinate -u -t 1');
    console.log('screen on command');
});
app.get('/off', function (req, res) {
    res.send('off');
    exec('pmset displaysleepnow');
    console.log('screen off command');
});
app.get('/status', function (req, res) {
    exec(
        'pmset -g powerstate IODisplayWrangler | tail -1 | cut -c29',
        (error, stdout, stderr) => {
            if (stdout == 4) {
                res.send('1');
                console.log('Screen is On');
            } else {
                res.send('0');
                console.log('Screen is Off');
            }
        },
    );
});
app.listen(port, () =>
    console.log(`screenControlClinet listening on port ${port}!`),
);
