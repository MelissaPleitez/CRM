import {viewNew, clients, name_input, email_input, telephone_input, 
company_input, allClients, display_container, table, btn_dark_mode} from "./Variables.js";
import NEW from "./New.js";
import CLIENT from "./Clients.js";
export let DB
export let edition= false;

const ui = new NEW()
const clients_info= new CLIENT()


export function viewClient(){
    if(!viewNew.classList.contains('d-none')){

        viewNew.classList.add('d-none')
        clients.classList.remove('d-none')
       
        console.log('Client')
    }

}


export function viewNewClient(){

    if(viewNew.classList.contains('d-none')){

        // clients.classList.add('d-none')
        clients.classList.add('d-none')
        viewNew.classList.remove('d-none')
        console.log('New Client')
       
    }  
}




export function verifying_inputs(e){


allClients[e.target.name] = e.target.value



}




export function form_submit(e){
    e.preventDefault()

    const {name_input,email_input, telephone_input, company_input } = allClients

if(name_input === '' || email_input === '' || telephone_input === '' || company_input === ''){
    console.log('Empty inputs!')
    return
}

if(e.target.id === 'email' && !check_email(email_input)){
    console.log('Email format incorrect!')
    return
}


if(edition){
    
    clients_info.editing({...allClients})

    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore =transaction.objectStore('crm')
    objectStore.put(allClients)

    transaction.oncomplete= ()=>{
        console.log('Success.!')
        document.querySelector('button[type="submit"]').textContent= 'Submit'
        if(!viewNew.classList.contains('d-none')){

            viewNew.classList.add('d-none')
            clients.classList.remove('d-none')
           
            console.log('Client')
        }
        edition= false
    }

    transaction.onerror= ()=>{
        console.log('Hubo un error.!')
    }

}else{

allClients.id= Date.now()
clients_info.mixing_clients({...allClients})
const transaction= DB.transaction(['crm'], 'readwrite')
const objectStore = transaction.objectStore('crm')
objectStore.add(allClients)

objectStore.oncomplete= function(){
    console.log('Agregado!')
}

}


cleaning_allClient()
form.reset()
ui.creating_clients()
if(!viewNew.classList.contains('d-none')){

    viewNew.classList.add('d-none')
    clients.classList.remove('d-none')
   
    console.log('Client')
}
console.log('Inputs Success!')


}

function check_email(email){

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const result= regex.test(email)
    return result
}


function cleaning_allClient(){
    allClients.name= ''
    allClients.email= ''
    allClients.telephone= ''
    allClients.company= ''

}


export function deleting_client(id){

    const transaction= DB.transaction(['crm'], 'readwrite')
    const objectStore= transaction.objectStore('crm')
    
    objectStore.delete(id)
    window.location.reload()
    objectStore.oncomplete=()=>{
        ui.creating_clients()
    }
    
    objectStore.onerror=()=>{
        console.log('error al delete!')
    }
    
    }

 export function editing_client(clients_new){


    const {name, email, telephone, company, id} = clients_new

    name_input.value= name
    email_input.value=email
    telephone_input.value= telephone
    company_input.value= company


    allClients.name= name
    allClients.email= email
    allClients.telephone= telephone
    allClients.company= company
    allClients.id= id

    document.querySelector('button[type="submit"]').textContent= 'Update'
    if(viewNew.classList.contains('d-none')){

        // clients.classList.add('d-none')
        clients.classList.add('d-none')
        viewNew.classList.remove('d-none')
        console.log('New Client')
       
    }  
    edition= true
 }   



export function create_db(){

    let new_db = window.indexedDB.open('crm', 1)
    
    
    new_db.onerror= function(){
        console.log('DB error!')
    }
    
    new_db.onsuccess= function(){
        console.log('DB ready!')
        DB= new_db.result

        ui.creating_clients()
    }
    
    new_db.onupgradeneeded= function(e){
    
    const result_DB = e.target.result
    
    const infoObject= result_DB.createObjectStore('crm', {
        keyPath: 'id',
        autoIncrement: true
    })
    
    infoObject.createIndex('name', 'name', {unique: false});
    infoObject.createIndex('email', 'email', {unique: false});
    infoObject.createIndex('telephone', 'telephone', {unique: false});
    infoObject.createIndex('company', 'company', {unique: false});
    infoObject.createIndex('id', 'id', {unique: true});
    
    
    console.log('DB created!')
    
    }
    
    
    }


   
export function dark_mode(){

    if(!display_container.classList.contains('modo_dark')){
        display_container.classList.add('modo_dark', 'text-white')
        table.classList.add('text-white')
        btn_dark_mode.classList.remove('text-dark')
        btn_dark_mode.classList.add('text-white')
        
    }else{
        display_container.classList.remove('modo_dark', 'text-white')
        table.classList.remove( 'text-white')
        btn_dark_mode.classList.add('text-dark')
        btn_dark_mode.classList.remove('text-white')
    }
  
    bg-white
     console.log('modo dark..')
    
    }