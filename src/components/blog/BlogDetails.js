import React from 'react'
import {useParams} from 'react-router-dom'
import data from '../../data.json'
import styled from 'styled-components'
import img from './forex.jpg'
import {mobile2, tablet} from '../../MediaScreen'

const BlogDetails = () => {

    const {id} = useParams()
    const mydata = data[id-1]
    return (
        <>
            <Container>
                <Wrapper>
                    <Heading>{mydata.title}</Heading>
                    <Identity>
                        <Author>Author: <span>Peace Atiga</span></Author>
                        <Date>Posted on: <span>July 7, 2021</span></Date>
                        <ReadingTime>5 mins</ReadingTime>
                    </Identity>
                    <BlogImage><BImg src={img}/></BlogImage>
                    <Content>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the, But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the
                    <br/>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the, But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the
                    </Content>
                    <About>
                        <Title>About the author</Title>
                        <Hold>
                            <AuthorImage src={img}/>
                            <AuthorInfo> 
                                Peace Atiga must explain to you how
                                 all this mistaken idea of 
                                 denouncing pleasure and praising
                                  pain was born and I will give you
                                   a complete account of the system,
                                    expound the actual teachings of
                                     the But I must explain to you
                                      how all this mistaken idea of
                                       denouncing pleasure and 
                                       praising pain was born and I 
                                       will give you a complete 
                                       account of the system,
                                        and expound"
                            </AuthorInfo>
                        </Hold>
                    </About>
                </Wrapper>
            </Container>
        </>
    )
}

export default BlogDetails

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    ${mobile2({width: "100%"})}
`
const Wrapper = styled.div`
     width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobile2({width: "100%"})}
`
const Heading = styled.div`
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-top: 100px;
    width: 700px;
    ${mobile2({
        width: "300px",
        fontSize: "23px",
        })}
`
const Identity = styled.div`
    font-size: 13px;
    display: flex;
    margin-top: 30px;
    ${mobile2({
        width: "170px",
        fontSize: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
        })}
`
const Author = styled.div`
    border-right: 1px solid grey;
    padding: 10px;
    margin-right: 10px;
    ${mobile2({
        borderBottom: "1px solid grey",
        borderRight: "none",
        margin: "none",
        display: "flex",
        justifyContent: "center"
        })}
`
const Date = styled.div`
    border-right: 1px solid grey;
    padding: 10px;
    margin-right: 10px;
    ${mobile2({
        borderBottom: "1px solid grey",
        borderRight: "none",
        margin: "none",
        display: "flex",
        justifyContent: "center"
        })}
`
const ReadingTime = styled.div`
    padding: 10px;
    margin-right: 10px;
    ${mobile2({
        borderBottom: "none",
        borderRight: "none",
        margin: "none",
        display: "flex",
        justifyContent: "center"
        })}
`

const  BlogImage = styled.div`
    width: 700px;
    height: 250px;
    background-color: red;
    margin-top: 30px;
    ${mobile2({
       width: "100%",
        })}
`
const BImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`
const Content = styled.div`
    margin-top: 30px;
    width: 680px;
    font-size: 14px;
    line-height: 27px;
    ${mobile2({
       width: "260px",
       fontSize: "11px",
       textAlign: "left",
       lineHeight: "24px"
        })}
`
const About = styled.div`
    width: 680px;
    margin: 60px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mobile2({
       width: "300px",
      
        })}
`
const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
`
const Hold = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    ${mobile2({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
        })}
`

const AuthorImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #094C89;
`
const AuthorInfo = styled.div`
    width: 350px;
    font-size: 12px;
    margin-left: 20px;
    ${mobile2({
       width: "240px",
       fontSize: "10px",
       marginLeft: "0px",
       textAlign: "center",
       marginTop: "15px"
        })}
`