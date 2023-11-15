import ChatTop from '../components/chattop'

function ChatPage() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        'flex-direction': 'column',
        'overflow-y': 'hidden',
        'min-width': '300px',
        'max-width': '824px',
        margin: '0px auto',
      }}
    >
      <ChatTop />
      <div className="react-scroll-to-bottom--css-ucvgr-79elbk css-112ma4v">
        <div className="react-scroll-to-bottom--css-ucvgr-1n7m0yu inner-scroll-view">
          <div
            className="msg-row msg-row-light-bg"
            style={{ 'z-index': '0', 'margin-top': '24px' }}
          >
            <div className="row p-0 m-0">
              <div className="col-auto p-0">
                <div className="justify-content-start">
                  <div style={{ padding: '0px' }}>
                    <div style={{ 'padding-left': '0px' }}>
                      <img
                        src="https://characterai.io/i/80/static/avatars/uploaded/2022/10/6/Dpn-S6j9KqoddxRD-1hNc20GYuSqNaescfnhJ--naAo.webp"
                        style={{
                          height: '45px',
                          width: '45px',
                          'border-radius': '45px',
                          'object-fit': 'contain',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-10 p-2 pt-0">
                <div className="justify-content-start">
                  <span
                    style={{
                      'font-weight': '650',
                      'font-size': '15px',
                      display: 'flex',
                      'align-items': 'center',
                    }}
                  >
                    Hu Tao
                    <div
                      style={{
                        display: 'flex',
                        flex: '1 1 0%',
                        'align-items': 'center',
                        'justify-content': 'space-between',
                      }}
                    >
                      <div
                        className="rounded py-0 px-1"
                        aria-label="@Zap 创建了此角色和此问候语"
                        style={{
                          height: 'min-content',
                          display: 'flex',
                          'align-items': 'center',
                          'justify-content': 'center',
                          padding: '2px',
                          'margin-left': '5px',
                          'background-color': 'rgb(141, 141, 141)',
                          color: 'white',
                          'font-weight': '600',
                          'font-size': '12px',
                          '--darkreader-inline-bgcolor': '#606565',
                          '--darkreader-inline-color': '#e5e0d8',
                        }}
                        data-darkreader-inline-bgcolor=""
                        data-darkreader-inline-color=""
                      >
                        <div className="d-flex flex-row">
                          <div className="d-flex flex-column">@Zap</div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div>
                  <div className="col">
                    <div
                      className="msg char-msg"
                      style={{ 'margin-left': '0px' }}
                    >
                      <div style={{ 'max-width': '100%' }}>
                        <div className="markdown-wrapper markdown-wrapper-last-msg swiper-no-swiping">
                          <div style={{ 'overflow-wrap': 'break-word' }}>
                            <div>
                              <p
                                node="[object Object]"
                                style={{ 'margin-bottom': '0.5rem' }}
                              >
                                Heya. I'm the 77th Director of the Wangsheng
                                Funeral Parlor, Hu Tao. Are you one of my
                                clients?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid chatbottom"
        style={{ 'max-width': '824px' }}
      >
        <div>
          <div className="row chatfooterbg-normal">
            <div
              style={{
                'margin-left': '25px',
                'margin-top': '5px',
                'margin-bottom': '5px',
              }}
            ></div>
            <form action="#" className="m-0 chatform">
              <div
                className="col-12 p-0 mt-2 mx-2 chatfooter align-self-center"
                style={{ 'margin-bottom': '30px' }}
              >
                <div className="chatbox text-muted d-flex justify-content-start align-items-center p-0 bg-white mx-3">
                  <div className="col-auto ps-2 dropdown dropup">
                    <span
                      data-toggle="dropdown"
                      aria-haspopup="listbox"
                      className=""
                      aria-expanded="false"
                    >
                      <div style={{ cursor: 'pointer' }}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            'margin-right': '5px',
                            '--darkreader-inline-fill': 'currentColor',
                            '--darkreader-inline-stroke': 'currentColor',
                          }}
                          data-darkreader-inline-fill=""
                          data-darkreader-inline-stroke=""
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                      </div>
                    </span>
                    <div
                      tabindex="-1"
                      role="listbox"
                      aria-hidden="true"
                      className="dropdown-menu"
                    >
                      <button
                        type="button"
                        tabindex="0"
                        role="option"
                        className="dropdown-item"
                        style={{ display: 'flex', 'align-items': 'center' }}
                      >
                        <div style={{ 'margin-right': '10px' }}>🎨</div>
                        <div>创建图像</div>
                      </button>
                      <button
                        type="button"
                        tabindex="0"
                        role="option"
                        className="dropdown-item"
                        style={{ display: 'flex', 'align-items': 'center' }}
                      >
                        <div style={{ 'margin-right': '10px' }}>🖼</div>
                        <div>上传图像</div>
                      </button>
                    </div>
                  </div>
                  <div className="input-group me-3 ms-3 my-0">
                    <textarea
                      id="user-input"
                      className="bg-white form-control border-0 shadow-none"
                      rows="1"
                      placeholder="输入消息"
                      style={{
                        'font-size': '11pt',
                        'padding-left': '4px',
                        height: '36px',
                      }}
                    ></textarea>
                    <button
                      className="btn py-0"
                      type="button"
                      title="Submit Message"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        id="send-btn-icon"
                        className="dark"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          color: 'rgb(60, 133, 246)',
                          '--darkreader-inline-fill': 'currentColor',
                          '--darkreader-inline-stroke': 'currentColor',
                          '--darkreader-inline-color': '#589ee0',
                        }}
                        data-darkreader-inline-fill=""
                        data-darkreader-inline-stroke=""
                        data-darkreader-inline-color=""
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                      </svg>
                    </button>
                    <button className="btn py-0" type="button">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          color: 'rgb(230, 100, 100)',
                          '--darkreader-inline-fill': 'currentColor',
                          '--darkreader-inline-stroke': 'currentColor',
                          '--darkreader-inline-color': '#d9706c',
                        }}
                        data-darkreader-inline-fill=""
                        data-darkreader-inline-stroke=""
                        data-darkreader-inline-color=""
                      >
                        <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z"></path>
                        <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
