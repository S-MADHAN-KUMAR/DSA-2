function selectionSort(arr){
    let n = arr.length
    for( let i=0 ; i< n-1 ; i++ ){
        let minIndex = i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            let temp = arr[i]
            arr[i]=arr[minIndex]
            arr[minIndex]=temp        
            }
        }
    return arr
}

const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));


// function selectionSort(arr){
//     let n = arr.length
//     for(let i=0;i<n-1;i++){
//         let minIndex = i
//         for(let j=i+1;j<n;j++){
//             if(arr[j].length<arr[minIndex].length){
//                 minIndex = j
//             }
//         }
//         if(minIndex!==i){
//             let temp = arr[i]
//             arr[i]=arr[minIndex]
//             arr[minIndex]=temp    
//         }
//     }
//     return arr
// }
// const fruits = ["banana", "apple", "grape", "orange", "kiwi"];
// console.log(selectionSort(fruits))


// function selectionSort(arr){
//     let n = arr.length
//     for(let i = 0 ; i < n - 1 ; i++){
//         let minIndex = i
//         for( let j = i + 1 ; j < n ; j++){
//             if(arr[j].name.length<arr[minIndex].name.length){
//                 minIndex = j
//             }
//         }
//         if(minIndex!==i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex]=temp 
//         }
//     }
//     return arr
// }
// const people = [
//     { name: "Alex" },
//     { name: "Zoe" },
//     { name: "Christopher" },
//     { name: "John" }
// ];
// console.log(selectionSort(people))
