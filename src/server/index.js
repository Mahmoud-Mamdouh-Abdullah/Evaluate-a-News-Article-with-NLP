const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors');
const NLP = require('./NLP');
const mockAPIResponse = require('./mockAPI');


dotenv.config();

const app = express()

app.use(cors());

app.use(express.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.post('/article_nlp', async function (req, res) {
    const { url } = req.body;
    const data = await NLP(url);
    res.send(data);
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`)
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
