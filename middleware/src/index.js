const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(require("./routes/auth"));
app.use(require("./routes/land_cc"));
app.use(require("./routes/blro_cc"));
app.use(require("./routes/registryoffice_cc"));
app.use(require("./routes/lawyer_cc"));
app.use(require("./routes/transfer_cc"));

app.listen(3000, console.log);
