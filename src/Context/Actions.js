import axios from 'axios'

const api = axios.create({
    baseURL: 'https://breakingbadapi.com/api/'
})

export const getCharacters = async () =>
{
    const response = await api.get('characters')
    return response.data
}


export const getData = async () =>
{
    const [ characters, quotes, episodes, deaths ] = await Promise.all([
        api.get(`characters`),
        api.get(`quotes`),
        api.get(`episodes`),
        api.get(`deaths`)
    ])

    return { 
        characters: characters.data, 
        quotes: quotes.data, 
        episodes: episodes.data,
        deaths: deaths.data
    }
}