var pg = require("pg");
var conString =
  "postgres://default:xa1EHGTWN7Yv@ep-young-math-a2uc03pq.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require";

var client = new pg.Client(conString);
client.connect();

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        time TIMESTAMP WITH TIME ZONE,
        title TEXT,
        topics TEXT[],
        author TEXT,
        textBody TEXT
    );
`;
export default function handler(req, res) {

client
  .query(createTableQuery)
  .then((res) => {
  
    client.end();
  })
  .catch((e) => console.error(e.stack));

  res.status(200).json([{result:"Table created successfully"}]);
}