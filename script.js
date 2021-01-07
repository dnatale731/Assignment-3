let selectIdWithoutQuery = document.getElementById("container")
console.log(selectIdWithoutQuery)

let selectIdWithQuery = document.querySelector("#container")
console.log(selectIdWithQuery)

let selectAll = document.querySelectorAll("li.second")
console.log(selectAll)

let selectThirdLi = document
console.log(selectThirdLi)

let addElement = document.createElement("p")
addElement.appendChild(document.createTextNode("Hello!"))
document.body.insertBefore(addElement, selectIdWithQuery)

document.querySelector("div.footer").classList.add("main")

document.querySelector("div.footer").classList.remove("main")

let newLi = document.createElement("li")

newLi.appendChild(document.createTextNode("four"))

document.querySelector("ul").append(newLi)

let greenBackground = document.querySelectorAll("ol li")
greenBackground.forEach((element) => {
    element.style.background = "green"
})

document.querySelector(".footer").remove()