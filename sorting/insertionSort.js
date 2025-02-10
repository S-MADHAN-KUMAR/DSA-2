function insertionSort(arr){
for(let i=1;i<arr.length;i++){
    let numberToInsert = arr[i]
    let j = i -1
    while(j >=0 && arr[j] > numberToInsert){
        arr[j+1] = arr[j]
        j = j-1
    }
    arr[j+1] = numberToInsert
}
}

let arr =[2,1,-5,4,11]
insertionSort(arr)
console.log(arr);


// Big O = o(n^2)