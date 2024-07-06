let read = document.querySelector(".wel p")
let three = document.querySelector("h4 span")
let unreadenotifications = document.querySelectorAll(".blue")
let red = document.querySelectorAll(".reddot")
read.addEventListener("click", ()=> {
    unreadenotifications.forEach((notification) => {
    notification.style.backgroundColor= "white"
    three.style.display ="none"
    })
     red.forEach((unread) => {
        unread.style.display ="none"
     })

})