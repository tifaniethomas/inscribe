import './NavBar.css';
import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut()

        setUser(null)
    }
    return (
        <nav className='NavBar'>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/textBlocks">All Text Blocks</Link>
            &nbsp; | &nbsp;
            <Link to="/textBlocks/new">New Text Block</Link>
            &nbsp; &nbsp;
            <span>Welome, {user.name} </span>
            &nbsp; &nbsp;
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav>
    )
}