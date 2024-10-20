import axios from "axios"

export const commonApi = async(httpMethod, urlVal, reqBody) => {
    const reqConfig = {
        method:httpMethod,
        url:urlVal,
        data:reqBody,
        headers:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}