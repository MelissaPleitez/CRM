import {btnClient, btnNew, form, name_input, email_input, telephone_input, company_input} from "./Variables.js";
import {viewClient, viewNewClient, verifying_inputs, form_submit, create_db} from "./Functions.js";



window.onload= function(){
    create_db()
    all_events ()
}



function all_events (){
btnClient.addEventListener('click', viewClient)
btnNew.addEventListener('click', viewNewClient)
name_input.addEventListener('change', verifying_inputs)
email_input.addEventListener('change', verifying_inputs)
telephone_input.addEventListener('change', verifying_inputs)
company_input.addEventListener('change', verifying_inputs)
form.addEventListener('submit', form_submit)

}




    