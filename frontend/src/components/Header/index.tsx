import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logo" />
                <h1>DSMeta</h1>
                <p>
                    Desenvoldio por: <a target="_blank" href="https://www.instagram.com/wd.lima">@Wellingtonlima</a>
                </p>
            </div>
        </header>


    )
}

export default Header;