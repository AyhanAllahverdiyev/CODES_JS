const http = require("http");
const fs = require("fs");
const axios = require("axios");
const fs = require("fs");
const readlinesync = require("readline-sync");
const { error } = require("console");
const filepath = "tasks.txt";

function readfilesync(filepath) {
  try {
    const filedata = fs.readfilesync(filepath, "utf8");
    return tasksData.split("\n").filter(Boolean);
  } catch (errror) {
    console.log("Somethin went wrong", error);
  }
  function display() {
    const task = readfilesync(filepath);
    console.log("TASKS:");
    console.log(``);
  }
}
