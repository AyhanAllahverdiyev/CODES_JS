//THIS CODE READS,WRITES,ADDS AND DELETES TASKS FROM A TXT FILE CALLED "INDEX.TXT"

const http = require("http");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();
const readlinesync = require("readline-sync");
const filepath = process.env.filepath;

function ReadFile(filepath) {
  try {
    const filedata = fs.readFileSync(filepath, "utf8");

    // return filedata.split("\n").filter(Boolean);
    return filedata.split("\n").filter(Boolean);
  } catch (error) {
    console.log("Somethin went wrong", error);
  }
}
// function  updateindex(){
//     const tasks=ReadFile(filepath);
//     const upindex=tasks.map()
// }
function display() {
  const tasks = ReadFile(filepath);
  console.log("TASKS:");
  tasks.forEach((task, index) => {
    console.log(`task: ${index + 1} ==> ${task}`);
    console.log("\n");
  });
}
function add() {
  const NewTask = readlinesync.question("PLEASE INSERT THE NEW DATA:");
  const tasks = ReadFile(filepath);
  tasks.push(NewTask);
  fs.writeFileSync(filepath, tasks.join("\n"));
}

function Delete() {
  try {
    const index = readlinesync.question("Insert the index number:") - 1;
    const tasks = ReadFile(filepath);
    if (index < tasks.length && index >= 0) {
      const NewTask = tasks.splice(index, 1)[0];
      // const deletedTask = tasks.splice(taskIndex, 1)[0];
      fs.writeFileSync(filepath, tasks.join("\n"));
      console.log(`task:${index} deleted \n`);
    }
  } catch (error) {
    console.log("Error", error);
  }
}

http
  .createServer((request, response) => {
    console.log("Port running\n");
    response.setHeader("Content-Type", "application/json");
    response.write("Port running\n");
    Delete();
    display();
  })
  .listen(7000);
