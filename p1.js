let input = document.querySelector(".input")
let btn = document.querySelector('.btn')
let p = document.querySelector("p")

btn.onclick = function () {
    let inputV = input.value
    // console.log(inputV)
    p.innerHTML = inputV
    input.value = ""
}
