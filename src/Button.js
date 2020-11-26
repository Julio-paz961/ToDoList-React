import styled from 'styled-components'

const Button = styled.button `
    background: #FFFDD0;
    border-radius: 3px;
    border: 2px solid #112244;
    color: #112244;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props => props.primary && `
        background: #112244;
        color: #FFFDD0;
    `}
`;

export default Button