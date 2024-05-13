var pg = require("pg");
var conString =
  "postgres://default:xa1EHGTWN7Yv@ep-young-math-a2uc03pq.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require";

var client = new pg.Client(conString);
if (!client._connected) {
  await client.connect();
}

export default function handler(req, res) {
  try {
  const selectQuery = `
    SELECT * FROM posts
  `;

  client
    .query(selectQuery)
    .then((dbRes) => {
      res.status(200).json(dbRes.rows);
      client.end();
    })
    .catch((e) => console.error(e.stack));
  } catch (e) {
    console.error(e.stack);
    res.status(500).json({ error: 'Database query failed' });
    client.end();
  }
}