export const isEmpty = (data) => {
    if([null,undefined,''].includes(data)){
        return true
    }
    if (typeof data === "object" && !Object.keys(data).length) {
        return true
    }
    return false
}