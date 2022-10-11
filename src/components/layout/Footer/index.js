import React from 'react'
import Container from '../Container/index'
import ImportedIcons from '../../../assets/icons/icons'
import style from './style.module.css'

const linkLinkedin = 'https://www.linkedin.com'
const linkInstagram = 'https://www.instagram.com'
const linkFacebook = 'https://www.facebook.com'
const linkTwitter = 'https://www.twitter.com'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container customClass='column'>
        <div className={style.social__icons}>
          <a href={linkFacebook} target='_blank' rel='noopener noreferrer' className={style.social__link}>
            <ImportedIcons.FACEBOOK />
          </a>
          <a href={linkInstagram} target='_blank' rel='noopener noreferrer' className={style.social__link}>
            <ImportedIcons.INSTAGRAM />
          </a>
          <a href={linkTwitter} target='_blank' rel='noopener noreferrer' className={style.social__link}>
            <ImportedIcons.TWITTER />
          </a>
          <a href={linkLinkedin} target='_blank' rel='noopener noreferrer' className={style.social__link}>
            <ImportedIcons.LINKEDIN />
          </a>
        </div>
        <p className={style.copyright}>
          <span>Costs</span> &copy; 2022
        </p>
      </Container>
    </footer>
  )
}

export default Footer