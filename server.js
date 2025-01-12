import express from 'express';
import { HouseholdInfo } from './HouseholdInfo.js'
import { ChatGpt } from "./ChatGpt.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log("hello world!");
})
/**
 * Client (react app) will send profile data to "/data"
 * Server (us) will send back disaster info to client in the response
 */
app.post('/data', async (req, res) => {
    const requestBody = req.body // what the client is giving to me in the request

    console.log("Recevied data from client: ", requestBody);

    const city = req.body.city;
    const country = req.body.country;
    const householdSize = req.body.householdSize;
    const pets = req.body.pets;
    const infant = req.body.infant;
    const child = req.body.child;
    const elder = req.body.elder;
    const disabled = req.body.disabled;
    const ill = req.body.ill;

    let newHouseHoldInfo = new HouseholdInfo(householdSize,pets,infant,child,elder,disabled,ill);
    let chat = new ChatGpt(city, country, newHouseHoldInfo);
    let dictionary = await chat.doEverything();

// return info back to the client
    res.json(
        dictionary
    )
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)

})
