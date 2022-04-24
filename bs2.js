const btn2 = document.getElementById('btn2')
const div = document.getElementById('asd')
btn2.addEventListener('click',getfuns3)
function getfuns3(){
async ()=>{
    const responce = fetch('https://jsonplaceholder.typicode.com/users')
    const data = await  responce.json()
  
    data.forEach(obj => {
        Object.entries(obj).forEach(([name, username]) => {

     div.innerHTML+=  
           ` <ol>
                <li>${obj.name}</li>
                <li>${obj.username}</li>
                --------------------

            </ol>`
        });
        
    });

};


}
