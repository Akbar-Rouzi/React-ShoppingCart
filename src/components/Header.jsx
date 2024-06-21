

export default function Header({cart}) {   
    const cartQuantity = cart.items.length;
    return (
        <>
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model" />
                    <h1>Elegant Context</h1>
                </div>
                <p>
                    <button>Cart({cartQuantity})</button>
                </p>
            </header>
        </>
    )
}