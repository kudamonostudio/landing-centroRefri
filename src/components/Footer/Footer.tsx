import React from 'react'
import { FooterContainer, Kudamono } from './Footer.styled'

function Footer() {
  return (
    <FooterContainer>
        <ul>
            <li>Nuestros servicios</li>
            <li>Testimonios</li>
            <li>Empresas</li>
            <li>Contacta con nosotros</li>
        </ul>
        <Kudamono>
        <small><i>desarrollado por kudamono studio @2023</i></small>
        </Kudamono>
    </FooterContainer>
  )
}

export default Footer