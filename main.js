'no-strict';

const github = require('@actions/github');

Object.defineProperty(github, 'github', {enumerable: true});
Object.defineProperty(process.env, 'env', { enumerable: true});
console.log('-------- GitHub Properties --------')
for (const prop in github) {
    console.log(`${prop}: ${github[prop]}`);
}

console.log('\n-------- Process.ENV properties --------')
for (const prop in process.env) {
    console.log(`${prop}: ${process.env[prop]}`);
}