var number = 0;
while (number < 2 || number >10){
    number = prompt('Elija un numero entre el 2 y el 10');
}

var index = 1;
while (index <=10){
    console.log(number + " * " + index + " = " + number * index);
    index++
}
