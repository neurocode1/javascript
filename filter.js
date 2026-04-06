//filter

// function fun (ele){
//     if (ele%2!=0){
//         return true;
//     } else {
//         return false;
//     }
// }

let arry= [ 2, 4 ,2 , 5 ,6,7 ,9 ]
console.log(arry);

let brr = arry.filter(function(ele){
    if (ele%2!=0){
        return true;
    } else {
        return false;
    }
})

console.log(brr);

let crr = arry.filter(function(ele){
    if (ele<5){
        return true;
    } else {
        return false;
    }
})

console.log(crr);