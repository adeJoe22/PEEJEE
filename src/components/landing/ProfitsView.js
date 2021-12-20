import React from 'react'
import styled from 'styled-components'
import img from './forex2.jpg'
import {mobile2 , mobile1, tablet} from '../../MediaScreen'


const ProfitsView = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Heading>Profits from trading</Heading>
                    <CardHolder>
                        <Card>
                            <Display src={img}/>
                        </Card>
                        <Card>
                            <Display src={img}/>
                        </Card>
                        <Card>
                            <Display src={img}/>
                        </Card>
                    </CardHolder>
                </Wrapper>
            </Container>
        </>
    )
}

export default ProfitsView


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ECFBFF;
    ${tablet({        
      marginTop: "40px",  
      width: "100%",
      height: "100%"   
        })}
    ${mobile2({        
      marginTop: "40px",  
      width: "100%",
      height: "100%"   
        })}
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${tablet({        
       alignItems: "center",     
       justifyContent: "center",
       display: "flex",
       width: "100%"      
        })}
    ${mobile2({        
       alignItems: "center",     
       justifyContent: "center",
       display: "flex",
       width: "100%"      
        })}
`
const Heading = styled.div`
    margin-left: 100px;
    margin-top: 60px;
    font-size: 28px;
    font-weight: 400;
    color: grey;
    ${tablet({        
       fontSize: "23px",       
       marginLeft: "0px",
       marginTop: "30px"
              
        })}
    ${mobile2({        
       fontSize: "20px",       
       marginLeft: "0px",
       marginTop: "30px"
              
        })}
         ${mobile1({        
       marginLeft: "0px",
       fontSize: "16px",
       marginTop: "30px"
       })}
`
const CardHolder = styled.div`
    margin: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    ${tablet({       
        marginTop: "30px",
        flexWrap: "no-wrap",
        width: "750px"            
        })}
    ${mobile2({       
        marginTop: "30px",
        flexWrap: "wrap",
        width: "230px"             
        })}
    
         ${mobile1({     
        
       marginTop: "30px"
       })}
`
const Card = styled.div`
    width: 200px;
    height: 250px;
    margin: 10px;
    border-radius: 3px;

`
const Display = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #fff;
    border-radius: 3px;
`
