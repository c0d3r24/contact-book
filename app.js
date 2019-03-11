const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new contact',
    builder: {
        name: {
            describe: 'Name of the person/contact',
            demandOption: true,
            type: 'string'
        },
        phone: {
            describe: 'Contact number of the person',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Name: ' + argv.name);
        console.log('Phone: ' + argv.phone);
    } 
})

yargs.parse();