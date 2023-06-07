import {useState, useEffect} from 'react'
import { getArticleInfo } from '../services/hacker-news'
import { Skeleton } from './Skeleton'
import { ListOfComments } from './ListOfComments'
export const Comment = (props:{
    id:number
}) => {
   const {id} = props
   const [comment, setComment] = useState(null)

   useEffect(()=>{
        getArticleInfo(id)
        .then(info=>setComment(info))
    },[])

     if(!comment) return <Skeleton/>

    const {by, text, kids } = comment

  return (
    <>
    <article>
        <header>
            <small>
                <span>{by}</span>
                <span>.</span>
                <span>4 hours ago</span>
            </small>
        </header>
        <p>{text}</p>
    </article>
    {
        kids?.length > 0 && <ListOfComments ids={kids.slice(0,10)} />
    }
    </>
  )
}
