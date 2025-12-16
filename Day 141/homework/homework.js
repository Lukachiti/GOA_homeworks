//jsx არის ობიექტი რომელიც ინახავს ელემენტის მონაცემებს და შეიძლება გარდაიქმნას html ელემენტად
//ორივე ერთნაირია მაგრამ js ჩვეულებრივი ჯავასკრიპტის ფაილებისთვის იყენებენ ხოლო jsx კომპონენტების შესაქმნელად
//კომპონენტი არის ფუნქცია რომელიც აბრუნებს საიტის კომპონენტებს რომლებიც რამდენიმე თაგს მოიცავს
let root = ReactDOM.createRoot(document.getElementById("root"))
function Comp(){
    return (
        <p>
            hello someone!
        </p>
    )
}
function Footer(){
    return (
        <p>
            site made by me:)
        </p>
    )
}
function Header(){
    return (
        <div>
            <h1>welcome</h1>
            <a>home</a>
            <a>services</a>
            <a>contacts</a>
            <a>settings</a>
        </div>
    )
}
function Product(){
    return (
        <div>
            <img src="https://www.metapcs.com/wp-content/uploads/2025/06/aspng-min-1024x1024.png"></img>
            <h1>ASTRAL9950</h1>
            <p>Processor: AMD RYZEN 9 9950X3D
            Graphics Card: NVIDIA GEFORCE RTX 5090 ASTRAL
            Memory: 64GB DDR5 6000MT/s</p>
            <p>price: $6899</p>
        </div>
    )
}
function All(){
    return (
        <>
            <Comp />
            <Footer />
            <Header />
            <Product />

        </>
    )
}
root.render(<All />)

