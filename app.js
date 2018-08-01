const {Ticket} = require('./ticket');

//npm install --save yargs

//const argv = require('yargs).argv;
const {argv} = require('yargs');

/*
    node filename command options
    node app.js findAll
    node app.js save --name='ani' --department='Technical'
    node app.js findByCode --code='DCT-bcc1'
    node app.js findByPriority --priority='high'
    node app.js findOneAndUpdate --code = 'DCT-bcc1' --priority = '{
        status:open
    }'
    node app.js findOneAndRemove --code = 'DCT-bcc1'
*/

let command = argv._[0];

if(command == 'findAll'){
    Ticket.findAll();
}else if(command == 'save'){
    let ticket = new Ticket({
        name: argv.name,
        department: argv.department,
        priority: argv.priority,
        message: argv.message
    });
    ticket.save();
}else if(command == 'findByCode'){
    Ticket.findByCode(argv.code);
}else if(command == 'findByPriority'){
    Ticket.findByPriority(argv.priority);
}else if(command == 'findOneAndUpdate'){
    Ticket.findOneAndUpdate(argv.code, argv.params);
}else if(command == 'findOneAndRemove'){
    Ticket.findOneAndRemove(argv.code);
}else{
    console.log('Invalid Command')
}

//save and reset

// let ticket = new Ticket({
//     name: 'Arjun',
//     department: 'Technical',
//     priority: 'High',
//     message: 'Internet is slow'
// });

//  ticket.save();

//findAll

//Ticket.findAll();


//console.log(ticket);
//ticket.reset();
//console.log(ticket);

// Ticket.findByCode(code)
// uri = '/tickets/code?api_key=44198c05fb597756'
// Ticket.findByCode('DCT-39df')

//var priority = 'High'
//Ticket.findByPriority(priority)
// uri = '/tickets?priority=High&api_key=44198c05fb597756'
//Ticket.findByPriority('High');

//  Ticket.findOneAndUpdate('DCT-443f', {
//      //status: 'open'
//      priority: 'High'
//  })

// Ticket.findOneAndRemove('DCT-84b1');