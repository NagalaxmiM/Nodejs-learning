//given array
const arr = [7,3,5,6,8,4]

var minimum = arr[0]
var maximum = arr[0]


max_func = (arr) =>{

    for (let i=0; i<arr.length;i++){
        if (arr[i] > maximum){
            maximum = arr[i]
        }
      }
    return maximum
}

min_func = (arr) =>{
    for (let i=0; i<arr.length;i++){
        if (arr[i] < minimum){
            minimum = arr[i]
        }
      }
    return minimum
}

let max_number = max_func(arr)
let min_number = min_func(arr)

max_number
min_number

