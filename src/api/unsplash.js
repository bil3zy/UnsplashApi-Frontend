import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FqTCDKoqWDX6UtVFLiig2e2xA6jR1dTY93QThLcTu8E",
  },
});
