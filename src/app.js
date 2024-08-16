import React,{useEffect} from 'react';


function appStart(){
    const handleKeydown= (e)=>{
        const key = e.key;
        const code = e.keyCode;
        const cur =document.querySelector(".board-column[data-index='00']");
        console.log(keyCode);
        cur.innerText =key;
    }  
    window.addEventListener("keydown",handleKeydown);
} 

function AppWithFetch(){
    useEffect(()=>{
        fetch('http://localhost:3000/request')
            .then(response => response.json())
            .then(data =>console.log(data))
            .catch(error => console.error('Error :', error));
    } ,[]) 
    return <App/>;
}
function App(){
    useEffect(()=> {
        const cleanup=appStart();
        return cleanup
    },[]);
    return (
        <div>
                <h1>My react app</h1>
                <div className='baord-column' data-index="00"></div>
        </div>
    );
}


export default AppWithFetch;