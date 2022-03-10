const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const PORT = 8000;
let url = "https://www.npmjs.com/package/axios";

const people = [];

try {
  axios(url).then((res) => {
    const html = res.data;
    console.log(html);
    //     const page = cheerio.load(html);
    //     page("org-people-profile-card__profile-title", html).each(function () {
    //       const name = page(this).text;
    //       people.push({ name });
    //     });
  });
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
