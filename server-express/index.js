import express from "express";
import {faker} from "@faker-js/faker";

const app = express();
const PORT = 3000;
const DUMMY_DATA = {
    fullName : faker.person.fullName(),
    phone : faker.phone.number(),
    email : faker.internet.email(),
    age : faker.number.int({min:1, max:100}),
    zodiac : faker.person.zodiacSign(),
    birthday : faker.date.birthdate()
}

app.get("/", (req, res) => {
    res.status(200).json(DUMMY_DATA);
});

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}
    `);
});