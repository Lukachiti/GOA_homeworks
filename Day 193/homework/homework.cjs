const { clear } = require("console");
let os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());

//მთლიანი მეხსიერება გიგაბაიტებში
console.log(os.totalmem() / 1024 / 1024 / 1024);
//თავისუფალი მეხსიერება გიგაბაიტებში
console.log(os.freemem() / 1024 / 1024 / 1024);

console.log(os.uptime() / 60 / 60);

console.log(os.cpus().length);
console.log(os.cpus());

console.log(os.homedir());

console.log(process.pid)
console.log(process.platform)
console.log(process.version)

console.log(process.cwd());
//current working directory
console.log(__dirname)
//directory name of the current module
setTimeout(() => {
    console.log("Hello, World!");
}, 3000);
//process.exit()

setInterval(() => {
    console.log("program running...");
}, 2000);

setTimeout(() => {
    clearInterval();
    process.exit();
}, 5000);