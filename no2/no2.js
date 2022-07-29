function pizzaMozarella(score){
  var pizzaMozarella = ''
  for( i=1 ; i <= score ; i++){
    if(i%15 ===0){pizzaMozarella +='Pizza Mozarella\n'}
    else if(i%3 ===0){pizzaMozarella +='Pizza\n'}
    else if(i%5 ===0){pizzaMozarella +='Mozarella\n'}
    else{pizzaMozarella += i+'\n'}
  }
  return pizzaMozarella ;
}
// Test Case
console.log(pizzaMozarella(15));
// 1
// 2
// Pizza
// 4
// Mozarella
// Pizza
// 7
// 8
// Pizza
// Mozarella
// 11
// Pizza
// 13 
// 14
// PizzaMozarella
