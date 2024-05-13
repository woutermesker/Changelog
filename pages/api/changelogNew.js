var pg = require("pg");
var conString =
  "postgres://default:xa1EHGTWN7Yv@ep-young-math-a2uc03pq.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require";

var client = new pg.Client(conString);
if (!client._connected) {
  await client.connect();
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    let obj = JSON.parse(req.body);
    console.log("obj", obj)
    console.log(typeof obj);
    console.log(obj.time, obj.title, obj.topics, obj.author, obj.textbody)
    
    
    const insertQuery = `
      INSERT INTO posts(time, title, topics, author, textBody)
      VALUES($1, $2, $3, $4, $5)
    `;

    const values = [obj.time, obj.title, obj.topics, obj.author, obj.textbody];
    console.log("values", values)
    client
      .query(insertQuery, values)
      .then((dbRes) => {
        res.status(200).json({result:"Post created successfully"});
        client.end();
      })
      .catch((e) => {
        console.error(e.stack);
        res.status(500).json({error: 'Database operation failed'});
      });
  } else {
    res.status(405).json({error: 'Invalid request method'});
  }
}