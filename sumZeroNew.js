
// sum zero
// [-5, -4, -3, -2, 0, 2, 4, 6, 8]

function sumZero(array) {
    let left = 0;
    let right = array.length - 1

    while(left < right) {
        sum = array[left] + array[right] 

        if(sum ===0){
            return [array[left], array[right]]
        }
        else if(sum < 0) {
            left++; 
        }else {
            right--
        }
    }
}



const result = sumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(result)