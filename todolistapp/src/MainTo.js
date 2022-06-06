import React,{useState} from 'react'
import './App.css'
const MainTo = () => {
 const[userName,setuserName]=useState('')
 const[items,setitems]=useState([])

 const addItem=()=>{
     if(!userName){

     }else{
         setitems([... items,userName])
         setuserName('')
     }
 }
    return (
  
    <>
    <div className='mainDiv'>
        <h2>Welcome</h2>
        <div className='childDiv'>
            <figure>
                <h4 className='text'>To Do List 😀</h4>
            </figure>
            <input type='text'placeholder='Enter Your Item'id='input'
            value={userName} onChange={(e)=>setuserName(e.target.value)}
            />
            <i className="fa-solid fa-plus"id='icon'onClick={addItem}></i>

            <div className='si'>
                {
                   
                items.map((koi,ind)=>{
                    return(
                    <h3>{koi}</h3>
                    )
                })
                    
                }
               
            </div>
        </div>
    </div>
    </>
  )
}

export default MainTo