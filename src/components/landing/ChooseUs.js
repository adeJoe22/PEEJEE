import React from 'react'
import styled from 'styled-components'
import img1 from './lowincome.png'
import {mobile2, mobile1, tablet} from '../../MediaScreen'

const ChooseUs = () => {
    return (
        <>
           <Container>
                <Wrapper>
                    <Heading>Why Choose Us</Heading>
                    <CardRow>
                        <CardHolder>
                            <Avatar src={img1}/>
                            <Card>
                                <Title>Low Capital Investment</Title>
                                <Content>
                                    But I must explain to you how all this 
                                    mistaken idea of denouncing pleasure and 
                                    praising pain was born and I will give 
                                    you a complete account of the system, 
                                    and expound the actual teachings of 
                                    the great explorer of the truth, 
                                    the master-builder of human happiness. 
                                    
                                </Content>
                            </Card>
                        </CardHolder>
                        <CardHolder>
                            <Avatar src={img1}/>
                            <Card>
                                <Title>Risk Management</Title>
                                <Content>
                                    But I must explain to you how all this 
                                    mistaken idea of denouncing pleasure and 
                                    praising pain was born and I will give 
                                    you a complete account of the system, 
                                    and expound the actual teachings of 
                                    the great explorer of the truth, 
                                    the master-builder of human happiness. 
                                    
                                </Content>
                            </Card>
                        </CardHolder>
                        <CardHolder>
                            <Avatar src={img1}/>
                            <Card>
                                <Title>One on One Support</Title>
                                <Content>
                                    But I must explain to you how all this 
                                    mistaken idea of denouncing pleasure and 
                                    praising pain was born and I will give 
                                    you a complete account of the system, 
                                    and expound the actual teachings of 
                                    the great explorer of the truth, 
                                    the master-builder of human happiness. 
                                    
                                </Content>
                            </Card>
                        </CardHolder>
                    </CardRow>
                    
                </Wrapper> 
           </Container> 
        </>
    )
}

export default ChooseUs

const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* margin-top: 30px; */
    display: flex;
    align-items: center;
    justify-content: center;
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px", 
        width: "100%",
        height: "100%" 
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px", 
        width: "100%",
        height: "100%" 
        })}
        
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",        
        width: "300px",
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",        
        width: "220px",
        })}
         ${mobile1({        
       width: "200px",
       
       })}
`
const Heading = styled.div`
    margin-left: 100px;
    /* margin-top: 50px; */
    font-size: 28px;
    font-weight: 400;
    color: grey;
    ${tablet({        
       fontSize: "23px",
       width: "250px",              
        })}
    ${mobile2({        
       fontSize: "20px",
       width: "250px",              
        })}
         ${mobile1({        
       width: "200px",
       fontSize: "16px"
       })}
`

const CardRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    flex-wrap: wrap;
    ${mobile2({        
       marginTop: "20px"       
        })}
       
`
const CardHolder = styled.div`    
    margin: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    ${mobile2({        
      margin: "20px"     
        })}
          
`
const Card = styled.div`
    width: 250px;
    height: 300px;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    transition: all 350ms;
    border: 1px solid lightgray;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);
    ${mobile1({        
       width: "220px",
       height: "250px"
       
       })}
    
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: contain;
    border: 4px solid #0089FF;
    padding: 5px;
    ${mobile2({        
       fontSize: "16px",
       width: "30px",       
       height: "30px"       
        })}
        ${mobile1({        
       width: "20px",
       height: "20px",
       fontSize: "12px"
       
       })}
`
const Title = styled.div`
    font-weight: 600;
    color: #0089FF;
    text-align: center;
    font-size: 22px;
    ${mobile2({        
       fontSize: "14px",
       width: "200px"       
        })}
         ${mobile1({        
       
       fontSize: "14px"
       
       })}
`
const Content = styled.div`
    font-weight: 300;
    color: #1e1e1e;
    text-align: left;
    font-size: 14px;
    width: 220px;
    ${mobile2({        
       fontSize: "13px",
       width: "200px"       
        })}
         ${mobile1({        
      
       fontSize: "12px"
       
       })}
`