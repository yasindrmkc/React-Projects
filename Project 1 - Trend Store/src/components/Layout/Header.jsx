import "./Header.css"
import HeaderCardButton from "./HeaderCardButton"


const Header = ({onShowCart }) => {
  return (
    <header className="header">
        <h1>Kartal Mağaza</h1>
        <HeaderCardButton onShowCart={onShowCart} />
    </header>
  )
}

export default Header

