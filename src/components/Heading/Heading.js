import React from 'react'
import { Div, Header } from './styles'
import Logo from '../../assets/Logo.png'
import { Button } from 'react-bootstrap';
import { goToPostPage, goToHomePage } from '../../router/coordinator';
import { useNavigate } from 'react-router-dom';

export default function Heading() {
  const navigate = useNavigate();
  return (
    <Header>
      <img src={Logo} alt='Logo' />
      <Div>
        <Button variant='primary' onClick={() => { goToHomePage(navigate) }} style={{ margin: 'auto' }}>Página Inicial</Button>
        <Button variant='primary' onClick={() => { goToPostPage(navigate) }}>Adicionar um novo modelo</Button>
      </Div>
    </Header>
  )
}
