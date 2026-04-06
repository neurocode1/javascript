// let x = document.querySelector("h2");
// setTimeout(function(){
      
//     x.style.color="red";
//     x.style.fontFamily="cursive";
    

// }, 4000);
// // console.log(x);



// let y = document.querySelector("h1");
// y.style.backgroundColor="yellow";
// // y.innerHTML="This is heading 1";

// setTimeout(function(){
//     y.innerHTML="This is heading 1";
// }, 2000);






//if in want to change the inner html in thml iusng a jaavssceipt then we can use inner html property of the element




// now we can change html using set time out 




let  s = document.getElementById("x");
s.addEventListener("click", function(){
s.style.color="red";
s.style.backgroundColor="yellow";
s.style.fontFamily="cursive";

})



let y = document.getElementById("y");
y.addEventListener("mouseover", function(){

    y.style.color="blue";
    y.style.backgroundColor="pink";


})

y.addEventListener("mouseleave", function(){

    y.style.color="blue";
    y.style.backgroundColor="white";
})


let z = document.getElementById("z");
y.addEventListener("click",function(){
    z.style.color="green";
    z.style.backgroundColor="black";
})

z.addEventListener("click", function(){
    s.style.color="white";
    s.style.backgroundColor="red";
    s.innerHTML="ye to badhiya hai";

})
