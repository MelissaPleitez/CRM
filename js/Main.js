import {btnClient, btnNew, form, name_input, email_input, telephone_input, company_input, btn_dark_mode} from "./Variables.js";
import {viewClient, viewNewClient, verifying_inputs, form_submit, create_db, dark_mode} from "./Functions.js";




document.addEventListener('DOMContentLoaded', () =>{
    create_db()
    all_events ()
})



function all_events (){
form.addEventListener('submit', form_submit)
btnClient.addEventListener('click', viewClient)
btnNew.addEventListener('click', viewNewClient)
name_input.addEventListener('change', verifying_inputs)
email_input.addEventListener('change', verifying_inputs)
telephone_input.addEventListener('change', verifying_inputs)
company_input.addEventListener('change', verifying_inputs)
btn_dark_mode.addEventListener('click', dark_mode)


}




    