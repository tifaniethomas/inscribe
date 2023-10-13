import './NavBar.css';
import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, navTitle}) {
    function handleLogOut() {
        userService.logOut()

        setUser(null)
    }
    return (
        <nav className='NavBar'>
            <div id="links">
                <Link to="/">Titles</Link>
                &nbsp; | &nbsp;
                <Link to="/textBlocks">Current WIP</Link>
                &nbsp; | &nbsp;
                <Link to="/textBlocks/new">Sprint</Link>
            </div>
            <div id="title">{ navTitle }</div>
            <div id="login">
                <span>Welome, {user.name} </span>
                &nbsp; &nbsp;
                <Link to="" onClick={ handleLogOut }>Log Out</Link>
            </div>
        </nav>
    )
}