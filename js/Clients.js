


class CLIENT {
    constructor(){
        this.client= []
    }


    mixing_clients(list_client){
        this.client=[...this.client, list_client]
    }

    editing(clients){
        this.client= this.client.map((edit)=>edit.id === clients.id? clients: edit)
        }

    deleting(id){
     this.client= this.client.filter((clients)=> clients.id !== id )
    }

   
}


export default CLIENT