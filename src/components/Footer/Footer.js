import React from 'react'
import { DivFooter, IconsDiv } from './styles';
import Github from '../../assets/github.png';
import Mail from '../../assets/email.png';

export default function Footer() {
    return (
        <DivFooter>
            <h6>© 2022 Developed by Karen Naomi Cardoso Kubo</h6>
            <IconsDiv>
                <a href='https://github.com/karennkubo'><img src={Github} alt="Github" /></a>
                <a href='mailto:karennckubo@gmail.com'><img src={Mail} alt="Mail" /></a>
            </IconsDiv>
        </DivFooter>
    )
}
