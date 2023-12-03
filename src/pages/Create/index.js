import './index.scss'
import '@/components/textInput/TextInput.scss'
import HomePageNavbar from '../../components/homePageNavbar/HomePageNavbar'
import { useState } from 'react'
import { TextareaAutosize } from '@mui/material'
import TextField from '@mui/material/TextField'

function CreatePage() {
  const [name, setName] = useState('')
  const [openingLine, setOpeningLine] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [basicInformation, setBasicInformation] = useState('')
  const [traits, setTraits] = useState('')

  const nameDescription = '角色姓名'
  const openingLineDescription = '一句话开场白'
  const introductionDescription = '角色的一句话介绍'
  const basicInformationDescription = '角色的较长介绍'
  const traitsDescription = '一句话描述语言风格'

  const createCharacter = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:8888/character/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Success:', result)

      setName('')
      setIntroduction('')
      setBasicInformation('')
      setTraits('')
      setOpeningLine('')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const createCharacterData = {
    userid: 1,
    name: name,
    image_url: 'IMAGE_URL_HERE', // 替换为实际的图片URL
    introduction: introduction,
    basicInformation: basicInformation,
    openingLine: openingLine,
    traits: traits,
    chatExample:
      '{{user}}:敢问阁下尊姓大名。\n{{char}}:吾姓关名羽，字长生，后改云长，河东解良人也。',
  }

  const handleUpdateClick = () => {
    if (!name) {
      alert('请完成name部分')
      return
    }
    if (!openingLine) {
      alert('请完成openingLine部分')
      return
    }
    if (!introduction) {
      alert('请完成Introduction部分')
      return
    }
    if (!traits) {
      alert('请完成traits部分')
      return
    }

    if (!basicInformation) {
      alert('请完成basicInformation部分')
      return
    }

    createCharacter(createCharacterData)
  }

  const inputStyle = {
    width: '95%',
    minWidth: '95%',
    maxWidth: '95%',
    height: '200px',
  }

  const inputNameStyle = {
    width: '95%',
    minWidth: '95%',
    maxWidth: '95%',
    height: '30px',
    minHeight: '30px',
    maxHeight: '30px',
  }

  return (
    <div>
      <HomePageNavbar />
      <div className="create-container">
        <div className="align-items-center">
          <div className="home-sec-header">
            <div className="p-0 pe-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                data-darkreader-inline-fill=""
                data-darkreader-inline-stroke=""
                style={{ color: 'lightgrey' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M14.27 6c-.55.95-.22 2.18.73 2.73.95.55 2.18.22 2.73-.73.55-.95.22-2.18-.73-2.73-.95-.55-2.18-.22-2.73.73z"></path>
                <path d="M15.84 10.41l-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89a5.002 5.002 0 01.31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08zM12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05a1.501 1.501 0 00-1.5 2.6z"></path>
              </svg>
            </div>
            Create a Character
          </div>
        </div>
        <div className="create-section">
          For more information about Character creation, see
          <a
            className="btn"
            href="https://book.character.ai"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              style={{ color: 'lightgray' }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path>
              <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path>
            </svg>
            <span>Character Book</span>
          </a>
        </div>

        <form className="create-section">
          <div className="input-section">
            <div className="col">
              <label htmlFor="name">
                <b>1.角色姓名</b>
              </label>
              <div className="text-muted" style={{ fontSize: 'small' }}>
                {nameDescription}
              </div>
              <TextareaAutosize
                className="input-control"
                style={inputNameStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="openingLine" style={{ paddingTop: '10px' }}>
                <b>2.开场白</b>
              </label>
              <div className="text-muted" style={{ fontSize: 'small' }}>
                {openingLineDescription}
              </div>
              <TextareaAutosize
                className="input-control"
                style={inputStyle}
                value={openingLine}
                onChange={(e) => setOpeningLine(e.target.value)}
              />

              <label htmlFor="introduction" style={{ paddingTop: '10px' }}>
                <b>3.简单介绍</b>
              </label>
              <div className="text-muted" style={{ fontSize: 'small' }}>
                {introductionDescription}
              </div>
              <TextareaAutosize
                className="input-control"
                style={inputStyle}
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />

              <label htmlFor="basicInformation" style={{ paddingTop: '10px' }}>
                <b>4.细节介绍</b>
              </label>
              <div className="text-muted" style={{ fontSize: 'small' }}>
                {basicInformationDescription}
              </div>
              <TextareaAutosize
                className="input-control"
                style={inputStyle}
                value={basicInformation}
                onChange={(e) => setBasicInformation(e.target.value)}
              />

              <label htmlFor="traits" style={{ paddingTop: '10px' }}>
                <b>4.语气描述</b>
              </label>
              <div className="text-muted" style={{ fontSize: 'small' }}>
                {traitsDescription}
              </div>
              <TextareaAutosize
                className="input-control"
                style={inputStyle}
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
              />
            </div>
          </div>
        </form>

        <div className="button-container">
          <button className="update-button" onClick={handleUpdateClick}>
            创建角色并且聊天吧！
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
