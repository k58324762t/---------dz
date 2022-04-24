const btn = document.getElementById('btn')
function get(){
getFunc('https://jsonplaceholder.typicode.com/users')
async function getFunc(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

}

btn.addEventListener('click', get)