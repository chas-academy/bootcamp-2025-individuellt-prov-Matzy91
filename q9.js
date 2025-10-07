// skapa funktionerna som anropas i myCalculator så att de funkar så som koden och alla "cases" antyder

export function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}

function myAddFunction(){
  var num1 = 0; 
  var num2 = 0; 

  const result = num1 + num2;

  return result;
}

function mySubtractFunction(){
  var num1 = 0;
  var num2 = 0;

  const result = num1 - num2;
  return result
}

function myMultiplyFunction(){
   var num1 = 0;
  var num2 = 0;

  const result = num1 * num2;
  return result
}

function myDivisionFunction(){
  var num1 = 0;
  var num2 = 0;

  const result = num1 / num2;
  return result
}

myCalculator();