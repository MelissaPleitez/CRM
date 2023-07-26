import { table_info} from "./Variables.js";
import {DB, deleting_client, editing_client} from "./Functions.js";


class NEW{


creating_clients() {
   this.cleaning_table()
    const objectStore = DB.transaction('crm').objectStore('crm');
    const total = objectStore.count()

    total.onsuccess= function(){
        console.log(total.result)
    }

    objectStore.openCursor().onsuccess= function(e){
    // console.log( e.target.result)
    const crm_client= e.target.result;

    if(crm_client){

   const {name,email, telephone, company, id} = crm_client.value

    const tr_container= document.createElement('tr')
    tr_container.dataset.id=id
    const td_name= document.createElement('td')
    const td_email= document.createElement('td')
    const td_telephone= document.createElement('td')
    const td_company= document.createElement('td')
    const btn_delete= document.createElement('button')
    const btn_edit= document.createElement('button')
    td_name.colSpan= '2'
    td_name.innerHTML= `${name}`

    td_email.colSpan= '2'
    td_email.innerHTML= `${email}`

    td_telephone.colSpan= '2'
    td_telephone.innerHTML= `${telephone}`

    td_company.colSpan= '2'
    td_company.innerHTML= `${company}`


  

    btn_delete.onclick= ()=> deleting_client(id)
        // console.log('Eliminando..')
  
        btn_delete.classList.add('btn','btn-danger', 'mr2')
        btn_delete.innerHTML= `Delete`


    btn_edit.onclick=()=>editing_client(crm_client.value)
        // console.log('Editando..')
        btn_edit.classList.add('btn','btn-info','mr2')
        btn_edit.innerHTML=`Edit` 

   



    tr_container.appendChild(td_name)
    tr_container.appendChild(td_email)
    tr_container.appendChild(td_telephone)
    tr_container.appendChild(td_company)
    // tr_container.appendChild(btn_edit)
    // tr_container.appendChild(btn_delete)

    table_info.appendChild(tr_container)
    table_info.appendChild(btn_edit)
    table_info.appendChild(btn_delete)
    crm_client.continue()

    }



    }

    
}


cleaning_table(){
    while(table_info.firstChild){
    table_info.removeChild(table_info.firstChild)    

    }
}

    
}

export default NEW