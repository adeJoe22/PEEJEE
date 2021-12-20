import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import styled from 'styled-components';


const AdminDashboard = () => {
    return (
        <>
           <Container>
               <Wrapper>
                   <Header>
                       <Logo>PEEJEE <span>TRADING ACADEMY</span></Logo>
                       <LogOut>LogOut</LogOut>
                   </Header>
                   <SideBar>
                        <Home><HomeIcon/></Home>
                        <Blog><PostAddIcon/></Blog>
                   </SideBar>
                   <Display>Display</Display>
               </Wrapper>
            </Container> 
        </>
    )
}

export default AdminDashboard

const Container = styled.div`
    width: 100%;
    height: 100vh;

`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    
`
const Logo = styled.div`
    color: #0089FF;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    margin: 70px;
    span{
        color: black;
        margin-left: 7px;
    }

`
const LogOut = styled.button`
    
`
const SideBar = styled.div`
     
`
const Home = styled.div``
const Blog = styled.div``
const Display = styled.div``