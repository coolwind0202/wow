const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 下層ディレクトリからindex.jsを実行するとどうなる？
/*
app.use('/api/files/local', express.static('local'));
app.use('/api/filesdelivered', express.static('delivered'));
*/
app.use("/editor", express.static(require("path").resolve(__dirname, "../dist")));

app.post('/api/deliver', (req, res) => {
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

