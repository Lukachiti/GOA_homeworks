let div = document.getElementById("onlydiv")
async function fetc(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const result = await response.json();
    const res = result.slip.advice
    div.textContent = res
    
    
    
}
fetc()