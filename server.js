const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const manifest = {
    id: "community.owncast.live",
    version: "1.0.0",
    name: "Owncast Live",
    description: "My Owncast stream",
    resources: ["catalog", "meta", "stream"],
    types: ["tv"],
    catalogs: [
    {
        type: "tv",
        id: "owncast",
        name: "Owncast Live"
    }
],
    idPrefixes: ["owncast"]
};

app.get('/manifest.json', (req, res) => {
    res.json(manifest);
});

app.get('/catalog/tv/owncast.json', (req, res) => {
    res.json({
        metas: [
            {
                id: "owncaststream",
                type: "tv",
                name: "My Live Stream",
                poster: "https://placehold.co/300x450/png"
            }
        ]
    });
});

app.get('/meta/tv/:id.json', (req, res) => {
    res.json({
        meta: {
            id: "owncaststream",
            type: "tv",
            name: "My Live Stream",
            poster: "https://placehold.co/300x450/png",
            description: "Live Owncast Stream"
        }
    });
});

app.get('/stream/tv/:id.json', (req, res) => {
    res.json({
        streams: [
            {
                title: "Owncast Live",
                url: "https://leg-von-delete-tickets.trycloudflare.com/hls/stream.m3u8"
            }
        ]
    });
});

const PORT = process.env.PORT || 4321;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Addon running on port ${PORT}`);
});