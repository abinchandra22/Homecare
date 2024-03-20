import { commonAPI } from "./commonAPI";
import SERVER_URL from "./serverUrl";

// serviceprovider first register api

export const serviceProviderRegAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/serviceProvier/register`, reqBody, reqHeader)
}


// user register
export const userRegAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/user/register`, user, "")
}

// user Login
export const userLoginAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/user/login`, user, "")
}

// admin login
export const adminLoginAPI = async (admin) => {
    return await commonAPI("POST", `${SERVER_URL}/adminLogin`, admin, "")
}



