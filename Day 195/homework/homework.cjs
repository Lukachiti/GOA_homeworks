//HTTP = hyper text transfer protocol

//HTTP request = მოთხოვნა, რომელიც იგზავნება სერვერზე, რათა მივიღოთ ინფორმაცია
//HTTP response = პასუხი, რომელიც სერვერი გვიბრუნებს მოთხოვნის შემდეგ

//HTTP GET = ინფორმაციის მიღებისთვის
//HTTP POST = ინფორმაციის გაგზავნისთვის
//HTTP PUT = ინფორმაციის განახლებისთვის
//HTTP DELETE = ინფორმაციის წასაშლელად  

//წიგნების წამოსაღებად = GET
// ახალი წიგნის დასამატებლად = POST
// წიგნის შესაცვლელად = PUT
// წიგნის წასაშლელად = DELETE

const http = require('http');


const obj = {
    name: 'John',
    age: 30
};

//შექმენი პატარა ობიექტი JavaScript-ში მომხმარებლის მონაცემებით და fetch-ის გამოყენებით გააგზავნე POST request.
const server = http.createServer((req, res) => {
   
    
});

fetch('http://localhost:3000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
    