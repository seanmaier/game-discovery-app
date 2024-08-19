import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "257fbabdb8484ead8c298470b34fb7e6"
    }
})