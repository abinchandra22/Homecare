import { commonAPI } from "./commonAPI";
import SERVER_URL from "./serverUrl";

// serviceprovider first register api

export const serviceProviderRegAPI = async (serviceprovider)=>{
    return await commonAPI("POST",`${SERVER_URL}/serviceProvier/register`,serviceprovider,"")
}


// user register
export const userRegAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/user/register`,user,"")
}


