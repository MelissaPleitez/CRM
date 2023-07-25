const clients= document.querySelector('#viewClient')
const viewNew= document.querySelector('#viewNew')
const menu = document.querySelector('#menu')
const btnClient= document.querySelector('#btn-client')
const btnNew = document.querySelector('#btn-new')

btnClient.addEventListener('click', viewClient)
btnNew.addEventListener('click', viewNewClient)

function viewClient(){
    if(!viewNew.classList.contains('d-none')){

        viewNew.classList.add('d-none')
        clients.classList.remove('d-none')
       
        console.log('Client')
    }

}


function viewNewClient(){

    if(viewNew.classList.contains('d-none')){

        // clients.classList.add('d-none')
        clients.classList.add('d-none')
        viewNew.classList.remove('d-none')
        console.log('New Client')
       
    }  
}
