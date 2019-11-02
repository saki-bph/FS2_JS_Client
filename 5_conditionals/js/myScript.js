try {
  let words = ["Banana","Book","Cat"];
  let numbers = [10, 12, 6];
  let aNumber  = 7;
  let aLetter = 'B'
  let sameWords = [];
  let greaterNumbers = [];

  if (numbers[0] > aNumber) {
    greaterNumbers[0] = numbers[0];
  }

  if (numbers[1] > aNumber) {
      greaterNumbers[1] = numbers[1];
    }

  if (words[0].substring(0,1) == aLetter) {
      sameWords[0] = words[0];
  }

  if (words[1].substring(0,1) == aLetter) {
      sameWords[1] = words[1];
  }
document.write("<p>List of words starting with the letter B </p>");
document.write("<ol><li>"+sameWords[0]+"</li><li>"+sameWords[1]+"</li></ol>");
document.write("<p>List of numbers from array greater than 7</p>");
document.write("<ul><li>"+greaterNumbers[0]+"</li><li>"+greaterNumbers[1]+"</li></ul>");
  console.log("ok");
}
catch(err) {
document.getElementById("HW").innerHTML = err.message; }
finally {
// If needed, you can do something here regardless of what happens in try/catch
}
