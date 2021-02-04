import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../../redux/actions/authActions'
import styled from 'styled-components';
import Backdrop from '../backdrop/Backdrop';
import routes from '../../data/routes';

const Ul = styled.ul`
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        padding-right: 1rem;
        min-width: 70%;
        z-index: 400;

        li{
            text-transform: uppercase;
            padding: 5px 15px;
        }
        a{
            border-bottom: 2px solid transparent;
            transition: all .4s ease-in-out;
            font-weight:bold;
            font-size: 1rem;
        }
        a:hover{
            color: ${props => props.theme.sidebarColor};
            border-bottom: 2px solid ${props => props.theme.sidebarColor};

        }
        @media (max-width: 920px){
            flex-flow: column nowrap;
            justify-content: center;
            height: 100vh;
            width: 300px;
            position: fixed;
            top: 0;
            right: 0;
            padding-top: 3.5rem;
            background-color: var(--footerColor);
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
            transition: transform 0.3s ease-in-out;

            li{
                padding: 1rem 0;
            }
            a{
                color: #fffffe;
            }

            

        }
`

const NavItems = ({open, close}) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth)
    
    useEffect( () => {
        dispatch(userLogin())
    },[dispatch])
 
    return (
        <>
        <Backdrop showBackdrop={open} closeBackdrop={close}/>
        <Ul open={open}>
            { window.innerWidth < 920 &&
                <li onClick={close} >
                    <Link to='/'>Home</Link>
                </li>
            }
            {routes.map( route => (
                        <li key={route.label} onClick={close}>
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    )               
            )}
            {user && (
                <li><a href="/api/user/logout">Logout</a></li>
            )}
        </Ul>
        </>
    )
}

export default NavItems
