import {Client} from "./Client";

const host = process.env.NODE_ENV === "development"
  ? "http://localhost:5000"
  : "TODO";

export const client = new Client(host);