let s1 = document.getElementById("sec1");
s1.addEventListener("mouseover", function() {
    let x= Math.floor(Math.random()*100)
    s1.innerHTML=`<h1>${x}</h1>`;
}
)

s1.addEventListener("mouseout", function() {
    s1.style.backgroundColor = "transparent";
}
)


let s2 =document.getElementById("sec2");
let crl ="red"
s2.addEventListener("mouseover", function() {

if (crl=="red"){
    s2.style.backgroundColor = "red";
    crl="blue"
}
else if (crl=="blue"){
    s2.style.backgroundColor = "blue";
    crl="pink"
}
else if (crl=="pink"){
    s2.style.backgroundColor = "pink";
    crl="green"
}
else{
    s2.style.backgroundColor = "green";
    crl="red"
}
})





s2.addEventListener("mouseout", function() {
    s2.style.backgroundColor = "transparent";
    

})








let s3 = document.getElementById("sec3");
s3.addEventListener("mouseover", function() {
let r1 = Math.floor(Math.random()*256);
let r2 = Math.floor(Math.random()*256);
let r3 = Math.floor(Math.random()*256);
// s3.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;


}
)

s3.addEventListener("mouseout", function() {
    s3.style.backgroundColor = "transparent";
}
)