// 1)json გამოიყენება რომ მონაცემები გახდეს სხვადასხვა ენებისთვის ხელმისაწვდომი
// 3)ობიექტის სახი
let div = document.getElementById("h4")
async function fetc1(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const result = await response.json();
    div.textContent = result.body
    
    
    
    
    
    
    
}
fetc1()




async function fetc2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const result = await response.json();
    console.log(result)
    
    
    
    
    
    
    
    
}
fetc2()