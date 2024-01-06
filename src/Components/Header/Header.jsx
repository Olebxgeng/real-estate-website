import Logo from "../../Images/logo.png"
import "./Header.css"

const Header = () => {
  return (
    <section className="header_wrapper">
        <div className="flexCenter paddings innerWidth header_container">
            <img src={Logo} alt="Logo" width={100}/>
            <div className="flexCenter header_menu">
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className="button"> 
                   <a href="" style={{background: 'transparent'}}>Contact</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}

export default Header