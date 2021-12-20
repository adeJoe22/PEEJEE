import React from 'react'
import styled from 'styled-components'
import {mobile2, tablet} from '../../MediaScreen'


const ContactPage = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>We are always here for you</Title>
                    <Caption>Want to know more about us?</Caption>
                    <Form>
                        <Input>
                            <FullName placeholder="Fullname"/> 
                            <Phone placeholder="Phone"/>
                        </Input>
                        <Email placeholder="Email"/>
                        <Comment placeholder="Comment"/>
                        <Submit>SUBMIT</Submit>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default ContactPage

const Container = styled.div`
    width: 100%;
    height: 100vh;
    ${mobile2({
        height: "100%",
        width: "100%"})}
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mobile2({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        })}
`
const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 100px;
    ${tablet({
        fontSize: "26px",
        textAlign: "center",
        marginTop: "60px"})}
    ${mobile2({
        fontSize: "20px",
        textAlign: "center",
        marginTop: "60px"})}
`
const Caption = styled.div`
    color: grey;
    font-size: 20px;
    margin-top: 30px;
    ${tablet({
        fontSize: "14px", 
      })}
    ${mobile2({
        fontSize: "12px", 
      })}
`
const Form = styled.div`
    width: 380px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    ${mobile2({
       display: "flex",
        alignItems: "center",
        justifyContent: "center"})}
`
const Input = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile2({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px"})}
`
const FullName = styled.input`
    padding: 5px;
    border: 1px grey solid;
    border-radius: 3px;
    ${mobile2({
        display: "flex",
        flexDirection: "column",
        width: "200px"})}
`
const Phone = styled.input`
    padding: 5px;
    border: 1px grey solid;
    border-radius: 3px;
    ${mobile2({
        display: "flex",
        flexDirection: "column",
        width: "200px",
        marginTop: "10px"})}
`
const Email = styled.input`
    padding: 5px;
    margin-top: 10px;
    border: 1px grey solid;
    border-radius: 3px;
    ${mobile2({
        display: "flex",
        flexDirection: "column",
        width: "200px"})}
`
const Comment = styled.textarea`
    padding: 5px;
    margin-top: 10px;
    height: 120px;
    border: 1px grey solid;
    border-radius: 3px;
    resize: none;
    ${mobile2({
        display: "flex",
        flexDirection: "column",
        width: "200px"})}
`
const Submit = styled.button`
    padding: 5px;
    margin-top: 10px;
    font-weight: 600;
    color: white;
    background-color: #094C89;
    border: none;
    border-radius: 3px;
    ${mobile2({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "210px"})}
`