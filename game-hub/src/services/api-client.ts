import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

if (!apiKey) throw new Error("API Key is missing");

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
