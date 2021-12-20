import {css} from 'styled-components'


export const mobile1 = (props)=>{
    return css`
        @media only screen and (max-width: 320px){
            ${props}
        }
    `
}

export const mobile2 = (props)=>{
    return css`
        @media only screen and (max-width: 425px){
            ${props}
        }
    `
}
export const tablet = (props)=>{
    return css`
        @media only screen and (max-width: 768px){
            ${props}
        }
    `
}