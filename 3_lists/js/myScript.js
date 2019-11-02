try {
//let name = prompt("Please tell me your name");

//let hello = document.getElementById('HW');
//hello.innerHTML = "Hello, " + name;
setTimeout(function(){alert("Here you see an unordered list of colors, an ordered list of the first three pokemon, and an unordered list of yugioh card types, with an ordered list of monster types");}, 10000 )
console.log("ok");
}
catch(err) {
console.log(err.message); }
finally {
// If needed, you can do something here regardless of what happens in try/catch
}
