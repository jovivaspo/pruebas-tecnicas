import {useRef, useEffect} from 'react'
import {buttonInfiniteScroll} from './ButtonInfiniteScroll.css'
export const ButtonInfiniteScroll = (props:{
    setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
    const {setPage} = props
    const ref=useRef<HTMLButtonElement>(null)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                setPage(prev=>prev+1)
            }
        })
        if(ref.current === null) return
        observer.observe(ref.current)

        return ()=>{
            if(ref.current) observer.unobserve(ref.current)
        }
    },[])
    return (  
    <button ref={ref} className={buttonInfiniteScroll} onClick={()=>setPage(prev=>prev+1)}>Load more</button>
    )
     
}