
export const gameService = {
    query
}

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc'

async function query() {
    if (localStorage.getItem('games')===null) {
        const options = fetchOptions()
        const games = await (await (await fetch(BASE_URL, options)).json())
        localStorage.setItem('games',JSON.stringify(games));
        return games;
    }
    else return JSON.parse(localStorage.getItem('games'));



}

function fetchOptions() {
    return {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                'f6c20c7789mshcb0646657d73905p10e0ebjsn2f1e561a6f1b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
    };
}