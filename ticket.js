const axios = require('axios')
let {key} = require('./access_key.js')

class Ticket {
    constructor(params){
        this.name = params.name;
        this.department = params.department;
        this.priority = params.priority;
        this.message = params.message;
    }
    
    save(){
        axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=${key}`, this)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    reset(){
        this.name = '';
        this.department = '';
        this.priority = '';
        this.message = ''
    }

    static findAll(){
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=${key}`)
        .then((response) => {
            let tickets = response.data;
            tickets.forEach((ticket) => {
                console.log(`${ticket.ticket_code}- ${ticket.name}`)
            })
        })
    }
    static findByCode(code){
        axios.get(`http://dct-api-data.herokuapp.com/tickets/${code}?api_key=${key}`)
        .then((response)=> {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    static findByPriority(priority){
        axios.get(`http://dct-api-data.herokuapp.com/tickets?priority=${priority}&api_key=${key}`)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    static findOneAndUpdate(code, params){
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${code}?api_key=${key}`, params)
        .then((response) =>{
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static findOneAndRemove(code){
        axios.delete(`http://dct-api-data.herokuapp.com/tickets/${code}?api_key=${key}`)
        .then((response) =>{
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err.response.statusText)
        })
    }

}


module.exports = {
    Ticket
}