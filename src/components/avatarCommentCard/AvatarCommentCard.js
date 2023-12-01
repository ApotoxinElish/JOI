import React, { useState } from 'react'
// import './AvatarCommentCard.css'
import AvatarCard from '../avatarCard/AvatarCard'
// import { ButtonBase, MenuList, Popover, SvgIcon } from '@mui/material'

const AvatarCommentCard = (props) => {
  const author = '@Xomu'
  const msgNum = 100

  const characterDescription = props.characterData.introduction

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    console.log('click!\n')
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div className="character-slide-card-v3">
      <AvatarCard padding="6px" characterData={props.characterData} />

      <div className="character-description">{characterDescription}</div>

      <div className="container">
        <div className="username-truncated">
          <div className="username">@Xomu</div>
        </div>
        <div className="info-container">
          <div style={{ fontSize: '12px' }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: '2px', color: 'lightgrey' }}
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
              ></path>
            </svg>
            28.1m
          </div>

          {/* <ButtonBase
            tabIndex={0}
            type="button"
            aria-label="more"
            id="long-button"
            aria-haspopup="true"
            style={{ padding: '0px' }}
            onClick={handleClick}
          >
            <SvgIcon
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="MoreVertIcon"
              style={{ height: '20px', width: '20px' }}
            >
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </SvgIcon>
          </ButtonBase> */}

          {/* <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            The content of the Popover.
          </Popover> */}
        </div>
      </div>
    </div>
  )
}

export default AvatarCommentCard
