import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo } from './StyledNav';
import NavItems from './NavItems';
import Burger from './Burger';
import { ThemeToggle } from '../ThemeToggle';


const Navbar = ({theme, toggleTheme, transparent}) => {

    // sticky header
    const [sticky, setSticky] = useState(false);

    window.addEventListener('scroll', () => {
        if(window.scrollY > 60){
            setSticky(true);
        }
        else{
            setSticky(false);
        }      
    })



    const [openSiteBar, setOpenSiteBar] = useState(false);

    const toggleSiteBar = () => {
        setOpenSiteBar(prevState => !prevState)
    }
    const closeSiteBar = () => {
        setOpenSiteBar(false)
    }
    return (
        <Nav sticky={sticky}>
            <Logo>
                <Link to='/'>Stefan Kessel</Link>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </Logo>
            <Burger open={openSiteBar} toggle={toggleSiteBar}/>
            <NavItems open={openSiteBar} close={closeSiteBar}/>
        </Nav>
    )
}

export default Navbar
