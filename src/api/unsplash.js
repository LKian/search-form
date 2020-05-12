import axios from "axios";

// create instance of axios client w/a couple of default properties.
// customized copy towards making requests to a specifc url with these headers
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6bBX3wJlCVMlVM-DgHq33ydScVmiIkd-7X8rtjLjp1Q",
  },
});
