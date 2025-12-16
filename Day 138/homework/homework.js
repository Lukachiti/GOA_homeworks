let root = ReactDOM.createRoot(document.getElementById("root"));
let bd = document.body
bd.style.height = '1000px'

function Header() {
    return React.createElement(
        "header",
        { style: { backgroundColor: "#646e81ff", padding: "0px", textAlign: "center" } },
        React.createElement('h1', null, "Welcome To My Site"),
        React.createElement('p', null, "feel free to wxplore")
    );
}

function Main() {
    return React.createElement(
        "main",
        { style: { padding: "20px" } },
        React.createElement("h2", null, "heres an image"),
        React.createElement(
            "button",
            null,
            "click me bro"
            
        ),
        React.createElement(
            "img",
            null,
            //"https://asset.msi.com/resize/image/global/product/product_1737081391c78c1a2adecd19b4c2d8b8266d84a75b.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
        )
    );
}

function Footer() {
    return React.createElement(
        "footer",
        { style: { background: "#eee", padding: "10px", textAlign: "center" } },
        React.createElement("small", null, "© 2025 My First React Project")
    );
}

function App() {
    return React.createElement(
        "div",
        { style: {height: "100%"}},
        Header(),
        Main(),
        Footer(),
    );
}

root.render(App());