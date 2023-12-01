import React from 'react'
// import { Avatar, AvatarGroup } from 'rsuite'

function AvatarCard(props) {
  const padding_style = {
    padding: props.padding || '12px', // 使用传递的 padding 属性，如果没有传递则默认为 12
  }

  console.log(props.characterData)

  const backgroundStyle = {
    backgroundImage:
      'url("https://characterai.io/i/400/static/avatars/uploaded/2022/10/8/bkpYZgXVaKmDvC1QRcVTK2tdQdUvfDkZShwrnm9PX6k.webp")',
  }

  return (
    <div className="character-card" style={padding_style}>
      <div className="avatar-container">
        <div className="avatar-wrapper">
          <div className="avatar-image" style={backgroundStyle}></div>
          <div className="avatar-name">{props.characterData.name}</div>
        </div>
      </div>
    </div>
  )
}
export default AvatarCard
