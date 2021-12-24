import { ENDPOINT, HOST_URL } from "../utils/Enums"

const get = async (endpoint,param) => {
    const headers =  { 'Content-Type': 'application/json' }
    const body = setParams(param)
    
    const response = await fetch(`${HOST_URL}${endpoint}${body}`, {headers})
    const data = await response.json()
    return data
}

const setParams = ({page = 1, pageSzie = 10}) => {
    return `?pageSize=${pageSzie}&page=${page}`
}

export const callList = (param) => {
    return get(ENDPOINT.CHARACTERS, param).then(response =>{
        return response
    })
}