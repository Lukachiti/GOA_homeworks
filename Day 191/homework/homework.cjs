const buf = Buffer.from("Hello, World!");
console.log(buf);


console.log(buf.toString());


const buf2 = Buffer.alloc(10);
buf2.write("lukaaaaaaa")
console.log(buf2.toString());


const buf3 = Buffer.from("Hello");
const buf4 = Buffer.from(" World");
const buf5 = Buffer.concat([buf3, buf4]);
console.log(buf5.toString());

const buf6 = Buffer.from("halo");
const buf7 = Buffer.from("halo");
console.log(buf6.equals(buf7));

//------------------------------------------------

console.log(process.pid)

//current working directory
console.log(process.cwd())
//argument variables 
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

if (process.argv.length == 0) {
    console.log("No arguments provided.");
    process.exit(1);
}
