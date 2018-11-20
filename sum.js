exports.sum = function(){
    let sum = 0; 
    for(let number of arguments){
        sum += Number(number)
    }
    return sum;
}