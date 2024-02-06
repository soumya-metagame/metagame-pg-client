import axios from "axios";
import { Config } from "../../config";

interface AuthType {
    auth:string 
    
    
  }

  export const AuthToken =  ( data: AuthType ) => {
    console.log("data inside the auth  component",data)
    return new Promise((resolve, reject) => {
        axios.post(`${Config.BaseUrl}/auth?auth=${data}`, {
            "auth":data,
            "chennel":"client",
            "tz":"330",
            "skin":"skillz.live",
            "locale":"en",
            "client":"mobile",
            "design":"phone"
        })
        .then((result) => {
            resolve(result.data)
        })
            .catch((error) => {
                console.log("1the error", error)
                reject(error)
            })
    })
};