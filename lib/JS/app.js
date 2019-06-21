function Header(props) {
    return (
        <header>
            <nav className="headernav1">
                <h1 className="headernav1h1">3D Printer Wiki</h1>
                <ul className="headernav1ul">
                    <li className="headernav1ulli">Forum</li>
                    <li className="headernav1ulli">Picks of the Week</li>
                    <li className="headernav1ulli">Upload Your Own Designs!</li>
                </ul>
            </nav>
        </header>
    );
}
ReactDOM.render(
    <Header />,
    document.getElementById('root')
)

function Footer(props) {
    return (
        <footer>
            <p className="footerp">Connect with us!</p>
            <nav className="footernav">
                <ul className="footernavul">
                    <li className="footernavulli">Facebook</li>
                </ul>
            </nav>
        </footer>
    )
}