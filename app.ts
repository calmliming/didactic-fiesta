const http = require("http");
const fs = require("fs");
const port = "3001";
let app = http.createServer(function (req: any, res: any) {
  res.setHeader("Content-type", "application/json; charset=utf8");
  let { method, url } = req;
  if (method === "POST") {
    if (url === "/getData") {
      let ogj;
      fs.readFile("./data.json", "utf8", (error: any, data1: any) => {
        if (error) {
          console.log(error);
          return;
        }
        ogj = data1;
      });
      let data = {
        code: 200,
        data: ogj,
        msg: "测试",
      };
      res.end(JSON.stringify(data));
    }
  }
  // res.end('Hello World', )
});
app.listen(port, () => {
  console.log("listenPort:", port);
});
