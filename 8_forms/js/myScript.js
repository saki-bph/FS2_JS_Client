try {
  let words = ["Apple","Book","Cat"];
  let numbers = [1,2,3];

  let a = document.getElementById("apple");
  let b = document.getElementById("book");
  let c = document.getElementById("cat");

  a.innerHTML = words[0] + numbers[0];
  b.innerHTML = words[1] + numbers[1];
  c.innerHTML = words[2] + numbers[2];

  console.log("ok");
}
catch(err) {
document.getElementById("HW").innerHTML = err.message; }
finally {
// If needed, you can do something here regardless of what happens in try/catch
}
