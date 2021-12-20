import React from 'react'
import styled from 'styled-components'
import img from './img.jpeg'
import {mobile2, mobile1, tablet} from '../../MediaScreen'
const Clients = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>What our clients are saying</Title>
                    <MainHold>
                        <ContentHolder>
                            <Client>
                                <ClientImg src={img}/>
                            </Client>
                            <Info>
                                <ClientDetails>
                                    But I must explain to you how all 
                                    this mistaken idea of denouncing 
                                    pleasure and praising pain was 
                                    born and I will give you a 
                                    complete account of the system, 
                                    and expound the actual, I will give you a 
                                    complete account of the system, 
                                    and expound the actual  
                                </ClientDetails>
                                <ClientName>Shawn Okoro</ClientName>
                            </Info>                            
                        </ContentHolder>
                        <ContentHolder>
                            <Client>
                                <ClientImg src={img}/>
                            </Client>
                            <Info>
                                <ClientDetails>
                                    But I must explain to you how all 
                                    this mistaken idea of denouncing 
                                    pleasure and praising pain was 
                                    born and I will give you a 
                                    complete account of the system, 
                                    and expound the actual, I will give you a 
                                    complete account of the system, 
                                    and expound the actual  
                                </ClientDetails>
                                <ClientName>Shawn Okoro</ClientName>
                            </Info>                            
                        </ContentHolder>
                    </MainHold>                    
                </Wrapper>
            </Container>
        </>
    )
}

export default Clients

const Container = styled.div`
    width: 100%;
    height: 80vh;
    ${tablet({        
      marginTop: "20px",  
      width: "100%",
      height: "100%"   
        })}
    ${mobile2({        
      marginTop: "20px",  
      width: "100%",
      height: "100%"   
        })}
         ${mobile1({        
       width: "100%",
       height: "100%",
       fontSize: "12px"
       
       })}
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${tablet({        
      display: "flex",
      flexDirection: "column",  
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
        
        })}
    ${mobile2({        
      display: "flex",
      flexDirection: "column",  
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
        
        })}
`
const Title = styled.div`
    margin-left: 100px;
    margin-top: 60px;
    font-size: 28px;
    font-weight: 400;
    color: grey;
    ${tablet({      
      fontSize: "23px", 
      margin: "0px"        
     })}
    ${mobile2({      
      fontSize: "20px", 
      margin: "0px"        
     })}
    ${mobile1({      
      fontSize: "16px", 
      margin: "0px"        
     })}
`

const MainHold = styled.div`
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    ${mobile2({      
      margin: "0px"       
     })}
`
const ContentHolder = styled.div`
    margin: 60px;
    display: flex;
    ${mobile2({ 
     margin: "25px"
         })}
   
`
const Client = styled.div`
    width: 150px;
    height: 150px;
    border: 4px solid #2198FF;
    ${mobile2({        
      width: "100px",
      height: "100px"   
        })}
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    
`
const ClientImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const ClientDetails = styled.div`
    font-size: 12px;
    width: 220px;
    ${mobile2({ 
       width: "180px",
    fontSize: "10px"
         })}
    ${mobile2({ 
       width: "140px",
    fontSize: "10px"
         })}
`
const ClientName = styled.div`
    margin-top: 15px;
    color: red;
    font-weight: 500;
    ${mobile2({        
    fontSize: "13px"
         })}
    ${mobile1({        
    fontSize: "12px"
         })}
`

