import React,{ useEffect } from 'react'

export default function UseEffectHook() {
    useEffect(() => {
        const fetchdata = async ()=>{
          console.log("hii");
          const data = await fetch("https://jsonplaceholder.typicode.com/comments")
          console.log(data)
        }
    })
  return (
    <div>
      
    </div>
  )
}
