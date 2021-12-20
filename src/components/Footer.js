import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
import {mobile2, mobile1, tablet} from '../MediaScreen'


const Footer = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Logo>PEEJEE <span>TRADING ACADEMY</span></Logo>
                    <Info>Copyright 2021</Info>
                    <SocialHandle>
                        <FB><FacebookIcon style={{marginLeft: "10px"}}/>@peejee</FB>
                        <Youtube><YouTubeIcon style={{marginLeft: "10px"}}/>peejee</Youtube>
                        <Instagram><InstagramIcon style={{marginLeft: "10px"}}/>@peejee</Instagram>
                    </SocialHandle>
                </Wrapper>
            </Container>
        </>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #094C89;
    ${tablet({      
       width: "100%",
       height: "100px",
       marginTop: "50px"   
         })}
          ${mobile1({        
       width: "100%",
       height: "80px",
              
       })}
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center; 
    ${tablet({      
      display: "flex",
      flexDirection: "column",
             
     })}  
    ${mobile2({      
      display: "flex",
      flexDirection: "column",
             
     })}  
`
const Logo = styled.div`
    color: #0089FF;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    margin-left: 50px;
    span{
        color: white;
        margin-left: 7px;
    }
    flex: 1;
    ${tablet({      
      fontSize: "18px", 
        marginTop: "15px",
        marginLeft: "0px"           
         })}
    ${mobile2({      
      fontSize: "15px", 
        marginTop: "15px",
        marginLeft: "0px"           
         })}
          ${mobile1({        
       marginTop: "10px",
       marginLeft: "0px",
       fontSize: "12px"
       
       })}
`
const Info = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    color: white;
    ${tablet({      
      fontSize: "12px", 
              
        display: "flex",
    justifyContent: "center" 
         })}
    ${mobile2({      
    fontSize: "8px",        
    display: "flex",
    marginLeft: "15px", 
    justifyContent: "center" 
         })}
`
const SocialHandle = styled.div`
    margin-right: 50px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    color: white;
    ${tablet({      
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0px"        
     })}
    ${mobile2({      
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0px"        
     })}
    ${mobile1({      
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0px"        
     })}
`
const FB = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-style: italic;
    margin-left: 5px;
    ${mobile2({      
      fontSize: "10px",         
     })}
`
const Youtube = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-style: italic;
    margin-left: 5px;
    ${mobile2({      
      fontSize: "10px",         
     })}
`
const Instagram = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-style: italic;
    margin-left: 5px;
    ${mobile2({      
      fontSize: "10px",         
     })}
`

