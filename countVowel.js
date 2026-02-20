function countVowel(str){
    let count=0;
for(let val of str){
    if(val==='a' || val==='e' || val==='i' || val==='o' || val==='u'){
        count++;
    }
}
return count;
}

console.log(countVowel("aeiou"));