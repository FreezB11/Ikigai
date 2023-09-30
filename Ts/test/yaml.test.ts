import * as yaml from 'yaml'
import * as fs from 'fs'

// let yamlString = `
// name: Janet 
// age: 24
// city: Manhattan
// `;

const file = fs.readFileSync('src/test.yaml', 'utf8')

let yamlString = 'test.yaml'

let obj = yaml.parse(file);
let name = obj.user.name;

console.log(name);