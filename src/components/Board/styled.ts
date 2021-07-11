import styled from 'styled-components'

export const Container = styled.div `
    padding: 1rem;
    background: #FFF;
    border-radius: 10px;
    
    &:not(:last-child) {
        border-bottom: 2px solid #F5F6F7;
    }
    
    h1 {
        color: #222;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.7rem;
    }
    
    p {
        padding-right: 1rem;
        color: #444;
    }
    
    button {
        padding: 0.5rem 0.7rem;
        border: 1px solid #D34B4B;
        background: #D34B4B;
        color: #FFF;
        border-radius: 20px;
        cursor: pointer;
        outline: none;
    }
    
    button:hover {
        background: #E06A6A;
    }
`
