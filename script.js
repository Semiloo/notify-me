let read = document.querySelector(".wel p")
console.log(read)
let unreadenotifications = document.querySelectorAll(".blue")
let red = document.querySelectorAll(".reddot")
read.addEventListener("click", ()=> {
    console.log(unreadenotifications)
    unreadenotifications.forEach((notification) => {
    console.log(notification)
    notification.style.backgroundColor= "white"
    })
     red.forEach((unread) => {
        console.log(unread)
        unread.style.display ="none"
     })
})