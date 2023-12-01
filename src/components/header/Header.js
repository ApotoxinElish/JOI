import './header.scss'
import { useState } from 'react'
import { ButtonBase } from '@mui/material'

function Header() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const isLogin = true

  return (
    <header className="headerStyle">
      <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        <a href="/">
          <img
            className="logo"
            src="https://characterai.io/static/logo-variants/text-logo-dark.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="header-align-items-center" id="header-row">
        <div
          className={`shine-btn ${isHovered ? 'hovered' : ''}`}
          style={{ marginRight: '8px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            Get
            <span>
              c.ai
              <span className="premium-color" style={{ fontWeight: 'bold' }}>
                +
              </span>
            </span>
          </div>
        </div>

        <a className="header-btn search" role="button" href="/search">
          <svg
            className="svg-icon-search"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'lightgrey' }}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </a>
        <a
          className="header-btn"
          href="https://book.character.ai"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            className="svg-icon-book"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'lightgrey' }}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path>
            <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path>
          </svg>
        </a>

        <a className="header-btn" role="button" href="/help?">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'lightgrey' }}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
          </svg>
        </a>

        {isLogin ? (
          <a
            className="header-btn"
            role="button"
            href="/profile?"
            style={{ padding: '6px 16px' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'lightgrey' }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </a>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ padding: '5px' }}>
              <ButtonBase className="shine-btn">Log In</ButtonBase>
            </div>
            <div style={{ padding: '5px' }}>
              <ButtonBase className="shine-btn">Sign Up</ButtonBase>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
