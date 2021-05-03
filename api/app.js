const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

const development = [{
        id: 1,
        name: "Caspar House",
        location: "Jewellery Quarter, Birmingham",
        no_of_apartments: 48,
        rating: "4"
    },
    {
        id: 2,
        name: "Derwent Foundry",
        location: "Jewellery Quarter, Birmingham",
        no_of_apartments: 60,
        rating: "3"
    }, {
        id: 3,
        name: "Islington Gates",
        location: "Jewellery Quarter, Birmingham",
        no_of_apartments: 200,
        rating: "3"
    }, {
        id: 4,
        name: "Whitmore Collection",
        location: "Jewellery Quarter, Birmingham",
        no_of_apartments: 300,
        rating: "5"
    }, {
        id: 5,
        name: "Beaufort House",
        location: "Jewellery Quarter, Birmingham",
        no_of_apartments: 200,
        rating: "4.5"
    }, {
        id: 6,
        name: "Cantebury House",
        location: "Jewellery Quarter, Birmingham",
        no_of_apartments: 150,
        rating: "2"
    }, {
        id: 7,
        name: "Newhall Hill",
        location: "Jewellery Quarter, Birmingham",
        no_of_apartments: 50,
        rating: "3.8"
    }
]

app.get("/", (req, res) => {
    res.send(developments);
});

app.listen(8081, () => {
    console.log("App's running on port 8081");
});