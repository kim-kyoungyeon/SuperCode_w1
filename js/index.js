function appStart(){
    const handleKeydown= (e)=>{
        const key = e.key;
        const code = e.keyCode;
        const cur =document.querySelector(".board-column[data-index='00']");
        console.log(keyCode);``
        cur.innerText =key;
    }  
    window.addEventListener("keydown",handleKeydown);
}
appStart();