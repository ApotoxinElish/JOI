import './index.scss'
import { useState, useEffect } from 'react'
import Header from '@/components/header/Header'
import HomePageNavbar from '@/components/homePageNavbar/HomePageNavbar'
import ChatList from '@/components/chatList/chatList'
import ScrollableTab from '@/components/scrollableTab/ScrollableTab'

const Home = () => {
  const [data, setMyData] = useState(null)

  // useEffect(() => {
  //   // 在组件加载后发送网络请求并获取数据
  //   fetch('https://127.0.0.1:8888/character/showall')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 在这里处理获取的数据，例如将其存储在state中
  //       setMyData(data)
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error)
  //     })
  // }, []) // 传递一个空数组作为依赖项，确保 useEffect 仅在组件加载时运行一次

  // post method
  useEffect(() => {
    console.log('init!')
    // 在组件加载后发送POST请求并提交数据到后端
    fetch('http://127.0.0.1:8888/character/showall', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 如果需要授权，添加下面这一行，替换YOUR_TOKEN为实际的认证token
        // 'Authorization': 'Bearer YOUR_TOKEN',
      },
      body: JSON.stringify({
        // 你需要提交的数据对象
        key1: 'value1',
        key2: 'value2',
        // ...
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // 在这里处理从后端获取的数据，将其存储在state中
        setMyData(data)
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, []) // 传递一个空数组作为依赖项，确保 useEffect 仅在组件加载时运行一次

  if (!data) {
    // 数据还在加载中，可以在这里显示加载中的状态
    return <div>Loading...</div>
  }

  return (
    <div className="home">
      <Header />
      <div className="test">
        <HomePageNavbar />
        <div
          style={{ width: 'auto', paddingLeft: '110px', paddingRight: '0px' }}
        >
          <div className="discover-page">
            <div className="pt-3">
              <div className="content">
                <h3>Continue Chatting</h3>
                <ChatList componentType="A" chatData={data} />
                <h3>Recommended </h3>
                <ChatList componentType="B" chatData={data} />
                <ScrollableTab />
                <ChatList componentType="B" chatData={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
