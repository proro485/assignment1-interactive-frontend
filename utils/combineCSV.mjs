import fs from "fs";
import fetch from "node-fetch";

// this particular function is created in javascript file becaue there was some issue with ts-node

// you can run the script by entering this command in terminal `node utils/combineCSV.mjs`

const combineAndWriteCSV = async () => {
  const BOOKS_DATA_URL =
    "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv";
  const MAGAZINES_DATA_URL =
    "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv";

  const booksResponse = await fetch(BOOKS_DATA_URL);
  const magazinesResponse = await fetch(MAGAZINES_DATA_URL);

  let booksData = await booksResponse.text();
  let magazinesData = await magazinesResponse.text();

  booksData = booksData.replace(/^\uFEFF/, "");
  magazinesData = magazinesData.replace(/^\uFEFF/, "");

  const combinedData = booksData + magazinesData;
  fs.writeFileSync("combined.csv", combinedData);
};

combineAndWriteCSV();
