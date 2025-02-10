function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0 ; i < arr.length - 1 ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)
}

let arr =[2,1,-5,4,11]
bubbleSort(arr)
console.log(arr);


// Big O = o(n^2)