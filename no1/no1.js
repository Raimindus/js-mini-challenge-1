function scoreChecker(score) {
  if (score >= 90){
  result = 'A';
  return result;}
    else if (score >= 80){
      result='B';
      return result;
    }
    else if (score >= 70){
      result ='C';
      return result;
    }
    else if (score >= 60){
      result = 'D';
      return result;
    }
    else {
      result = 'E';
      return result;
    }
}

console.log(scoreChecker(92)); // Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(85)); // Anda mendapatkan nilai B.
console.log(scoreChecker(74)); // Anda mendapatkan nilai C.
console.log(scoreChecker(60)); // Anda mendapatkan nilai D.
console.log(scoreChecker(59)); // Anda mendapatkan nilai E.

console.log(scoreChecker(15));// Anda mendapatkan nilai E.
console.log(scoreChecker(30));// Anda mendapatkan nilai E.
console.log(scoreChecker(45));// Anda mendapatkan nilai E.
console.log(scoreChecker(62));// Anda mendapatkan nilai D.
console.log(scoreChecker(65));// Anda mendapatkan nilai D.
console.log(scoreChecker(66));// Anda mendapatkan nilai D.
console.log(scoreChecker(72));// Anda mendapatkan nilai C.
console.log(scoreChecker(73));// Anda mendapatkan nilai C.
console.log(scoreChecker(88));// Anda mendapatkan nilai B.
console.log(scoreChecker(99));// Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(100));// Selamat! Anda mendapatkan nilai A.
