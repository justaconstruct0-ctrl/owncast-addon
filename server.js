const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const manifest = {
    id: "community.owncast.live",
    version: "1.0.0",
    name: "Owncast Live",
    description: "My Owncast stream",
    resources: ["stream"],
    types: ["tv"],
    idPrefixes: ["owncast"]
};

app.get('/manifest.json', (req, res) => {
    res.json(manifest);
});

app.get('/stream/tv/:id.json', (req, res) => {

    res.json({
        streams: [
            {
                title: "My Live Stream",
                url: "http://192.168.100.75:8080/hls/stream.m3u8"
            }
        ]
    });

});

app.listen(4321, '127.0.0.1', () => {
    console.log('Addon running on port 4321');
});