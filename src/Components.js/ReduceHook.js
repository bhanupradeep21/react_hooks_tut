import React,{useReducer} from 'react'

export default function ReduceHook() {

    const reducer = (state,action)=>{
        switch(action.type){
            case "Increment":
                return { count:state.count+1,showText:state.showText}
            case "toggleShowtext":
                return {count:state.count,showText:!state.showText}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducer,{count:0,showText:true})

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"Increment"})
            dispatch({type:"toggleShowtext"})
        }}>Click Here</button>
        {state.showText && <h1>This is text</h1>}
        <h1>Above One is Use Reducer Hook </h1>
    </div>
  )
}
