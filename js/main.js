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
    let colourBtns = document.querySelectorAll(".colPicker")

    for (let i = 0; i < colourBtns.length;i++){
        colourBtns[i].addEventListener("click",chgColour)
    }

    function chgColour(ev){
        console.dir(ev.target.classList)
        let newColour = ev.target.classList[0] + "Back"
        document.body.setAttribute("class",newColour)
    }

    //image rotator

    let imageAr = ['images/view1.jpg','images/view2.jpg','images/view3.jpg','images/view4.jpg',
'images/view5.jpg','images/view6.jpg']

    let count = 0
    document.getElementById("myImages").setAttribute("src",imageAr[count])
    setInterval(chgImage,1000)

    function chgImage(){
        count++
        if(count === imageAr.length){
            count = 0
        }

        document.getElementById("myImages").setAttribute("src",imageAr[count])
    }
    //background colour selector
    /*
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
    */

})()


