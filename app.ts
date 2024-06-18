const http = require("http");
const port = "3001";
let app = http.createServer(function (req: any, res: any) {
  res.setHeader("Content-type", "application/json; charset=utf8");
  let { method, url } = req;
  if (method === "POST") {
    console.log("111111");
    if (url === "/getData") {
      console.log("22222222");
      let data = {
        code: 200,
        msg: "测试",
        content: "Hello World",
      };
      res.end(JSON.stringify(data));
    }
  }
  // res.end('Hello World', )
});
app.listen(port, () => {
  console.log("listenPort:", port);
});
