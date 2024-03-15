const fs = require("fs");

// Your object
const obj = {
  key1: "value1",
  key2: "value2",
  // Add more key-value pairs as needed
};

// Convert the object to a JSON string
const jsonString = JSON.stringify(obj);

// Write the JSON string to the file
fs.writeFile("info.txt", jsonString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
});
