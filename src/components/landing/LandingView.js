import React from 'react'
import styled from 'styled-components'
import bg from './forex2.jpg'
import videos from './video.mp4'
import {mobile2, mobile1, tablet} from "../../MediaScreen"
const LandingView = () => {
    return (
        <>
            <Container>
                <Holder>                
                <Wrapper >
                    <video src={videos}
                        type="video/mp4"
                        autoPlay= {true}
                        loop
                        muted
                        // controls
                        />
                    <Heading>GET STEADY INCOME WITH GOOD LEVERAGE</Heading>
                    <Highlights>
                        <span>HIGH LEVEL SECURITY</span>
                        <span>24/7 TRADING & SUPPORT</span>
                        <span>ADVANCE TRADING TOOLS</span>
                    </Highlights>
                    <Caption>...Get Trained, Practice, Trade and Earn</Caption>
                </Wrapper>
                <Join>
                    <Title>
                        JOIN NOW
                    </Title>
                    <Form>
                        <Name placeholder="Name"/>
                        <Phone placeholder="Phone"/>
                        <Email placeholder="Email" type="email"/>
                        <Register>Register</Register>
                    </Form>
                </Join>
                </Holder>
            </Container>
        </>
    )
}

export default LandingView

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${tablet({width: "100%"})}
    ${mobile2({        
       width: "100%",       
       })}

`
const Holder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    ${tablet({width: "100%"})}
    ${mobile2({        
       width: "100%",
        height: "100%"
       })}
    ${mobile1({        
       width: "100%",
       
       })}
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.65);
    video{
        position: absolute;
        left: 0;        
        z-index: -100;
        width: 100%;
        height: 95%;
        object-fit: cover;
        transition: all 350ms;
        opacity: 1;
    }
    ${tablet({
        width: "100%",
        height: "100%",
        display: "flex",
       alignItems: "center",
       justifyContent: "center",
       flexDirection: "column"
        })}
    ${mobile2({        
       width: "100%",
       height: "100%",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       flexDirection: "column"})}

${mobile1({        
       width: "100%",
       height: "100%",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       flexDirection: "column"
       })}
`
const Heading = styled.div`
    font-size: 40px;
    font-weight: 500;
    margin-top: 100px;
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    color: white;
    padding: 15px;
    text-align: center;
    /* background-color: rgba(0, 0, 0, 0.5); */
    ${tablet({
       display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        width: "400px",
        textAlign: "center",
        lineHeight: "40px",
        fontWeight: "500",
        marginTop: "120px",
        padding: "10px"
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        width: "240px",
        textAlign: "center",
        lineHeight: "30px",
        fontWeight: "500",
        marginTop: "50px",
        padding: "10px"})}
`
const Highlights = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    font-size: 20px;
    color: white;
    padding: 15px;
    width: 380px;
    /* height: 30px;
    overflow: hidden; */
   
    /* animation: move 10s ease-in-out infinite alternate;
    @keyframes move {
            25%{
                transform: translateY(-50px)
            }
            50%{
                transform: translateY(-100px)
            }
            75%{
                transform: translateY(-150px)
            }
            100%{
                transform: translateY(-200px)
            }
        } */
    span{
        /* height: 100%; */
        line-height: 30px;
        letter-spacing: 3px;
    }
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        width: "280px",
        textAlign: "center",
        marginTop: "20px",
        
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        width: "240px",
        textAlign: "center",
        marginTop: "20px",
        
        })}
`
const Caption = styled.div`
    margin: 40px 100px;
    color: white;
    font-style: italic;
    font-weight: 600;
    padding: 15px;
    width: 350px;
    text-align: center;
    
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        width: "280px",
        textAlign: "center",
        marginTop: "60px",
        fontWeight: "300"
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "11px",
        width: "240px",
        textAlign: "center",
        marginTop: "20px",
        fontWeight: "300"
        })}
`
const Join = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    margin: 70px 0px;
    background-color: #094C89;
    padding: 20px 50px;
    border-radius: 4px;
    /* box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.3); */
    border: none;
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "12px",
        width: "250px",
        margin: "20px"
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "12px",
        width: "200px",
        margin: "20px"
        })}
        ${mobile1({        
       width: "180px",
       
       })}
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "15px",
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        })}
`
const Form = styled.div`
    margin-top: 20px;
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "12px",
        width: "230px",
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "12px",
        width: "180px",
        })}
`
const Name = styled.input`
    padding: 5px;
    margin: 0px 5px;
    border: none;
    border-radius: 3px;
    :focus{
        outline: 1px solid cyan;
    }
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        width: "220px",
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
        width: "220px",
        })}
        ${mobile1({        
       width: "200px",
       
       })}
`
const Phone = styled.input`
    padding: 5px;
    margin: 0px 5px;
    border: none;
    border-radius: 3px;
    :focus{
        outline: 1px solid cyan;
    }
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        width: "220px",
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        width: "220px",
        })}
         ${mobile1({        
       width: "200px",
       
       })}
`
const Email = styled.input`
    padding: 5px;
    margin: 0px 5px;
    border: none;
    border-radius: 3px;
    :focus{
        outline: 1px solid cyan;
    }
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        width: "220px",
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        width: "220px",
        })}
         ${mobile1({        
       width: "200px",
       
       })}
`
const Register = styled.button`
    padding: 5px 55px;
    margin: 0px 5px;
    border: none;
    border-radius: 3px;
    background-color: red;
    color: white;
    font-weight: 500;
   
    ${tablet({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        width: "230px",
        })}
    ${mobile2({        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        width: "230px",
        })}
         ${mobile1({        
       width: "210px",
       
       })}
`