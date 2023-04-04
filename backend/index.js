const { google } = require("googleapis");
require("dotenv").config();
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await readGoogleSheet();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

const readGoogleSheet = async () => {
  const jwtClient = new google.auth.JWT(
    "iotforhire@lyrical-drive-281204.iam.gserviceaccount.com",
    null,
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,

    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  await jwtClient.authorize();

  const sheets = google.sheets({ version: "v4", auth: jwtClient });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "JSON!A:Z",
  });

  const keys = response.data.values.shift();

  const newArray = response.data.values.map((product) => {
    return new Object(
      keys.reduce((obj, key, index) => {
        obj[key] =
          index === 1 || index === 2
            ? parseInt(product[index])
            : product[index];
        return obj;
      }, {})
    );
  });
  return newArray;
};

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server started");
});
