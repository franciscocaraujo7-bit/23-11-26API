async function dados() {

const api = await fetch("https://jsonplaceholder.typicode.com/users");
if(api.status === 200){
console.log(await api.json())
}
}
await dados();

// console.log("a")setTimeout(()=>{
//     console.log("b")},500);
// console.log("c")