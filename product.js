exports.product = function(){
    let product = 1;
    if(arguments.length < 2){
        return 0
    }
    for(let number of arguments){
        if(typeof number == "number"){
            product *= number
        }else{
            throw(new TypeError("product() expects only numbers."))
        }
    }
    return product;
}