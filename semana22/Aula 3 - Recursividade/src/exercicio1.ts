/*
A
*/ 


console.log("Imprimindo número...")
const printNumbers = (n: number) => {
    if (n >= 0) {
      printNumbers(n - 1);
      console.log(n);
    } 
  };

  printNumbers(10)


/*
B
*/ 

console.log("Imprimindo número em ordem decrescente...")
const printNumbersOrder = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbersOrder(n - 1);
  }
};

printNumbersOrder(11)