const fs = require('fs');
const path = require('path');

try {
    exports.command = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'command.json'), {encoding: 'utf-8'}));
} catch(err) {
    console.error(`Error reading the message file, ERR: ${err}`);
}
