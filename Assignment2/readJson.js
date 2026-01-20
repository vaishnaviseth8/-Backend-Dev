const fs = require("fs");


fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

 const jsonObject = JSON.parse(data);


  const output = `
Name: ${jsonObject.name}
Age: ${jsonObject.age}
Skills: ${jsonObject.skills.join(", ")}
Student: ${jsonObject.isStudent}
`;


  fs.writeFile("output.txt", output, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(" Output written to output.txt");
  });
});

