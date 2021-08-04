console.log("hey!");
let diffArray = (arr1, arr2) => {
    let newArray =[];
    for(let i=0; i<arr1.length; i++){
        if (arr2.indexOf(arr1[i])=== -1){
            newArray.push(arr1[i]);
        }
    }
    for(let i=0; i<arr1.length; i++){
        if(arr1.indexOf(arr2[i])=== -1){
            newArray.push(arr2[i]);
        }
    }
    return newArray;
}
console.log(diffArray([1,2,3,5], [1,2,3,4,5]));
//console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["dioriote", "andesite", "grass", "dirt", "dead shrub"]))