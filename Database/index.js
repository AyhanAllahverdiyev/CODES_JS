const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("ayhan.db");

const task = {
  title: "Learn Node.js",
  description: "Complete tutorial",
  completed: 0,
};

db.run(
  "INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)",
  [task.title, task.description, task.completed],
  function (error) {
    if (error) {
      console.error("Error inserting task:", error);
    } else {
      console.log("Task added successfully.");
    }
  }
);

const taskId = 1;

db.run("DELETE FROM tasks WHERE id = ?", [taskId], function (error) {
  if (error) {
    console.error("Error deleting task:", error);
  } else {
    console.log("Task deleted successfully.");
  }
});

db.all("SELECT * FROM tasks", function (error, rows) {
  if (error) {
    console.error("Error fetching tasks:", error);
  } else {
    console.log("Tasks:");
    rows.forEach((row) => {
      console.log(
        `ID: ${row.id}, Title: ${row.title}, Description: ${row.description}, Completed: ${row.completed}`
      );
    });
  }
});
db.close();
