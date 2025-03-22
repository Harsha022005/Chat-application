const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

function broadcast(data) {
  server.clients.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(data);
    }
  });
}
server.on("connection", (ws) => {
  console.log("Connected to client");
  ws.on("message", (data) => {
    broadcast(data);
  });
  ws.on("close", () => {
    console.log("Disconnected from client");
  });
  
});
