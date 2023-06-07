import { Comment } from "./Comment"
export const ListOfComments = (props:{
    ids: number[]
}) => {
    const {ids} = props

  return (
    <ul>
      {
        ids.map((id:number)=>(
            <li><Comment id={id}/></li>
        ))
      }
    </ul>
  )
}
