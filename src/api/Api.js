import ApiCore from "./ApiCore"
import { ENDPOINT } from "../utils/Enums"

export const callList = (param) => {
    return ApiCore(ENDPOINT.CHARACTERS, param).Get.then(response =>{
        return response
    })
}