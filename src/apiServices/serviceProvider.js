import { BACKEND_URL, BACKEND_FEATURE_URL } from "@/constants/urls";

import axios from "axios";

export const serviceProvider = axios.create({baseURL: BACKEND_URL});
export const featureServiceProvider = axios.create({baseURL: BACKEND_FEATURE_URL});