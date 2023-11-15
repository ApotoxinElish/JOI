import ChatBottom from '../components/chatbottom'
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
      <ChatBottom />
    </div>
  )
}

export default ChatPage
