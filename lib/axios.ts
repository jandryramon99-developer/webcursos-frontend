import axios from "axios";
import { env }
from "@/lib/env";
/*
|--------------------------------------------------------------------------
| AXIOS INSTANCE
|--------------------------------------------------------------------------
*/

const api = axios.create({

  baseURL:
    env.API_URL || "http://localhost:4000",

  withCredentials: true,
});

export default api;