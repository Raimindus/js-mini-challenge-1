function isAnagram(stringA, stringB) {
    stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
    stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");
    const stringASorted = stringA.split("")
    .sort()
    .join("");
    const stringBSorted = stringB.split("")
    .sort()
    .join("");
  
    return stringASorted == stringBSorted;
  }
// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')); // True
console.log(isAnagram('cicak', 'tengkorak')); // False
console.log(isAnagram('Melaut', 'Tualemaaaaaaaa'))
console.log(isAnagram('Headphone Rusak','kasUr Enohpdeah'))
