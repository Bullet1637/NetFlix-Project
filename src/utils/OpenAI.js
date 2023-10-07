import OpenAI from "openai";
// import { OPENAI_KEY } from "./Constants";

const openai = new OpenAI({
  apiKey:"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",
  // apiKey: process.env.REACT_APP_OPEN_APIKEY,
  dangerouslyAllowBrowser: true,
  // defaults to process.env["OPENAI_API_KEY"]
});
export default openai