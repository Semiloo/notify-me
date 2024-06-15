let read = document.querySelector(".wel p")
console.log(read)
let unreadenotifications = document.querySelectorAll(".blue")
read.addEventListener("click", ()=> {
    console.log(unreadenotifications)
    unreadenotifications.forEach((notification) => {
        console.log(notification)
        notification.style.display = "none"
    })
    // le.backgroundColor= "blue"
    // Do it here
    // the_variable_name.style.display = "none"
})