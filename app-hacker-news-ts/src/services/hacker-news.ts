const API_NEWS: string = 'https://hacker-news.firebaseio.com/v0';

export const getTopStories = async (page: number, limit: number ) => {
    const res = await fetch(API_NEWS + '/topstories.json' )

    const json = await res.json()

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    return json.slice(startIndex, endIndex)
}

export const getArticleInfo = async (id: number) => {
    const res = await fetch(API_NEWS + `/item/${id}.json`)
    
    return await res.json()
}