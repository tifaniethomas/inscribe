import './NavBar.css';
import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, navTitle, navNum }) {
    function handleLogOut() {
        userService.logOut()

        setUser(null)
    }
    return (
        <nav className='NavBar'>
            <div id="links">
                        <img src="https://i.imgur.com/Vl6Q2jt.png" alt="Inscribe Logo, a white outline of a fountain pen on a green square" />
                        &nbsp;&nbsp;
                        <Link to="/textBlocks">Current WIP</Link>
                        &nbsp; | &nbsp;
                        <Link to="/textBlocks/new">Sprint</Link>
            </div>
            <div id="title"><h1>Inscribe</h1></div>
            <div id="login">
                <span>Welcome, {user.name} </span>
                &nbsp; &nbsp;
                <Link to="" onClick={ handleLogOut }>Log Out</Link>
            </div>
        </nav>
    )
}