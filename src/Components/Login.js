import React from 'react';
import styled from 'styled-components'
import logo from '../assets/logo192.png'
import {auth, provider} from '../firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL
            }
            props.setUser(newUser)
            localStorage.setItem('user', JSON.stringify(newUser))

        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src={logo}/>
                <h1>Sign into Slack</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign in with Google
                </SignInButton>
            </Content>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(63, 14, 64);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background: white;
    padding: 100px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const SlackImg = styled.img`
    height: 100px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 550;
`