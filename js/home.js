statement = false
function myFunction() {
    statement = true
    // <i class="fa-solid fa-heart"></i>
    // document.getElementById("fill") .classList.add("fa-solid");
    document.getElementById("fill").classList.toggle("fa-regular");
    document.getElementById("fill").classList.toggle("fa-solid");
    document.getElementById("fill").classList.toggle("fa-ash");
}

let hover1 = document.getElementById("media1");
hover1.addEventListener("mouseover", function () {
    hover1.classList.remove("fa-square-twitter");
    hover1.classList.add("fa-twitter");
})
hover1.addEventListener("mouseout", function () {
    hover1.classList.add("fa-square-twitter");
    hover1.classList.remove("fa-twitter");
})



let hover2 = document.getElementById("media2");
hover2.addEventListener("mouseover", function () {
    hover2.classList.remove("fa-square-instagram");
    hover2.classList.add("fa-instagram");
})
hover2.addEventListener("mouseout", function () {
    hover2.classList.add("fa-square-instagram");
    hover2.classList.remove("fa-instagram");
})



let hover3 = document.getElementById("media3");
hover3.addEventListener("mouseover", function () {
    hover3.classList.remove("fa-square-github");
    hover3.classList.add("fa-github");
})
hover3.addEventListener("mouseout", function () {
    hover3.classList.add("fa-square-github");
    hover3.classList.remove("fa-github");
})



let hover4 = document.getElementById("media4");
hover4.addEventListener("mouseover", function () {
    hover4.classList.remove("fa-square-youtube");
    hover4.classList.add("fa-youtube");
})
hover4.addEventListener("mouseout", function () {
    hover4.classList.add("fa-square-youtube");
    hover4.classList.remove("fa-youtube");
})



function change1() {
    let pick = document.getElementById("selected1");
    pick.src = "/img/side 1.jpg";
    document.getElementById("img1").style.border= "0.1vw solid blueviolet";
    document.getElementById("img1").style.boxShadow = "0.1vw 0.1vw 0.5vw blueviolet";
    document.getElementById("img2").style.border= "0.1vw solid black";
    document.getElementById("img2").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img3").style.border= "0.1vw solid black";
    document.getElementById("img3").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img4").style.border= "0.1vw solid black";
    document.getElementById("img4").style.boxShadow = "0vw 0vw 0vw blueviolet";
}
function change2() {
    let pick = document.getElementById("selected1");
    pick.src = "/img/side 2.jpg";
    document.getElementById("img2").style.border= "0.1vw solid blueviolet";
    document.getElementById("img2").style.boxShadow = "0.1vw 0.1vw 0.5vw blueviolet";
    document.getElementById("img1").style.border= "0.1vw solid black";
    document.getElementById("img1").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img3").style.border= "0.1vw solid black";
    document.getElementById("img3").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img4").style.border= "0.1vw solid black";
    document.getElementById("img4").style.boxShadow = "0vw 0vw 0vw blueviolet";
}
function change3() {
    let pick = document.getElementById("selected1");
    pick.src = "/img/front.jpg";
    document.getElementById("img3").style.border= "0.1vw solid blueviolet";
    document.getElementById("img3").style.boxShadow = "0.1vw 0.1vw 0.5vw blueviolet";
    document.getElementById("img1").style.border= "0.1vw solid black";
    document.getElementById("img1").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img2").style.border= "0.1vw solid black";
    document.getElementById("img2").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img4").style.border= "0.1vw solid black";
    document.getElementById("img4").style.boxShadow = "0vw 0vw 0vw blueviolet";
}
function change4() {
    let pick = document.getElementById("selected1");
    pick.src = "/img/back.jpeg";
    document.getElementById("img4").style.border= "0.1vw solid blueviolet";
    document.getElementById("img4").style.boxShadow = "0.1vw 0.1vw 0.5vw blueviolet";
    document.getElementById("img1").style.border= "0.1vw solid black";
    document.getElementById("img1").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img2").style.border= "0.1vw solid black";
    document.getElementById("img2").style.boxShadow = "0vw 0vw 0vw blueviolet";
    document.getElementById("img3").style.border= "0.1vw solid black";
    document.getElementById("img3").style.boxShadow = "0vw 0vw 0vw blueviolet";
}

let wraphid = ()=>{
    document.getElementById("navbar").style.visibility="hidden";
} 

let wrapvis = ()=>{
    document.getElementById("navbar").style.visibility="visible";
}

document.getElementById("wrap1").addEventListener("mouseover",wraphid)
document.getElementById("wrap1").addEventListener("mouseout",wrapvis)
document.getElementById("wrap2").addEventListener("mouseover",wraphid)
document.getElementById("wrap2").addEventListener("mouseout",wrapvis)
document.getElementById("wrap3").addEventListener("mouseover",wraphid)
document.getElementById("wrap3").addEventListener("mouseout",wrapvis)