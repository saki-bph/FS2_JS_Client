try {
  greeting();
function greeting(){

  let i = document.getElementById('index');
  i.innerHTML=("Hello, nice to meet you");
}
function pageOne(){
    let i = document.getElementById('page1');
}
console.log("ok");
}
catch(err) {
document.getElementById("HW").innerHTML = err.message; }
finally {
// If needed, you can do something here regardless of what happens in try/catch
}
