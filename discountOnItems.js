//10 percent discount on each item of array

let item=[250,645,300,900,50];
for(let i=0;i<item.length;i++){
let newPrice=item[i]-(item[i]*0.1);
item[i]=newPrice;
}
for(let i of item){
    console.log(i);
} 