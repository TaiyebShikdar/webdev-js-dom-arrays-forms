//IIFE (Immediately Invoked Function)
(function(){
    //start
    document.getElementById("myHeading").innerHTML = "Taiyeb"
    document.querySelector("nav ul li").setAttribute("class","currentPage")
    let myFirstLink = document.querySelector("nav ul li a")
    console.info(myFirstLink)
    myFirstLink.setAttribute("href","https://www.google.co.uk")

    //test event
    document.getElementById("myTestEvent").addEventListener("click", function(){
        console.info("o no i got clicked ")
        
    })

    //background colour selector
    let redBtn = document.querySelector(".red")
    let bodyElement = document.querySelector("body")
    redBtn.addEventListener("click",function(){
        bodyElement.setAttribute("class","redBack")
    })
    let blueBtn = document.querySelector(".blue")
    blueBtn.addEventListener("click",function(){
        bodyElement.setAttribute("class","blueBack")
    })

    let greenBtn = document.querySelector(".green")
    greenBtn.addEventListener("click",function(){
        bodyElement.setAttribute("class","greenBack")
    })

    let defaultBtn = document.querySelector(".reset")
    defaultBtn.addEventListener("click",function(){
        bodyElement.removeAttribute("class")
    })
    
    //end
})()


