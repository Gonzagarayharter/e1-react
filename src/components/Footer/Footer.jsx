import React from 'react'
import { FooterDiv, RedesDiv, TextDiv } from './FooterStyles'
import { AiOutlineInstagram, AiFillFacebook, AiFillCopyrightCircle } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'

const Footer = () => {
  return (
    <FooterDiv>
        <TextDiv>
        <h1>Integral Deco 2023</h1>
        <AiFillCopyrightCircle />
        </TextDiv>
        <RedesDiv>
            <a href="#"><AiOutlineInstagram /></a>
            <a href="#"><AiFillFacebook /></a>
            <a href="#"><BsTiktok /></a>
        </RedesDiv>
    </FooterDiv>
  )
}

export default Footer