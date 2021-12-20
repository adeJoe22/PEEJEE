import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
const AdminLogin = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Logo>PEEJEE <span>TRADING ACADEMY</span></Logo>
                    <Title>Welcome: Admin</Title>
                    <Form>
                        <Username placeholder="Username"/>
                        <Password placeholder="Password" type="password"/>
                        <Login to="/admindashboard">Login</Login>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default AdminLogin

const Container = styled.div`
    width: 100%;
    height: 100vh;

`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
`
const Logo = styled.div`
    color: #0089FF;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    margin-top: 70px;
    span{
        color: black;
        margin-left: 7px;
    }
`
const Title = styled.div`
    margin-top: 40px;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-top: 50px;
`
const Username = styled.input`
    padding: 5px;
    margin-top: 10px;
    border: 1px solid grey;
    border-radius: 3px;
`
const Password = styled.input`
    padding: 5px;
    margin-top: 10px;
    border: 1px solid grey;
    border-radius: 3px;
`
const Login = styled(NavLink)`
    padding: 5px;
    margin-top: 10px;
    border: none;
    color: white;
    background-color: #094C89;
    font-weight: 600;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`