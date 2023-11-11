import {Client} from "./Client";
import MockProvider from "./MockProvider";

const host = process.env.NODE_ENV === "development"
  ? "http://localhost:5000"
  : "TODO";

export const client = new Client(host);

//export const providerType = DomainProvider;
export const providerType = MockProvider;