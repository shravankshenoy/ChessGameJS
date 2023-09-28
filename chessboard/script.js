function insertPieces(){
  
    document.querySelectorAll('.box').forEach(function(element) {
        
       
        if(element.innerText.trim() != ""){   
            console.log(element.innerText);
            element.innerHTML = `${element.innerText}<img src="images/${element.innerText}.png">`;
        }

    }
    );

}

window.addEventListener('load', insertPieces);