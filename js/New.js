import { table_info} from "./Variables.js";
import {DB, deleting_client, editing_client} from "./Functions.js";


class NEW{

    
    alerts(message, type){

        if(type==='error'){
            Toastify({
  
                text: message,
                class:'text-center',
                style: {
                  background: "#b5586b",
                },
                duration: 3000
                
                }).showToast();
        }else{
            Toastify({
  
                text: message,
                class:'text-center',
                style: {
                  background: "#79b558",
                },
                duration: 3000
                
                }).showToast();
        }

    }


creating_clients() {
   this.cleaning_table()
    const objectStore = DB.transaction('crm').objectStore('crm');
    objectStore.openCursor().onsuccess= function(e){

    const crm_client= e.target.result;

   if(crm_client){

   const {name,email, telephone, company, id} = crm_client.value

    const tr_container= document.createElement('tr')
    const btn_container= document.createElement('td')
    tr_container.dataset.id=id
    const td_name= document.createElement('td')
    const td_email= document.createElement('td')
    const td_telephone= document.createElement('td')
    const td_company= document.createElement('td')
    const btn_delete= document.createElement('a')
    const btn_edit= document.createElement('a')
 
 
    td_name.colSpan= '2'

    td_name.innerHTML= `${name}`

    td_email.colSpan= '2'
    td_email.innerHTML= `${email}`

    td_telephone.colSpan= '2'
    td_telephone.innerHTML= `${telephone}`

    td_company.colSpan= '2'
    td_company.innerHTML= `${company}`


  

    btn_delete.onclick= ()=> deleting_client(id)
        btn_delete.classList.add('border-delete','mx-2', 'my-md-2')
        btn_delete.innerHTML= `Delete`


    btn_edit.onclick=()=>editing_client(crm_client.value)
        btn_edit.classList.add('border-edit')
        btn_edit.innerHTML=`Edit` 

   



    tr_container.appendChild(td_name)
    tr_container.appendChild(td_email)
    tr_container.appendChild(td_telephone)
    tr_container.appendChild(td_company)
    btn_container.appendChild(btn_edit)
    btn_container.appendChild(btn_delete)
    tr_container.appendChild(btn_container)
    table_info.appendChild(tr_container)
    

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