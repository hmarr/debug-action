
Object.defineProperty(process.env, 'env', { enumerable: true});

console.log('\n-------- Process.ENV properties --------')
for (const prop in process.env) {
    console.log(`${prop}: ${process.env[prop]}`);
}