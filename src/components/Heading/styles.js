import styled from 'styled-components';

export const Header = styled.div`
    width:100%;
    height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background: rgb(0,102,255);
    background: linear-gradient(0deg, rgba(0,102,255,1) 0%, rgba(255,255,255,1) 48%, rgba(119,204,255,1) 100%);
    img{
        width: 100px;
    }
`
export const Div = styled.div`
    display: flex;
    column-gap: 10px;
    justify-content: space-around;
`