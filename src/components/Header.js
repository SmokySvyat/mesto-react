import logo from '../images/logo.svg';

function Header() {
    return ((
    <header className="header">
            <a className="logo" href="index.html"><img src={logo} alt="логотип проекта" /></a>
    </header>
    ))
}

export default Header