let nums=[1,2,3,4,5,6,7,8,9];

let newArr=nums.map(val=>{
 if(val%2!=0){
    return val;
 }
})

console.log(newArr);