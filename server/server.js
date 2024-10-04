//import many libriary
const express = require("express");
const http = require("http");
const cors = require("cors")  // AddNew
const { Server } = require("socket.io") // AddNew
const app = express();
const ping = require("ping");
const server = http.createServer(app);

// AddNew Start
app.use(cors())        
app.use(express.json())

const io = new Server(server,{
  cors:{
    origin:"http://localhost:3000", // React frontEnd
    methods: ["GET","POST"]
    }
  });
// AddNew Finish


const nodeData = [
  { id: 1, label: "LTC-NET", status: "up", ip: "115.84.76.32"},
  { id: 2, label: "LTC-NET", status: "up", ip: "115.84.76.33"},
  { id: 3, label: "BEST-NET", status: "up", ip: "202.123.183.223"},
  { id: 4, label: "BEST-NET", status: "up", ip: "202.123.183.224"},
  { id: 5, label: "NK-DPLC", status: "up", ip: "10.10.10.2"},
  { id: 6, label: "PL-DPLC", status: "up", ip: "10.10.10.3"},
  { id: 7, label: "LSSO-NetWork", status: "up", ip: "192.168.9.40"},
  { id: 8, label: "PSO-NetWork", status: "up", ip: "172.16.1.1"},
];

function pingAndupdate() {
  Object.values(nodeData).forEach((node) => {
    ping.sys.probe(node.ip, (isAlive) => {
      const updatedStatus = isAlive ? "up" : "down";

      io.emit("nodeStatus", {
        id: node.id,
        status: updatedStatus,
        ip: node.ip,
        label: node.label,
      });
    });
  });
}

pingAndupdate();
setInterval(pingAndupdate, 5000);

io.on('connection',(socket)=>{
  console.log('A user connection')

        socket.on('disconnect',()=>{
            console.log('A user disconnect')
        })

        socket.emit('m','555+')
})

io.on('connection',(socket)=>{
    console.log('A user connection')
})

server.listen(5000, () => console.log("Server is running on port 5000"));
