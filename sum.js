exports.sum = function(){
    let sum = 0; 
    for(let number of arguments){
        if(typeof number == "number"){
            sum += number
        }else{
            throw(new TypeError("sum() expects only numbers."))
        }
    }
    return sum;
}