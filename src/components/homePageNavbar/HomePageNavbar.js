import './homePageNavbar.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePageNavbar() {
  const [chosenIndex, setIndexColor] = useState(0)

  const handleMouseEnter = (index) => {
    setIndexColor(index)
  }

  const handleMouseLeave = (index) => {
    setIndexColor(index)
  }

  const navigate = useNavigate()

  const gotoHome = () => {
    // 在按钮点击时进行页面跳转
    navigate('/')
  }

  const gotoCreate = () => {
    navigate('/createPage')
  }

  return (
    <nav className="navbar">
      <div
        className="navbar-collapse"
        style={{ width: '80px' }}
        id="navbarSupportedContent"
      >
        <ul className="nav-list">
          <li className="nav-item">
            <a
              aria-current="page"
              className="active"
              style={{ textDecoration: 'none' }}
              href="/"
            >
              <div className="nav-icon-container">
                <span className="nav-icon" onClick={gotoHome}>
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
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>
                </span>
                <span className="nav-icon-text">Home</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="" style={{ textDecoration: 'none' }} href="">
              <div className="nav-icon-container">
                <span className="nav-icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'lightgrey' }}
                  >
                    <path
                      d="M12.552 8C11.9997 8 11.552 8.44772 11.552 9C11.552 9.55228 11.9997 10 12.552 10H16.552C17.1043 10 17.552 9.55228 17.552 9C17.552 8.44772 17.1043 8 16.552 8H12.552Z"
                      fill="currentColor"
                      fillOpacity="0.5"
                      style={{ color: 'lightgrey' }}
                    ></path>
                    <path
                      d="M12.552 17C11.9997 17 11.552 17.4477 11.552 18C11.552 18.5523 11.9997 19 12.552 19H16.552C17.1043 19 17.552 18.5523 17.552 18C17.552 17.4477 17.1043 17 16.552 17H12.552Z"
                      fill="currentColor"
                      fillOpacity="0.5"
                      style={{ color: 'lightgrey' }}
                    ></path>
                    <path
                      d="M12.552 5C11.9997 5 11.552 5.44772 11.552 6C11.552 6.55228 11.9997 7 12.552 7H20.552C21.1043 7 21.552 6.55228 21.552 6C21.552 5.44772 21.1043 5 20.552 5H12.552Z"
                      fill="currentColor"
                      fillOpacity="0.8"
                      style={{ color: 'lightgrey' }}
                    ></path>
                    <path
                      d="M12.552 14C11.9997 14 11.552 14.4477 11.552 15C11.552 15.5523 11.9997 16 12.552 16H20.552C21.1043 16 21.552 15.5523 21.552 15C21.552 14.4477 21.1043 14 20.552 14H12.552Z"
                      fill="currentColor"
                      fillOpacity="0.8"
                      style={{ color: 'lightgrey' }}
                    ></path>
                    <path
                      d="M3.448 4.00208C2.89571 4.00208 2.448 4.44979 2.448 5.00208V10.0021C2.448 10.5544 2.89571 11.0021 3.448 11.0021H8.448C9.00028 11.0021 9.448 10.5544 9.448 10.0021V5.00208C9.448 4.44979 9.00028 4.00208 8.448 4.00208H3.448Z"
                      fill="currentColor"
                      style={{ color: 'lightgrey' }}
                    ></path>
                    <path
                      d="M3.448 12.9979C2.89571 12.9979 2.448 13.4456 2.448 13.9979V18.9979C2.448 19.5502 2.89571 19.9979 3.448 19.9979H8.448C9.00028 19.9979 9.448 19.5502 9.448 18.9979V13.9979C9.448 13.4456 9.00028 12.9979 8.448 12.9979H3.448Z"
                      fill="currentColor"
                      style={{ color: 'lightgrey' }}
                    ></path>
                  </svg>
                </span>
                <span className="nav-icon-text">Feed</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="" style={{ textDecoration: 'none' }} href="">
              <div className="nav-icon-container">
                <span className="nav-icon" onClick={gotoCreate}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'lightgrey' }}
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                  </svg>
                </span>
                <span id="create-nav-button" className="nav-icon-text">
                  Create
                </span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="" style={{ textDecoration: 'none' }} href="/chats">
              <div className="nav-icon-container">
                <span className="nav-icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'lightgrey' }}
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
                  </svg>
                </span>
                <span className="nav-icon-text">Chats</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <div>
              <a
                className=""
                style={{ textDecoration: 'none' }}
                href="/community"
              >
                <div className="nav-icon-container">
                  <span className="nav-icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: 'lightgrey' }}
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
                    </svg>
                  </span>
                  <span className="nav-icon-text">Community</span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HomePageNavbar
