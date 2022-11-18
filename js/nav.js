//I I F E

(function(){
    console.dir(window.location)

    let url = window.location.href
    

    let filename = url.split("/").pop()
    let listOfLinks = document.querySelectorAll("nav ul li")
    
    
    for (var i = 0; i<listOfLinks.length;i++){
        let curentLink = listOfLinks[i].querySelector("a").getAttribute("href")
        console.info(currentLink)
        if(currentLink === fileName){
            listOfLinks[i].setAttribute("class","currentPage")
            break
        }
    }








})()