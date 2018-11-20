exports.sum = function(){
    let sum = 0; 
    for(let number of arguments){
        console.log(typeof number)
        if(typeof number == "number"){
            sum += number
        }else{
            throw("sum() expects only numbers.")
        }
    }
    return sum;
}