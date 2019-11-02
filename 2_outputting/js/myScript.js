try {
let name = prompt("Please tell me your name");

let hello = document.getElementById('HW');
hello.innerHTML = "Hello, " + name;
console.log("ok");
}
catch(err) {
document.getElementById("HW").innerHTML = err.message; }
finally {
// If needed, you can do something here regardless of what happens in try/catch
}
