/* Pattern-1: Rectangular Star Pattern
Problem Statement: Given an integer N, print the following pattern. */

function printStars1(n){
 
    for(let i=0;i<n;i++ ){
        
        for(let j=0;j<n;j++){
            console.log('* ');
           
        }
        console.log('');
        
    }
}


//console.log(printStars1(5));

function printStars2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <=i; j++) {
      console.log(i+1);
    }
    console.log("");
  }
}

//console.log(printStars2(3));

function printStarsRev(n){
    for(let i=n;i>0;i--){
        for(let j=i;j>0;j--){
            console.log(j);
        }
        console.log("");
    }
}

//console.log(printStarsRev(5));

function printXmasTree(n){
    for(let i=0;i<n;i++){
        for (let j=0;j<n-i-1;j++){
            console.log(' ');
        }
        for(let k=0;k<2*i+1;k++){
            console.log("*");
        }
         for (let j = 0; j < n - i - 1; j++) {
           console.log(" ");
         }
         //console.log('');
    }
}
//console.log(printXmasTree(3));
function printRevXmasTree(n){
    for(let i=0;i<n;i++){
        for (let j=0;j<n;j++){
            console.log(' ');
        }
        for(let k=0;k<=n-2*i-1;k++){
            console.log("*");
        }
        for (let j = 0; j < n; j++) {
          console.log(" ");
        }
         //console.log('');
    }
}
//console.log(printRevXmasTree(5));

function sortObj(a,b){
    if(a[1]!==b[1]){
        
        return a[1]-b[1]
    }else return b[1]-a[1]
}

const obj = { 1: 1, 2: 2, 3: 2 };
console.log(Object(Object.entries(obj).sort(sortObj)));