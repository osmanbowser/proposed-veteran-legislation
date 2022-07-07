import cheerio from "cheerio";

const $ = cheerio.load(`<div><h2 class="primary">First Header</h2><h2>Second Header</h2></div>`);