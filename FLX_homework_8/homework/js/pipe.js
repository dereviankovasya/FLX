function pipe(plus){

let i = 1;
for(i; i < arguments.length; i++) {
        plus = arguments[i](plus);
    }
    return plus;
}

function addOne(a){
    return a + 1;
}

pipe(1, addOne);