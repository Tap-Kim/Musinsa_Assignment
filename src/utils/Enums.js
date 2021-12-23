export const HOST_URL = "https://www.anapioficeandfire.com/api"

export const ENDPOINT = {
    CHARACTERS: "/characters"
}

// export const TOGGLE_INIT = [
//     { title: "생존인물만", type: "alive", active: false },
//     { title: "여자", type: "female", active: false },
//     { title: "tvSeries 없음", type: "noTvSeris", active: false },
//     { title: "초기화", type: "reset", active: false }
// ]

export const TOGGLE_INIT = {
    alive: { title: "생존인물만", active: false },
    female: { title: "여자", active: false },
    noTvSeries: { title: "tvSeries 없음", active: false },
    reset: { title: "초기화", active: false }
}