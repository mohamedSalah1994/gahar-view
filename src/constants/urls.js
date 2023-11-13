
let BACKEND_URL = "http://localhost:8080";
let BACKEND_FEATURE_URL = "http://localhost:8080";
if(process.env.VUE_APP_ENVIROMENT === "PRODUCTION") {
  BACKEND_URL = "https://10.18.121.124:448/api";
   BACKEND_FEATURE_URL = "https://10.18.121.93/reader/api";
} 
export {BACKEND_URL, BACKEND_FEATURE_URL};