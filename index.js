const fs = require("fs");
const crypto = require("crypto");

const resumeToken = crypto.randomBytes(30).toString("base64")

// Output environment variables. Secrets are automatically masked.
console.log("::group::Environment variables")
console.log(`::stop-commands::${resumeToken}`)

for (const [key, value] of Object.entries(process.env).sort()) {
  console.log(`${key}=${value}`);
}

console.log(`::${resumeToken}::`)
console.log("::endgroup::")

// Output prettified event JSON.
console.log("::group::Event JSON")
console.log(`::stop-commands::${resumeToken}`)

const event = JSON.parse(fs.readFileSync(process.env["GITHUB_EVENT_PATH"]));
console.log(JSON.stringify(event, null, 2));

console.log(`::${resumeToken}::`)
console.log("::endgroup::")
