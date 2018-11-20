exports.sum = function(){
    let sum = 0; 
    for(let number of arguments){
        if(parseInt(sum) == NaN){
            throw("sum() expects only numbers.")
        }
        sum += Number(number)
    }
    return sum;
}