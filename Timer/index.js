const parse=require('url');
const URLString="http://www.etutorialspoint.com/index.php/nodejs/node-js-filesystem"
console.log(parse(URLString));
console.log(URLString.parse);