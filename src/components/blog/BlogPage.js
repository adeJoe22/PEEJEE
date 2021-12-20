import React from 'react'
import styled from 'styled-components'
import img from './forex.jpg'
import img2 from './forex6.jpeg'
import img3 from './img1.png'
import {Link} from 'react-router-dom'
import {mobile2, tablet} from '../../MediaScreen'
import data from '../../data.json'

const BlogPage = () => {

    // to={`blogdetail/:id${props.id}`}
    return (
        <>
            <Container>
                <Title>Guides with insight to make you succeed</Title>
                <CardWrapper>
                    {data?.map((props)=> (
                        <Card key={props.id}>
                        <ImageBox >
                            <Image src={props.image}/>
                        </ImageBox>
                        <Date> <span>{props.date}</span></Date>
                        <BlogTitle>{props.title}</BlogTitle>
                        <ReadMore to={`/blogdetails/:id${props.id}`}>Read more</ReadMore>
                    </Card>
                    ))}
                    
                </CardWrapper>
            </Container>
        </>
    )
}

export default BlogPage

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-top: 100px;

    ${tablet({
        fontSize: "26px",
        textAlign: "center",
        marginTop: "60px"})}
    ${mobile2({
        width: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        textAlign: "center",
        marginTop: "60px"})}
`
const CardWrapper = styled.div`
    /* margin: 80px 100px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 700px;
    margin-top: 30px;
    ${mobile2({
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "300px" 
       })}
`
const Card = styled.div`
    border: 1px solid black;
    position: relative;
    border-radius: 5px;
    margin: 20px;
    width: 250px;
    height: 280px;
    :hover{
        box-shadow: 0px 0px 6px 3px rgba(0,0,0,0.4);
    }
`
const ImageBox = styled.div`
    width: 250px;
    height: 200px;
    border-radius: 5px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
`
const Date = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    /* background-color: red; */
    border-radius: 50%;
    height: 38px;
    width: 38px;
    font-size: 10px;
    display: flex;
    align-content:center;
    justify-content: center;
    font-weight: 600;
    box-shadow: 0px 0px 6px 6px rgba(9,76,137,0.4);
    /* border: 2px solid white; */
    span{
      margin-top: 12px;
    }
`
const BlogTitle = styled.div`
    padding: 10px;
`
const ReadMore = styled(Link)`
    color: red;
    font-size: 12px;
    text-decoration: underline;
    padding: 7px 5px;
    margin: 10px 5px;
    border-radius: 5px;
    width: 68px;
    :hover{
        background-color: red;
        color:white;
        text-decoration: none;
        font-weight: 500;
        cursor: pointer;
    }

`