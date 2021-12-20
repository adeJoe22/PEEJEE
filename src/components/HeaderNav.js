import React, {useState} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { mobile2, mobile1, tablet } from '../MediaScreen'
import MenuIcon from '@mui/icons-material/Menu';

const HeaderNav = ({bg}) => {

    return (
        <>
            <Container bg={bg}>
                <Wrapper>                    
                    <Logo>PEEJEE <span>TRADING ACADEMY</span></Logo>
                    <Phone> Call Us: +234 703 7535 238</Phone>                                        
                    <Navigations>
                        <Home to="/">Home</Home>
                        <Blog to="/blogpage">Blog</Blog>
                        <Contact to="/contact">Contact Us</Contact> 
                          
                    </Navigations> 
                    <Menu><MenuIcon/></Menu> 
                </Wrapper>
            </Container>
        </>
    )
}

export default HeaderNav


const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${({ bg })=> (bg ?  "#ECFBFF" : "red")};
    position: sticky;
    top: 0;
    z-index: 50;
    box-shadow: 0px 0px 6px 3px rgba(0,0,0,0.4);
    /* background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
    transition: 1000ms all; */

    ${tablet({height: "60px"})}
    ${mobile2({height: "50px",})}
   
    ${mobile1({height: "50px"})}
    
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${tablet({
        height: "100%",
        width: "100%"})}
    ${mobile2({       
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems:" center",
        justifyContent: "space-between"
        
        })}
    ${mobile1({        
        width: "100%",
        height: "100%"
        })}
        
`

const Logo = styled.div`
    color: #0089FF;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    margin: 0px 50px;
    span{
        color: black;
        margin-left: 7px;
    }
    ${tablet({
        fontSize: "20px",
        width: "290px",
        marginLeft: "0px"
        })}
    ${mobile2({
        fontSize: "13px",         
        width: "200px",
        marginLeft: "20px"})}

    ${mobile1({        
        fontSize: "11px",              
        width: "300px",
        marginLeft: "15px"
        })}
    
`
const Phone = styled.div`
    color: grey;
    font-weight: 400;
    ${tablet({fontSize: "13px"})}
    ${mobile2({
        display: "none"})}
        ${mobile1({        
        display: "none"
        })}
`
const Navigations = styled.div`
    display: flex;
    margin-right: 50px;
    ${tablet({display: "none"})}
    ${mobile2({        
        display: "none"})}
    ${mobile1({        
       display: "none"
        })}
    
`
const Home = styled(NavLink)`
    font-weight: 700;
    margin: 0px 5px;
    padding: 3px 7px;
    border-radius: 3px;
    transition: all 350ms;
    text-decoration: none;
    color: grey;
    :hover{
        background-color: #094C89;
        color: #ECFBFF;
    }
    ${mobile2({display: "none"})}
`
const Blog = styled(NavLink)`    
    font-weight: 700;
    padding: 3px 7px;
    border-radius: 3px;
    transition: all 350ms;
    text-decoration: none;
    color: grey;
    :hover{
        background-color: #094C89;
        color: #ECFBFF;
    }
    ${mobile2({display: "none"})}
`
const Contact = styled(NavLink)`
    font-weight: 700;
    margin: 0px 5px;
    padding: 3px 7px;
    border-radius: 3px;
    transition: all 350ms;
    text-decoration: none;
    color: grey;
    :hover{
        background-color: #094C89;
        color: #ECFBFF;
    }
    ${mobile2({display: "none"})}
`
const Menu = styled.div`
    display: none;
    ${mobile2({        
        display: "flex",
        marginRight: "15px"
        })}
    ${mobile1({        
        display: "flex",
        marginRight: "15px"
        })}
    ${tablet({
        display: "flex",})}
`