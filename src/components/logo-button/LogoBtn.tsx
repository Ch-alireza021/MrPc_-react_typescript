
import logo from "../../../public/icon.png"
import { Link } from "react-router-dom"

export const LogoBtn = () => {
  return (
   <Link to={"/"}>
    <img src={logo} alt="back to home logo"  width={110} height={50}/>
   </Link>
  )
}

