const int = document.getElementById('int')
const btn3 = document.getElementById('task3')

function funs (){
    const intValue=int.value
    const num = 10
    async function hg (){
            if ( intValue == num ){
                     return Promise.resolve("вы угадали ")
        
            }else {
                return Promise.reject('вы ошиблись ')
            }
    
}
hg().then(res=>console.log(res),res=>console.log(res))
}
btn3.addEventListener('click',()=>{funs()})
