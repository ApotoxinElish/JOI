import { useState } from 'react'

function DropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <div
      className={`col-auto px-2 dropdown${isDropDownOpen ? ' show' : ''}`}
      onClick={handleDropDown}
    >
      <span
        data-toggle="dropdown"
        aria-haspopup="listbox"
        className=""
        aria-expanded={isDropDownOpen}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            cursor: 'pointer',
            '--darkreader-inline-fill': 'currentColor',
            '--darkreader-inline-stroke': 'currentColor',
          }}
          data-darkreader-inline-fill=""
          data-darkreader-inline-stroke=""
        >
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </span>
      <div
        tabindex="-1"
        role="listbox"
        aria-hidden={!isDropDownOpen}
        className={`dropdown-menu${isDropDownOpen ? ' show' : ''}`}
        data-popper-placement="bottom-end"
        style={{
          position: 'absolute',
          inset: '0px 0px auto auto',
          transform: 'translate3d(-8px, 22.6667px, 0px)',
        }}
      >
        <button
          type="button"
          tabindex="0"
          role="option"
          className="dropdown-item"
          style={{
            display: 'flex',
            'align-items': 'center',
          }}
        >
          <div style={{ 'margin-right': '10px' }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              style={{
                '--darkreader-inline-fill': 'currentColor',
                '--darkreader-inline-stroke': 'currentColor',
              }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <circle cx="9" cy="9" r="4"></circle>
              <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path>
            </svg>
          </div>
          <div>启用角色语音</div>
        </button>
        <div tabindex="-1" className="dropdown-divider"></div>
        <button
          type="button"
          tabindex="0"
          role="option"
          className="dropdown-item"
          style={{
            display: 'flex',
            'align-items': 'center',
          }}
        >
          <div style={{ 'margin-right': '10px' }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              style={{
                '--darkreader-inline-fill': 'currentColor',
                '--darkreader-inline-stroke': 'currentColor',
              }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path>
            </svg>
          </div>
          <div>保存并开始新聊天</div>
        </button>
        <button
          type="button"
          tabindex="0"
          role="option"
          className="dropdown-item"
          style={{
            display: 'flex',
            'align-items': 'center',
          }}
        >
          <div style={{ 'margin-right': '10px' }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              style={{
                '--darkreader-inline-fill': 'currentColor',
                '--darkreader-inline-stroke': 'currentColor',
              }}
            >
              <g>
                <path fill="none" d="M0 0L24 0 24 24 0 24z"></path>
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.702 0-3.305-.425-4.708-1.175L2 22l1.176-5.29C2.426 15.306 2 13.703 2 12 2 6.477 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8 0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349c1.148.614 2.43.939 3.765.939 4.418 0 8-3.582 8-8s-3.582-8-8-8zm1 3v5h4v2h-6V7h2z"></path>
              </g>
            </svg>
          </div>
          <div>查看保存的聊天</div>
        </button>
        <button
          type="button"
          tabindex="0"
          role="option"
          className="dropdown-item"
          style={{
            display: 'flex',
            'align-items': 'center',
          }}
        >
          <div style={{ 'margin-right': '10px' }}>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-stroke=""
              style={{
                '--darkreader-inline-stroke': 'currentColor',
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </div>
          <div>删除消息</div>
        </button>
      </div>
    </div>
  )
}

export default DropDown
