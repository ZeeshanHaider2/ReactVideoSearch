import axios from "axios";

const KEY = "AIzaSyAp9gJnxFuGBDs7hg1cIFSpoM5ZAtvTiro";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
