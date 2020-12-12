const express = require('express');
const axios = require('axios');
const app = express();
const serverPort = 55888;

const getScreenStatus = async () => {
    try {
        const resp = await axios.get('http://192.168.100.138:55888/status');
        return resp.data;
    } catch (err) {}
};

app.get('/status', (req, res) => {
    getScreenStatus().then((data) => {
        if (data == 1) {
            res.send('1');
            console.log('Screen is On');
        } else {
            res.send('0');
            console.log('Screen is Off');
        }
    });
});

app.get('/off', function (req, res) {
    res.send('ok');
});
app.get('/on', function (req, res) {
    res.send('ok');
});

app.listen(serverPort, () =>
    console.log(`screenControlServer listening on port ${serverPort}!`),
);
