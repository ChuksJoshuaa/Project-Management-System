import express from "express";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import { connectDB } from "./config/db.js";

//Port from env
const port = process.env.PORT || 5000;

//Connect
connectDB();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(
    '<h1>Project Management System Api working perfectly</h1><a href="/graphql">Click here</a>'
  );
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== "development",
  })
);

app.listen(port, console.log(`Server is listening on port ${port}`));
