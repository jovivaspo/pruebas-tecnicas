import {Link} from 'wouter'
import {useState, useEffect} from 'react'
import { getArticleInfo, getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'
import { ButtonInfiniteScroll } from '../components/ButtonInfiniteScroll'


export default function TopStories() {

    const [page, setPage] = useState<number>(1)
    const [ids, setIds] = useState<Array<number>>([])

    useEffect(()=>{
        getTopStories(page, 10)
        .then(res=>{
            const newIds = [...ids, ...res]
            setIds(newIds)})
    }, [page])

    console.log(page, ids.length)


    return (
        <>
         <ul style={{listStyle: 'none'}}>
        {
            ids.length > 0 && 
            ids.map((id: number, index: number) => {
                return (
                    <li key={id}>
                        <Story id={id} index={index}/>
                    </li>
                )
            })
        }
       </ul>
       <ButtonInfiniteScroll setPage={setPage}/>
        </>
      
    )
}

  