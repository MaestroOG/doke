import axios from "axios";
import express from "express";
const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Dark?type=twopart");
        res.render("index.ejs", { setup: result.data.setup, delivery: result.data.delivery });
    } catch (error) {
        console.error();
        res.status(500).send('API request failed');
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})