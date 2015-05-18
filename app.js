"use strict"

const app = require("express")();
const port = process.env.PORT || 3000;

app.use("/", (req, res) => res.json({ message: "hello world" }));
app.listen(port);

console.log("listening on port " + port);
