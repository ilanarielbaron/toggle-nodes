import styled from 'styled-components'

export const Container = styled.div `
    padding: 3rem;
    background: #FFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
        * {
            font-size: 11px;
        }
    }

    &:not(:last-child) {
        border-bottom: 2px solid #F5F6F7;
    }

    h1 {
        color: #222;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.7rem;
        margin-bottom: 30px;
    }

    p {
        padding-right: 1rem;
        color: #444;
    }

    form {
        margin: 30px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        > div {
            display: flex;
            flex-direction: column;
            min-width: 70px;

            &:first-child {
                margin-right: 10px;

                @media (max-width: 270px) {
                    margin-right: 0;
                }
            }
        }

        label {
            @media (max-width: 500px) {
                text-align: center;
            }
        }

        input {
           padding: 0.5rem 0.7rem;
           border: 1px solid #D34B4B;
           border-radius: 5px;
        }

        button {
            @media (max-width: 500px) {
                margin-top: 10px;
            }
        }
    }

    button {
        padding: 0.5rem 0.7rem;
        border: 1px solid #D34B4B;
        background: #D34B4B;
        color: #FFF;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        margin-left: 10px;
    }

    button:hover {
        background: #E06A6A;
    }

    th {
        cursor: pointer;
    }
`
