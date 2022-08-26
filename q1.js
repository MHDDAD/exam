function anagram(a , b){
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a.split("").sort().join("") === b.split("").sort().join("") ){
        console.log("is equal")}
    
}

findAnagram("mahdi" , "hmadi")