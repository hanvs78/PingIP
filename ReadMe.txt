ตรวจสอบสถานะ Switch, Server, IP แบบเรียลไทม์ Realtime ด้วย NodeJS, Socket.IO, ReactJS
/*-----------SETUP------------*/
Server:
npm init -y
npm install express socket.io ping nodemon

step1:
F:\workshop_04_socket\Server>npm init -y
step2:
F:\workshop_04_socket\Server>npm install express socket.io ping nodemon
step3:
Open the VScode and go to path F:\workshop_04_socket\Server>package.json addNew { ,"start": "nodemon server" }
example: 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server" },
step4:
F:\workshop_04_socket\Server>npm start

Client:
step01:
F:\workshop_04_socket>npx create-react-app client
step02:
F:\workshop_04_socket\Client>npm install socket.io-client
step03:
F:\workshop_04_socket\Client>npm start