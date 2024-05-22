const axios = require("axios");

const data = {
  first_name: "vishwajeet",
  last_name: "sharma",
  email: "vishusharmaiit09@gmail.com ",
  phone_number: "9352748522",
  platform_name: "LinkedIn",
  cover_letter: "I am interested in this role because...",
  urls: [
    "https://vishwajeet09.vercel.app/",
    "https://github.com/vishwajeetsharma09",
  ],
};

axios
  .post("http://work.learnq.ai/recruitment", data)
  .then((response) => {
    if (response.status === 201) {
      console.log("Received a 201 OK");
      console.log("Returned id:", response.data.id);
    } else {
      console.log("Received a non-201 status:", response.status);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
