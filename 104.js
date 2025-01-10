require("dotenv").config();

const account = process.env["104_account"];
const password = process.env["104_password"];

console.log(`Account: ${account}`);
console.log(`Password: ${password}`);

const url =
  "https://apis.104api.com.tw/prohrm/1.0/hrmapi/external/transferCard";
const token = "your_access_token";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const body = JSON.stringify([
  {
    empNo: "119008",
    cardTime: 1566349095938,
  },
]);

fetch(url, {
  method: "POST",
  headers: headers,
  body: body,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Response data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
