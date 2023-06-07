import { useEffect, useState } from "react"
import { getArticleInfo } from "../services/hacker-news"
import { ListOfComments } from "../components/ListOfComments"

const Details = (props: {
    params: {
        id: string
    }
}) => {
    const { params : {id}} = props

    const [comments, setComments] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getArticleInfo(parseInt(id))
        .then(info=>{
            setLoading(false)
            setComments(info.kids)
        })
    },[])


    const commentIds = comments?.slice(0,10) ?? []

    return (
        <>
         <h1>Details</h1>
        {
            loading?
            <p>Loading...</p>
            :
            <ListOfComments ids={commentIds} />
        }
        </> 
    )
}

export default Details