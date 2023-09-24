function insertPieces(){
    console.log("Hi");
    document.querySelectorAll('.box').forEach(function(element) {
        
        if(element.innerText == "Brook"){
            console.log("Hello");
            element.innerHTML = `${element.innerText}<img src="images/${element.innerText}.png">`;
        }

    }
    );

}

window.addEventListener('load', insertPieces);