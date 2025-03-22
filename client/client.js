const connection = new WebSocket("ws://localhost:8080");
const box = document.getElementById("box");
const msg = document.getElementById("msg");

connection.addEventListener("open", () => {
  console.log("Connected to server");
});
connection.addEventListener("message", (e) => {
  e.data.text().then((text)=>{
    let paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  box.appendChild(paragraph);
  })
});
msg.addEventListener("keyup", (e) => {
  if (e.key==="Enter") {
    connection.send(msg.value);
    msg.value = "";
  }
});
