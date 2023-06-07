import {useState, useEffect} from 'react'
import { getArticleInfo } from '../services/hacker-news'
import {Link} from 'wouter'
import { articleStory, articleHeader, articleFooter, smallLink, storyTitle } from './Story.css.ts'
import { Skeleton } from './Skeleton.tsx'

export const Story = (props: {
    id:number,
    index: number
}) => {
    const {id, index} = props
    const [story, setStory] = useState(null)
    useEffect(()=>{
        getArticleInfo(id)
        .then(info=>setStory(info))
    },[])

    if(!story) return <Skeleton/>

    const {by, kids, score, title, url } = story

    let domain = ''

    try{

        domain = new URL(url).hostname.replace('www','')

    }catch{}

    return (
        <article className={articleStory}>
            <header className={articleHeader}>
                <small>{index + 1}. </small>
                <a href={url} className={storyTitle} target='_blank'>{title}</a>
                <a href={url} target='_blank'>{domain}</a>
            </header>
            <footer className={articleFooter}>
                <small>{score} points</small>
                <Link className={smallLink} href={`/article/${id}`}>by {by}</Link>
                <Link className={smallLink} href={`/article/${id}`}>6 hours ago</Link>
                <Link className={smallLink} href={`/article/${id}`}>{kids?.length || 0} comments</Link>
            </footer>
        </article>
    )
 
}
