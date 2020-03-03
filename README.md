# macOSscreenControlServer

## Install

Clone the repository
cd to the folder

```bash
npm install
```

Run the server:

```bash
node screenControlServer.js
```

Use:

Server is listens on the 8888 port

Turn On the MacOS Screen:
"POST" requests
http://<HOST>:8888/on

Turn OFF the MacOS Screen:
"POST" requests
http://<HOST>:8888/off

Get Status
"POST" requests
http://<HOST>:8888/status

response:
1 = on
0 = off