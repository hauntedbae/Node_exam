const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

const { dbconfig } = require("../config");

router.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute("SELECT * FROM users_db;");

    await con.end();
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});

// router.get("/:name", async (req, res) => {
//   try {
//     const con = await mysql.createConnection(dbconfig);
//     const [response] = await con.execute(`SELECT id, name FROM users_db;`);
//     await con.end();
//     res.send(response);
//   } catch (e) {
//     res.status(400).send({ error: "Error" });
//   }
// });

// router.get("/:email", async (req, res) => {
//   try {
//     const con = await mysql.createConnection(dbconfig);
//     const [response] = await con.execute(
//       "SELECT id, name, email FROM users_db;"
//     );
//     await con.end();
//     res.send(response);
//   } catch (e) {
//     res.status(400).send({ error: "Error" });
//   }
// });

router.get("/:address", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      `SELECT id, name, address FROM users_db;`
    );
    await con.end();
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});

module.exports = router;
