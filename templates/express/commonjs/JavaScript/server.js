const app = require("./index.js");
const http = require("http");

const server = http.createServer(app);

const s = server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

s.on("error", (err) => {
  console.log("Server Error Occurred:", err.message);
});
