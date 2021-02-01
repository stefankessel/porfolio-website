import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'
import { ContainerDiv, ButtonGroup } from './LoginStyles';
import { Button } from '../../components/button/Button';

const Login = ({history}) => {

    const isAuth = useSelector( state => state.auth);

    useEffect( () => {
        if(isAuth){
            history.push('/resume')
        }
    },[isAuth, history])
    return (
        <ContainerDiv>
            <h1>Login</h1>
            <p>You're about to learn a lot about me. Let me learn a little about you. You can login with your google account or your github account below.</p>
            <ButtonGroup>
                <a href="/auth/google"><Button bg='#4285F4'>Login with Google</Button></a>
                <a href="/auth/github"><Button bg="#24292e">Login with Github</Button></a>
            </ButtonGroup>
        </ContainerDiv>
    )
}

export default Login
