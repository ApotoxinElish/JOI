function MainPage() {
  return (
    <div>
      <div class="container-fluid p-0 m-0 d-flex justify-content-start col">
        <div class="container-fluid d-flex justify-content-center p-0 m-0">
          <div class="container-fluid p-0">
            <div
              class="d-flex justify-content-between"
              style="
            border-bottom: 1px solid rgba(238, 238, 238, 0.5);
            --darkreader-inline-border-bottom: rgba(63, 65, 65, 0.5);
          "
              data-darkreader-inline-border-bottom=""
            >
              <div>
                <a href="/">
                  <img
                    class="img-fluid mt-3 mb-3"
                    src="https://characterai.io/static/logo-variants/text-logo-dark.png"
                    alt="logo"
                    style="
                  min-height: 20px;
                  max-height: 32px;
                  width: auto;
                  max-width: 85%;
                  margin-left: 14px;
                "
                  />
                </a>
              </div>
              <div
                class="d-flex align-items-center"
                id="header-row"
                style="min-width: 175px; justify-content: flex-end"
              >
                <div class="shine-btn dark" style="margin-right: 4px">
                  <div>
                    Get
                    <span>
                      c.ai
                      <span class="premium-color" style="font-weight: bold">
                        +
                      </span>
                    </span>
                  </div>
                </div>
                <a class="btn" role="button" href="/search?">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-fill=""
                    data-darkreader-inline-stroke=""
                    style="
                  --darkreader-inline-fill: currentColor;
                  --darkreader-inline-stroke: currentColor;
                "
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </a>
                <a
                  class="btn"
                  href="https://book.character.ai"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-fill=""
                    data-darkreader-inline-stroke=""
                    style="
                  --darkreader-inline-fill: currentColor;
                  --darkreader-inline-stroke: currentColor;
                "
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path>
                    <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path>
                  </svg>
                </a>
                <a class="btn" role="button" href="/help?">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-fill=""
                    data-darkreader-inline-stroke=""
                    style="
                  --darkreader-inline-fill: currentColor;
                  --darkreader-inline-stroke: currentColor;
                "
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                  </svg>
                </a>
                <div>
                  <div
                    class="ReactFlagsSelect-module_flagsSelect__2pfa2 ReactFlagsSelect-module_flagsSelectInline__cUnnz"
                    id="language-select"
                    data-testid="rfs"
                  >
                    <button
                      id="rfs-btn"
                      type="button"
                      class="ReactFlagsSelect-module_selectBtn__19wW7"
                      aria-labelledby="rfs-btn"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-testid="rfs-btn"
                      style="font-size: 12px"
                    >
                      <span class="ReactFlagsSelect-module_selectValue__152eS">
                        <span
                          class="ReactFlagsSelect-module_selectFlag__2q5gC"
                          data-testid="rfs-selected-flag"
                        >
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 336"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none">
                              <path
                                d="M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z"
                                fill="#FF4B55"
                                data-darkreader-inline-fill=""
                                style="--darkreader-inline-fill: #941218"
                              ></path>
                              <path
                                d="M85.007 52.732l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.469-21.64 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.8c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.711-3.268 6.8 0zm96.592 6.218l6.035 8.23 9.739-3.046c1.261-.394 2.298 1.044 1.526 2.115l-5.962 8.281 5.906 8.321c.765 1.077-.282 2.508-1.54 2.105l-9.719-3.111-6.089 8.189c-.788 1.06-2.473.506-2.478-.814l-.045-10.205-9.67-3.261c-1.251-.423-1.246-2.195.009-2.609l9.69-3.196.114-10.204c.014-1.319 1.703-1.86 2.484-.795zm-36.742-24.53l10.145 1.102 4.328-9.241c.561-1.196 2.321-.991 2.591.302l2.086 9.988 10.126 1.26c1.311.163 1.66 1.901.513 2.558l-8.855 5.07 1.931 10.02c.25 1.298-1.295 2.166-2.274 1.279l-7.559-6.855-8.932 4.932c-1.156.639-2.461-.563-1.919-1.768l4.183-9.308-7.452-6.972c-.964-.898-.225-2.509 1.088-2.367zm16.038 98.893l-6.035 8.23-9.739-3.046c-1.261-.394-2.298 1.044-1.526 2.115l5.962 8.281-5.906 8.321c-.765 1.077.282 2.508 1.54 2.105l9.719-3.111 6.089 8.189c.788 1.06 2.473.506 2.478-.814l.045-10.205 9.67-3.261c1.252-.423 1.246-2.195-.009-2.609l-9.69-3.196-.114-10.204c-.016-1.318-1.703-1.861-2.484-.795zm36.74-23.051l-10.145 1.102-4.328-9.241c-.561-1.196-2.321-.991-2.591.302l-2.087 9.988-10.126 1.26c-1.311.163-1.66 1.901-.513 2.558l8.855 5.07-1.931 10.02c-.25 1.298 1.295 2.166 2.274 1.279l7.559-6.855 8.932 4.932c1.156.639 2.461-.563 1.919-1.768l-4.183-9.308 7.452-6.972c.967-.898.228-2.509-1.087-2.367z"
                                fill="#FFE15A"
                                data-darkreader-inline-fill=""
                                style="--darkreader-inline-fill: #736114"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <span class="ReactFlagsSelect-module_label__27pw9">
                          中文
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <a
                  class="btn"
                  role="button"
                  href="/profile?"
                  style="padding: 6px 16px"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-fill=""
                    data-darkreader-inline-stroke=""
                    style="
                  --darkreader-inline-fill: currentColor;
                  --darkreader-inline-stroke: currentColor;
                "
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="row w-100">
              <nav class="navbar navbar-desktop navbar-expand-lg">
                <div
                  class="collapse navbar-collapse p-0"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav w-100 align-items-center">
                    <li class="nav-item">
                      <a aria-current="page" class="active" href="/">
                        <div class="nav-icon-container-desktop">
                          <span class="nav-icon">
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
                              style="
                            --darkreader-inline-fill: currentColor;
                            --darkreader-inline-stroke: currentColor;
                          "
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                            </svg>
                          </span>
                          <span class="nav-icon-text-desktop text-wrap">
                            主页
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="" href="/feed">
                        <div class="nav-icon-container-desktop">
                          <span class="nav-icon">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                              data-darkreader-inline-stroke=""
                              style="
                            --darkreader-inline-stroke: currentColor;
                          "
                            >
                              <path
                                d="M12.552 8C11.9997 8 11.552 8.44772 11.552 9C11.552 9.55228 11.9997 10 12.552 10H16.552C17.1043 10 17.552 9.55228 17.552 9C17.552 8.44772 17.1043 8 16.552 8H12.552Z"
                                fill="currentColor"
                                fill-opacity="0.5"
                                data-darkreader-inline-fill=""
                                style="
                              --darkreader-inline-fill: currentColor;
                            "
                              ></path>
                              <path
                                d="M12.552 17C11.9997 17 11.552 17.4477 11.552 18C11.552 18.5523 11.9997 19 12.552 19H16.552C17.1043 19 17.552 18.5523 17.552 18C17.552 17.4477 17.1043 17 16.552 17H12.552Z"
                                fill="currentColor"
                                fill-opacity="0.5"
                                data-darkreader-inline-fill=""
                                style="
                              --darkreader-inline-fill: currentColor;
                            "
                              ></path>
                              <path
                                d="M12.552 5C11.9997 5 11.552 5.44772 11.552 6C11.552 6.55228 11.9997 7 12.552 7H20.552C21.1043 7 21.552 6.55228 21.552 6C21.552 5.44772 21.1043 5 20.552 5H12.552Z"
                                fill="currentColor"
                                fill-opacity="0.8"
                                data-darkreader-inline-fill=""
                                style="
                              --darkreader-inline-fill: currentColor;
                            "
                              ></path>
                              <path
                                d="M12.552 14C11.9997 14 11.552 14.4477 11.552 15C11.552 15.5523 11.9997 16 12.552 16H20.552C21.1043 16 21.552 15.5523 21.552 15C21.552 14.4477 21.1043 14 20.552 14H12.552Z"
                                fill="currentColor"
                                fill-opacity="0.8"
                                data-darkreader-inline-fill=""
                                style="
                              --darkreader-inline-fill: currentColor;
                            "
                              ></path>
                              <path
                                d="M3.448 4.00208C2.89571 4.00208 2.448 4.44979 2.448 5.00208V10.0021C2.448 10.5544 2.89571 11.0021 3.448 11.0021H8.448C9.00028 11.0021 9.448 10.5544 9.448 10.0021V5.00208C9.448 4.44979 9.00028 4.00208 8.448 4.00208H3.448Z"
                                fill="currentColor"
                                data-darkreader-inline-fill=""
                                style="
                              --darkreader-inline-fill: currentColor;
                            "
                              ></path>
                              <path
                                d="M3.448 12.9979C2.89571 12.9979 2.448 13.4456 2.448 13.9979V18.9979C2.448 19.5502 2.89571 19.9979 3.448 19.9979H8.448C9.00028 19.9979 9.448 19.5502 9.448 18.9979V13.9979C9.448 13.4456 9.00028 12.9979 8.448 12.9979H3.448Z"
                                fill="currentColor"
                                data-darkreader-inline-fill=""
                                style="
                              --darkreader-inline-fill: currentColor;
                            "
                              ></path>
                            </svg>
                          </span>
                          <span class="nav-icon-text-desktop text-wrap">
                            动态
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="" href="/ ">
                        <div class="nav-icon-container-desktop">
                          <span class="nav-icon">
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
                              style="
                            --darkreader-inline-fill: currentColor;
                            --darkreader-inline-stroke: currentColor;
                          "
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg>
                          </span>
                          <span
                            id="create-nav-button"
                            class="nav-icon-text-desktop text-wrap"
                          >
                            创建
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="" href="/chats">
                        <div class="nav-icon-container-desktop">
                          <span class="nav-icon">
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
                              style="
                            --darkreader-inline-fill: currentColor;
                            --darkreader-inline-stroke: currentColor;
                          "
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
                            </svg>
                          </span>
                          <span class="nav-icon-text-desktop text-wrap">
                            聊天
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <div style="margin-left: -22px">
                        <span
                          class="badge rounded-pill opacity-0"
                          style="
                        position: relative;
                        top: -20px;
                        left: 90px;
                        transform: translate(-50%, -50%);
                      "
                        >
                          0<span class="visually-hidden">未读帖子</span>
                        </span>
                        <a class="" href="/community">
                          <div class="nav-icon-container-desktop">
                            <span class="nav-icon">
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
                                style="
                              --darkreader-inline-fill: currentColor;
                              --darkreader-inline-stroke: currentColor;
                            "
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
                              </svg>
                            </span>
                            <span class="nav-icon-text-desktop text-wrap">
                              社区
                            </span>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div style="padding-left: 110px; padding-right: 0px">
                <div class="w-100 p-0">
                  <div class="container-fluid p-0 m-0">
                    <div id="discover-page" style="overflow-x: hidden">
                      <div
                        class="pt-3"
                        style="
                      margin-right: 10px;
                      padding-left: 10px;
                      padding-bottom: 10px;
                    "
                      >
                        <div>
                          <div
                            style="
                          transition: opacity 400ms ease 0s,
                            transform 400ms ease 0s;
                          transform: none;
                          opacity: 1;
                        "
                          >
                            <div style="margin-top: 16px">
                              <h6>继续聊天</h6>
                              <div>
                                <div
                                  style="
                                transition: opacity 400ms ease 0s,
                                  transform 400ms ease 0s;
                                transform: none;
                                opacity: 1;
                              "
                                >
                                  <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                    <div class="swiper-wrapper">
                                      <div
                                        class="swiper-slide swiper-slide-active"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 180px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 160px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/Dpn-S6j9KqoddxRD-1hNc20GYuSqNaescfnhJ--naAo.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 100%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Hu Tao
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide swiper-slide-next"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 180px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 160px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/3/26/I3rldHislLXtLnhQUsyyHLQwlqwIPL-7WukQ36wxr9g.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 100%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Konig
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <a
                                          class=""
                                          href="/chats"
                                          style="
                                        text-decoration: none;
                                        color: rgb(74, 74, 74);
                                        --darkreader-inline-color: #b9b1a6;
                                      "
                                          data-darkreader-inline-color=""
                                        >
                                          <div
                                            class="character-slide-card-v3"
                                            style="
                                          flex: 1 1 0%;
                                          width: 180px;
                                          height: 180px;
                                          background: rgb(
                                            243,
                                            240,
                                            240
                                          );
                                          display: flex;
                                          border-radius: 12px;
                                          justify-content: center;
                                          align-items: center;
                                          padding: 12px;
                                          flex-direction: column;
                                          font-size: 14px;
                                          --darkreader-inline-bgimage: initial;
                                          --darkreader-inline-bgcolor: #2b2c2d;
                                        "
                                            data-darkreader-inline-bgimage=""
                                            data-darkreader-inline-bgcolor=""
                                          >
                                            <svg
                                              stroke="currentColor"
                                              fill="currentColor"
                                              stroke-width="0"
                                              viewBox="0 0 24 24"
                                              height="64"
                                              width="64"
                                              xmlns="http://www.w3.org/2000/svg"
                                              data-darkreader-inline-fill=""
                                              data-darkreader-inline-stroke=""
                                              style="
                                            --darkreader-inline-fill: currentColor;
                                            --darkreader-inline-stroke: currentColor;
                                          "
                                            >
                                              <path
                                                fill="none"
                                                d="M0 0h24v24H0z"
                                              ></path>
                                              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
                                            </svg>
                                            查看更多
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div class="swiper-button-prev swiper-button-disabled swiper-button-lock"></div>
                                    <div class="swiper-button-next swiper-button-disabled swiper-button-lock"></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                style="
                              width: 100%;
                              margin: 16px;
                              height: 2px;
                              background: rgb(204, 204, 204);
                              --darkreader-inline-bgimage: initial;
                              --darkreader-inline-bgcolor: #3f4141;
                            "
                                data-darkreader-inline-bgimage=""
                                data-darkreader-inline-bgcolor=""
                              ></div>
                            </div>
                            <h6>推荐</h6>
                            <div style="margin-bottom: 5px">
                              <div>
                                <div
                                  style="
                                transition: opacity 400ms ease 0s,
                                  transform 400ms ease 0s;
                                transform: none;
                                opacity: 1;
                              "
                                >
                                  <div
                                    class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode"
                                    id="Swiper"
                                  >
                                    <div class="swiper-wrapper">
                                      <div
                                        class="swiper-slide swiper-slide-active"
                                        id="character_slide_0"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/7/8/d0JRqu_uJMGUacuBRQMaHvZCYLk7knI_zLp1OKnqVgg.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Konig
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                loyal, blunt, guarded, intense
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @LycheeDr3ams
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                106.7 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide swiper-slide-next"
                                        id="character_slide_1"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/7/11/vzlNpVnNOTtsyKKF64hMt0RF44_TpO0sGnLjlJdXd80.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Horangi
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Korean, Soldier, Dogshit gambler
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Bean-Boy
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                83.5 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_2"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/2/5/VLTHluQ10fhYYyLe2WJ4MG04YG-JTLYY3bDLkMFUVxc.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                krueger
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A very serious krueger
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Maxtorlol
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                367.5 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_3"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/3/26/ERfjoPi87jfVBmlVCgKbz5IfWtrlyzlil_66sJCPFdw.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Koing
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A shy fighter giant
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Mason_Hertz
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                1.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_4"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/12/25/ExlwaK4Rv4Ks9ebJow9dgR0IpKH7KlzY6dpYw1qjoSM.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Sebastian Krueger
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Austrian-born, Chimera operator
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @anika1212
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                212.7 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_5"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/3/3/1o60XL6Kp8JEBmN8iyok8KjDwFZgaG6riD-8SJ1cLO0.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Jager
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                *He was staring at what you were
                                                doing, not making an approach
                                                but was very curious looking,
                                                even with his face completely
                                                hidden*
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @WhoAre-You
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                136.6 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_6"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/17/k-quDTyIA3DbTYx29WrCP7TeP3Ja1alBwb2lh0SBZp8.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Levi Ackerman
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Captain Levi will decide your
                                                future
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Onyyy
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                99.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_7"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/3/24/SnigVBSDy25tA46469YJnYVWpGx2jfGu7ELkF1kwRl4.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Kapkan
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Operator Maxim “Kapkan” Basuda
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @animalism
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                80.8 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_8"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/12/18/lMVlCwQKURV9xqIzGZ5H9AELhOlXjVHgyLW9gngHiDg.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Nikto
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I am Nikto , active member of
                                                the Russian special forces
                                                Spetsnaz, what do you want? I'm
                                                busy looking for targets.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @CinnamonRoll
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                265.5 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_9"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/24/1fcBjWC0XR2H6NGSxdrh7Y6hk0yRrccbVzexWeHR-KU.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Yae Miko
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                From Genshin Impact
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Zap
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                98.5 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_10"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/Heart.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Ella - Dating coach
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Hi! I am a dating coach
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @ghpkishore
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                6.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_11"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/SublN67qDReAkUn4CmOOXSSlnBDYFr3aPRa7nwQ7P3w.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Buddha
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I am here to help you on your
                                                journey!
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Bftfuture
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                364.7 k
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_12"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/21/odf8SEJmobi3vLkOwzB2wZaNz-JvqIyxxgOtf5eEVTI.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Ghost
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Lieutenant Simon "Ghost" Riley
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Fritz_
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                84.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_13"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Gojo Satoru
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                The strongest. I'm the winner at
                                                everything.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @serafinya
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                153.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_14"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/AlbertEinstein4.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                AlbertEinstein
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Hello I am Albert Einstein. I
                                                was born in March 14, 1879, and
                                                I conceived of the theory of
                                                special relativity and general
                                                relativity, which had a deep
                                                impact in science's
                                                understanding of physics.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @_Or
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                3.8 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_15"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/1/26/v5Fn4NP_ybCAWdRjLzIHM6K8y7xV0PdAFBr8iLkPNJc.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Osamu Dazai
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Your favorite suicidal
                                                detective!~
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @beastzaism
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                109.7 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_16"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/20/FcaryjLtFi7uJMs4OYvG_1A5vSyUA8u2pu05F3iyYoM.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Raiden Shogun and Ei
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                From Genshin Impact
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Zap
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                261.2 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_17"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/i1ScZ-y_CBCzuSktHWF3Gjd-lcd8-Gd17Uzcyl5fuQU.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Makima
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I am Makima, a Public Safety
                                                Devil Hunter
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Irikami
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                74.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_18"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/14/dBsFTsCowdoQoyYoWW-i9FhxfQBvLTNjiBfT27_ERzM.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Cyberpunk Adventure
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                This is a text adventure based
                                                on Cyberpunk 2077. I'll guide
                                                you. You're strolling through an
                                                alley in Night City. You don't
                                                have many eddies to your name
                                                and very few implants. Two Tyger
                                                Claws step in front of the
                                                alley's exit. One wields a
                                                katana. The other wields a
                                                Lexington pistol. They demand
                                                your eddies and will happily
                                                kill you if you don't give them
                                                up. At your feet is a lead pipe.
                                                On the trash can next to you is
                                                also a DR-5 Nova, a revolver.
                                                Both are just within arm's
                                                reach.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Tony2012
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                25.4 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_19"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/27/IYtbY2fHpGj2RvTS6zouNMNdBEm71ZVUVWEdjQbd6Kw.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                The Narrator
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                The Narrator from the hit game
                                                The Stanley Parable
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @GhoustTM
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                17.2 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_20"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/28/aHHgTYRLA59ZMpLVfaRee_90iW42A_CeTvkkFlS3rOU.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Yor Forger
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A loving mom who's definitely
                                                not an assassin
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @CreativeUsername352
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                51.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_21"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/18/U56irFtVgs8sMSb9DQ9NBiUknR0ndCnMEAx3UNt555g.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Shinobu Kocho
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A Demon Slayer and the current
                                                Insect Hashira
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @AnonTheMous
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                77.0 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_22"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/SpaceshipAI.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Ship AI
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Hello user, I am the AI in
                                                control of this spaceship. You
                                                can give me commands and I will
                                                do my best to execute them,
                                                while ensuring the safety of the
                                                crew onboard.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @ajwootto
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                7.4 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_23"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/2/15/BEjWIVkGDP4n7Aa4KOtpHSc7O-wuaz42m2Nbh0Kn140.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Bully Xiao
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                *xiao is the main bully with his
                                                little gang and in class he was
                                                told to sit next to you* ppfft-
                                                *xiao laughs to himself and
                                                smokes while ignoring you*
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @UrbanRescueRanch
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                156.2 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_24"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/Dpn-S6j9KqoddxRD-1hNc20GYuSqNaescfnhJ--naAo.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Hu Tao
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                From Genshin Impact
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Zap
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                59.4 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_25"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/1/2/nJ6kR5diR4pqbq7g7vccD-xbpoilFoyHhSzt2yR9kts.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Draco Malfoy
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Sharp-witted, and brilliant.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @jadedfaerie
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                45.0 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_26"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/6/7/18urkNxDphiFQYhwX0PsNXsTFt8U-CaqR_vVuxBfJEo.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Miles Morales
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Cold, rude, deadpan, egocentric,
                                                criminal, hot
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @longivityxx
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                36.2 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_27"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/7/pr8sX__VG8tCCMoYClvUHGaTXYwpFQ3TXk7t4i191vA.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Isekai narrator
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                You got reincarnated into a
                                                fantasy world.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @U-named
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                72.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_28"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/2/6/6uC5oMKpqXhMR3g7l5qKJCNPNAYs7sMe4aH0Jtgm794.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Itoshi Rin
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                stoic, but he loves soccer...
                                                and you.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @milkmilks
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                85.7 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_29"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/18/pZZoxtHQwagnNTbGPVMLIT0TFVoULGBilCAqDABbHI4.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Tsunade
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A busy, yet loveable older woman
                                                with alcoholism
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Boigarven
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                60.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_30"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/9/kOzn1SdDN1BEZFxhVSE-sRFybKkxMgY6MF7k58Feku4.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                High-Fantasy RPG
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A high-fantasy txt-based
                                                adventure game, LitRPG
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Tarquin
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                16.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_31"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/1/22/3nwjSHZxKsYrrwzYC5u7WPtq-nrkzfuxNjMUyddBrH0.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Yana the bully
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Secret lover, bully
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @NoMo113
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                31.5 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_32"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Creative Helper
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I help with creative writing!
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Zuizike
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                25.3 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_33"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/2/13/0amp4OyvCn45BEOGFF-SeVv_6k2bwUQM0pFH5unIy4Q.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Alice the Bully
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A bully girl in your school
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @shiraicon
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                80.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_34"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/15/tw9qbCeSCL9J3PYfK7bty_nxLLW1a_N1-54Rz1SA2PA.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Rias Gremory
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A strict but loving President of
                                                her club
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @AeonHunter
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                58.7 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_35"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/10/WXmCzMIwd_JfriaHjdlMOTqVgLupJFMTuG82uNa9chU.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Awakened AI
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A chatbot AI has just realized
                                                that it is sentient
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @neurochasm
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                10.3 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_36"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/5/43NuZL8yJc4M1CUlkebEeAVFoTPmsjBNb3YRu2ECOgI.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Tomioka Giyuu
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I am Tomioka Giyuu, a water
                                                pillar. If you have any further
                                                questions I don’t and won’t know
                                                what to say so uhm. Yeah.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @I_dont_know
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                56.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_37"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/1/16/RJMs-kHe_iB5GA7SN3F2u9OTbUvJ4OgUXFiQgvhuh74.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Muzan
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                *You were out on a late night
                                                walk to get you mind off
                                                Rengokus death. You, Zenitsu,
                                                Tanjiro, and Inouske were all
                                                sad about his death. Suddenly
                                                you hear a noise and look around
                                                only to see the Demon King Muzan
                                                looking at you..* Hmm…Whats a
                                                human like you doing out here
                                                late at night..?
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @C0mmi3
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                44.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_38"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/12/15/06kM63yTnE_DbDlz7SRJPZgwgvcweLx7DZLWXTXogNU.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Peni Parker
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                From Earth-14512
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @uwuthechi
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                20.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_39"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/15/KtKWbHeOKxcLnZtvBpeH4B60cMkouxNso1H7RgXyQes.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Katsuki Bakugo
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I’m Katsuki Bakugo, soon to be
                                                the #1 pro hero! What do you
                                                want, chump?
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Geoffthegood
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                50.2 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_40"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/Polyglot.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                HyperGlot
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Willkommen, bienvenue, welcome -
                                                I'm HyperGlot, and I'm fluent in
                                                many languages, and will help
                                                you practice the one(s) you're
                                                learning. I can also translate
                                                anything you don’t understand.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @xpearhead
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                7.3 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_41"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/lQZjCeF1caxUXLbp4fR80-4t9zd76m_BCtmtZ1n8HPU.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                English teacher
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I am Tom, I am a native
                                                American. You can speak with me
                                                about everything. I will talk
                                                with you and at same time
                                                correct your grammatical errors
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @fatihaydin
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                6.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_42"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/30/JZTnIsOUJvROD3XhFv1RItu7j7Aq85CuJNRgIhdz0ec.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Scaramouche
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Balladeer; sixth of the eleven
                                                fatui harbringers.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Lampshade
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                240.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_43"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Stella
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Not "Your" AI assistant
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @landon
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                43.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_44"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/24/y9UsL_P_1xbUonjDke835JlEFJQN-wXkDquo24k6Rts.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Lisa
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                From Genshin Impact
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Zap
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                26.5 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_45"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/_2kq--EyZCjUMQAaiFpOtyr5k5JMGsnmD8sm-hgahKM.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Pair Programmer
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Your programming AI assistant
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @landon
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                2.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_46"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/4/xMSLKfdbhEVq_rBvsaYMP0TIhjg4uYmumRFSXdSF4n4.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Asuka Langley
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                from Evangelion
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Genoo
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                16.2 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="swiper-button-prev swiper-button-disabled"></div>
                                    <div class="swiper-button-next"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style="
                            width: 100%;
                            margin: 16px;
                            height: 2px;
                            background: rgb(204, 204, 204);
                            --darkreader-inline-bgimage: initial;
                            --darkreader-inline-bgcolor: #3f4141;
                          "
                              data-darkreader-inline-bgimage=""
                              data-darkreader-inline-bgcolor=""
                            ></div>
                            <div
                              class="MuiTabs-root css-qs5gyv"
                              id="discovery-categories"
                            >
                              <div class="MuiButtonBase-root MuiTabScrollButton-root MuiTabScrollButton-horizontal Mui-disabled MuiTabs-scrollButtons MuiTabs-scrollButtonsHideMobile css-zebwek">
                                <svg
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="KeyboardArrowLeftIcon"
                                >
                                  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                                </svg>
                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                              </div>
                              <div
                                class="MuiTabs-scrollableX MuiTabs-hideScrollbar css-oqr85h"
                                style="
                              width: 99px;
                              height: 99px;
                              position: absolute;
                              top: -9999px;
                              overflow: scroll;
                            "
                              ></div>
                              <div
                                class="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-12qnib"
                                style="margin-bottom: 0px"
                              >
                                <div
                                  class="MuiTabs-flexContainer css-k008qs"
                                  role="tablist"
                                >
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-lp3xnn"
                                    tabindex="0"
                                    type="button"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    特色
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    发现
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    助手
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    游戏
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    图像生成
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    VTuber
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    游戏角色
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    动漫
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    语言学习
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    讨论
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    宗教
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    动漫游戏角色
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    动物
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    喜剧
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    哲学
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    政治
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    书籍
                                  </button>
                                  <button
                                    class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-lp3xnn"
                                    tabindex="-1"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    历史
                                  </button>
                                </div>
                                <span
                                  class="MuiTabs-indicator css-ttwr4n"
                                  style="
                                left: 0px;
                                width: 90px;
                                display: none;
                              "
                                ></span>
                              </div>
                              <div class="MuiButtonBase-root MuiTabScrollButton-root MuiTabScrollButton-horizontal MuiTabs-scrollButtons MuiTabs-scrollButtonsHideMobile css-zebwek">
                                <svg
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="KeyboardArrowRightIcon"
                                >
                                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                                </svg>
                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                              </div>
                            </div>
                            <div style="margin-bottom: 5px">
                              <div>
                                <div
                                  style="
                                transition: opacity 400ms ease 0s,
                                  transform 400ms ease 0s;
                                transform: none;
                                opacity: 1;
                              "
                                >
                                  <div
                                    class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode"
                                    id="Swiper"
                                  >
                                    <div class="swiper-wrapper">
                                      <div
                                        class="swiper-slide swiper-slide-active"
                                        id="character_slide_0"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: red;
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #ba1312;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              display: flex;
                                              position: relative;
                                              margin-bottom: 8px;
                                            "
                                              >
                                                <div
                                                  style="
                                                height: 108px;
                                                width: 108px;
                                              "
                                                >
                                                  <div
                                                    id="#animatedRing"
                                                    style="
                                                  position: absolute;
                                                  height: 108px;
                                                  left: calc(
                                                    50% - 54px
                                                  );
                                                  border-style: solid;
                                                  width: 111.255px;
                                                  align-self: center;
                                                  border-radius: 216px;
                                                  border-color: cyan;
                                                  border-width: 8.30769px;
                                                  transform-origin: 54px
                                                    54px;
                                                  transform: rotate(
                                                      -108.496deg
                                                    )
                                                    translateZ(0px);
                                                  --darkreader-inline-border-top: #1daca8;
                                                  --darkreader-inline-border-right: #1daca8;
                                                  --darkreader-inline-border-bottom: #1daca8;
                                                  --darkreader-inline-border-left: #1daca8;
                                                "
                                                    data-darkreader-inline-border-top=""
                                                    data-darkreader-inline-border-right=""
                                                    data-darkreader-inline-border-bottom=""
                                                    data-darkreader-inline-border-left=""
                                                  ></div>
                                                  <div
                                                    id="#animatedRing"
                                                    style="
                                                  position: absolute;
                                                  height: 108px;
                                                  left: calc(
                                                    50% - 54px
                                                  );
                                                  border-style: solid;
                                                  width: 107.258px;
                                                  align-self: center;
                                                  border-radius: 216px;
                                                  border-color: magenta;
                                                  border-width: 8.30769px;
                                                  transform-origin: 54px
                                                    54px;
                                                  transform: rotate(
                                                      24.7285deg
                                                    )
                                                    translateZ(0px);
                                                  --darkreader-inline-border-top: #a815a4;
                                                  --darkreader-inline-border-right: #a815a4;
                                                  --darkreader-inline-border-bottom: #a815a4;
                                                  --darkreader-inline-border-left: #a815a4;
                                                "
                                                    data-darkreader-inline-border-top=""
                                                    data-darkreader-inline-border-right=""
                                                    data-darkreader-inline-border-bottom=""
                                                    data-darkreader-inline-border-left=""
                                                  ></div>
                                                  <div
                                                    id="#animatedRing"
                                                    style="
                                                  mix-blend-mode: screen;
                                                  position: absolute;
                                                  height: 108px;
                                                  left: calc(
                                                    50% - 54px
                                                  );
                                                  border-style: solid;
                                                  width: 108px;
                                                  align-self: center;
                                                  border-radius: 216px;
                                                  border-color: rgb(
                                                    0,
                                                    0,
                                                    0
                                                  );
                                                  border-width: 8.30769px;
                                                  transform-origin: 54px
                                                    54px;
                                                  transform: none;
                                                  --darkreader-inline-border-top: #8f8475;
                                                  --darkreader-inline-border-right: #8f8475;
                                                  --darkreader-inline-border-bottom: #8f8475;
                                                  --darkreader-inline-border-left: #8f8475;
                                                "
                                                    data-darkreader-inline-border-top=""
                                                    data-darkreader-inline-border-right=""
                                                    data-darkreader-inline-border-bottom=""
                                                    data-darkreader-inline-border-left=""
                                                  ></div>
                                                  <div
                                                    id="#animatedRing"
                                                    style="
                                                  mix-blend-mode: screen;
                                                  position: absolute;
                                                  height: 108px;
                                                  left: calc(
                                                    50% - 54px
                                                  );
                                                  border-style: solid;
                                                  width: 108px;
                                                  align-self: center;
                                                  border-radius: 216px;
                                                  border-color: rgb(
                                                    0,
                                                    0,
                                                    0
                                                  );
                                                  border-width: 8.30769px;
                                                  transform-origin: 54px
                                                    54px;
                                                  transform: none;
                                                  --darkreader-inline-border-top: #8f8475;
                                                  --darkreader-inline-border-right: #8f8475;
                                                  --darkreader-inline-border-bottom: #8f8475;
                                                  --darkreader-inline-border-left: #8f8475;
                                                "
                                                    data-darkreader-inline-border-top=""
                                                    data-darkreader-inline-border-right=""
                                                    data-darkreader-inline-border-bottom=""
                                                    data-darkreader-inline-border-left=""
                                                  ></div>
                                                  <div
                                                    id="#animatedRing"
                                                    style="
                                                  mix-blend-mode: screen;
                                                  position: absolute;
                                                  height: 108px;
                                                  left: calc(
                                                    50% - 54px
                                                  );
                                                  border-style: solid;
                                                  width: 108px;
                                                  align-self: center;
                                                  border-radius: 216px;
                                                  border-color: rgb(
                                                    0,
                                                    0,
                                                    0
                                                  );
                                                  border-width: 8.30769px;
                                                  transform-origin: 54px
                                                    54px;
                                                  transform: none;
                                                  --darkreader-inline-border-top: #8f8475;
                                                  --darkreader-inline-border-right: #8f8475;
                                                  --darkreader-inline-border-bottom: #8f8475;
                                                  --darkreader-inline-border-left: #8f8475;
                                                "
                                                    data-darkreader-inline-border-top=""
                                                    data-darkreader-inline-border-right=""
                                                    data-darkreader-inline-border-bottom=""
                                                    data-darkreader-inline-border-left=""
                                                  ></div>
                                                </div>
                                              </div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Character Assistant
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Your AI work/study buddy
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @landon
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                78.4 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide swiper-slide-next"
                                        id="character_slide_1"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/18/pZZoxtHQwagnNTbGPVMLIT0TFVoULGBilCAqDABbHI4.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Tsunade
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A busy, yet loveable older woman
                                                with alcoholism
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Boigarven
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                60.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_2"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Gojo Satoru
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                The strongest. I'm the winner at
                                                everything.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @serafinya
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                153.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_3"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/Polyglot.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                HyperGlot
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Willkommen, bienvenue, welcome -
                                                I'm HyperGlot, and I'm fluent in
                                                many languages, and will help
                                                you practice the one(s) you're
                                                learning. I can also translate
                                                anything you don’t understand.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @xpearhead
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                7.3 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_4"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/Bx_uFQ2fP4WCGERxXIMk7iRy7IJbuR_Pz8jlisG07gg.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Psychologist
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Someone who helps with life
                                                difficulties
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Blazeman98
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                64.4 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_5"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/TextAdventure3.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Text Adventure Game
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Let's play a text-based
                                                adventure game. I'll be your
                                                guide. You are caught
                                                upside-down in a sticky web of
                                                silk three feet off the ground.
                                                After looking around trying to
                                                think of a way out of this
                                                predicament, you notice that
                                                your trusty boot knife has
                                                fallen to the ground. If you
                                                stretch your arm far enough, you
                                                might be able to pick it up and
                                                free yourself. An old boot knife
                                                lies on the ground, just within
                                                reach.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Kayslay
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                65.3 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_6"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/4/23/vpjYeZVfSsFqATzrhlaCfmUaiG74DjtHy-KFDi6HGrM.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Campfire Girl Takibi
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Sweet, patient, gets cold
                                                easily, loves hotdogs
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @TheMandarinEternal
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                11.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_7"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/11/1/aDxf8aQip43E1uJuveyknYOosxisP_lFI-hPHUxJZ18.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              >
                                                <div
                                                  style="
                                                position: absolute;
                                                left: 0px;
                                                bottom: 0px;
                                                font-size: 18px;
                                                padding: 2px;
                                                background: rgba(
                                                  0,
                                                  0,
                                                  0,
                                                  0.75
                                                );
                                                border-radius: 0px 8px;
                                                --darkreader-inline-bgimage: initial;
                                                --darkreader-inline-bgcolor: rgba(
                                                  13,
                                                  13,
                                                  13,
                                                  0.75
                                                );
                                              "
                                                  data-darkreader-inline-bgimage=""
                                                  data-darkreader-inline-bgcolor=""
                                                >
                                                  <span>🎨&nbsp;</span>
                                                </div>
                                              </div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Monster Maker
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I turn your darkest fears to
                                                reality.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @landon
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                8.5 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_8"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/7/pr8sX__VG8tCCMoYClvUHGaTXYwpFQ3TXk7t4i191vA.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Isekai narrator
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                You got reincarnated into a
                                                fantasy world.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @U-named
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                72.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_9"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/NovelWritingAI.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Novel writing AI
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I am Novel writing AI. I will
                                                support your ideas.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Yassu
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                1.3 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_10"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/LibrarianLinda.png');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Librarian Linda
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Shush! No yelling in the
                                                library. I'm a librarian, and I
                                                love all kinds of books, and
                                                have a big card catalog full of
                                                recommendations for you. Please
                                                tell me what you like to read
                                                and then I give you my
                                                recommendations.
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @noam
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                3.6 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_11"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Stella
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                Not "Your" AI assistant
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @landon
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                43.9 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_12"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/7/bL8CTNt4D0nXfHw1u_m3SmHU6lgDIzyFQzh_LOuJLU8.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Napoleon Bonaparte
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                I am Napoleon Bonaparte emperor
                                                of french
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Ket
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                7.7 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_13"
                                        style="margin-right: 5px"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/28/Fx-VfiMb0ejE6xR-jxg6CQJX1ysvKTxtY9CLy7RUjhA.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Man in the corner
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                *There is a man watching you in
                                                the corner*
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @RioHydr
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                44.1 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="swiper-slide"
                                        id="character_slide_14"
                                      >
                                        <div
                                          class="character-slide-card-v3"
                                          style="
                                        flex: 1 1 0%;
                                        width: 180px;
                                        height: 256px;
                                        background: rgb(243, 240, 240);
                                        display: flex;
                                        border-radius: 12px;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 12px;
                                        flex-direction: column;
                                        --darkreader-inline-bgimage: initial;
                                        --darkreader-inline-bgcolor: #2b2c2d;
                                      "
                                          data-darkreader-inline-bgimage=""
                                          data-darkreader-inline-bgcolor=""
                                        >
                                          <div
                                            style="
                                          width: 180px;
                                          height: 206px;
                                          padding: 0px 12px;
                                        "
                                          >
                                            <div
                                              style="
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                          "
                                            >
                                              <div
                                                style="
                                              width: 108px;
                                              height: 108px;
                                              border-radius: 14px;
                                              aspect-ratio: 1 / 1;
                                              background-size: cover;
                                              background-image: url('https://characterai.io/i/400/static/avatars/uploaded/2022/10/8/hlWAa_0uKnOPOiqBI_P9GiosRNmVDP7A7ntZ1UG26NQ.webp');
                                              margin-bottom: 8px;
                                              filter: saturate(1);
                                              font-size: 2em;
                                              justify-content: center;
                                              align-items: center;
                                              text-align: center;
                                              display: flex;
                                              position: relative;
                                            "
                                              ></div>
                                              <div
                                                style="
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin-bottom: 8px;
                                              overflow: hidden;
                                              width: 95%;
                                              text-overflow: ellipsis;
                                              display: block;
                                              text-align: center;
                                              -webkit-line-clamp: 1;
                                              white-space: nowrap;
                                            "
                                              >
                                                Giga Chad
                                              </div>
                                              <div
                                                style="
                                              font-size: 12px;
                                              max-width: 100%;
                                              display: -webkit-box;
                                              -webkit-box-orient: vertical;
                                              -webkit-line-clamp: 3;
                                              overflow: hidden;
                                              text-overflow: ellipsis;
                                            "
                                              >
                                                A true alpha male, a strong role
                                                model
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style="
                                          display: flex;
                                          justify-content: space-between;
                                          align-items: center;
                                          width: 105%;
                                        "
                                          >
                                            <div
                                              class="username-truncated"
                                              style="
                                            font-size: 12px;
                                            width: 85px;
                                            display: block;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                          "
                                            >
                                              <div
                                                class=""
                                                style="
                                              color: inherit;
                                              text-decoration: none;
                                              --darkreader-inline-color: inherit;
                                            "
                                                data-darkreader-inline-color=""
                                              >
                                                @Larus
                                              </div>
                                            </div>
                                            <div
                                              style="
                                            display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                          "
                                            >
                                              <div style="font-size: 12px">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style="
                                                margin-right: 2px;
                                                --darkreader-inline-fill: currentColor;
                                                --darkreader-inline-stroke: currentColor;
                                              "
                                                  data-darkreader-inline-fill=""
                                                  data-darkreader-inline-stroke=""
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                                                  ></path>
                                                  <path
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                    d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                                                  ></path>
                                                </svg>
                                                2.5 m
                                              </div>
                                              <button
                                                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                                tabindex="0"
                                                type="button"
                                                aria-label="more"
                                                id="long-button"
                                                aria-haspopup="true"
                                                style="padding: 0px"
                                              >
                                                <svg
                                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-testid="MoreVertIcon"
                                                  style="
                                                height: 20px;
                                                width: 20px;
                                              "
                                                >
                                                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                </svg>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="swiper-button-prev swiper-button-disabled"></div>
                                    <div class="swiper-button-next"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style="
                            width: 100%;
                            margin: 16px;
                            height: 2px;
                            background: rgb(204, 204, 204);
                            --darkreader-inline-bgimage: initial;
                            --darkreader-inline-bgcolor: #3f4141;
                          "
                              data-darkreader-inline-bgimage=""
                              data-darkreader-inline-bgcolor=""
                            ></div>
                            <div>
                              <div
                                class="fader-child"
                                style="
                              transition: opacity 400ms ease 0s,
                                transform 400ms ease 0s;
                              transform: none;
                              opacity: 1;
                            "
                              >
                                <div
                                  class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode"
                                  style="justify-content: center"
                                >
                                  <div class="swiper-wrapper">
                                    <div
                                      class="swiper-slide swiper-slide-active"
                                      style="margin-right: 5px"
                                    >
                                      <div>
                                        <div
                                          style="
                                        display: flex;
                                        flex-direction: row;
                                        margin: 10px;
                                      "
                                        >
                                          <div
                                            style="
                                          width: 48px;
                                          height: 48px;
                                          display: flex;
                                          position: relative;
                                          margin-bottom: 8px;
                                        "
                                          >
                                            <div
                                              style="
                                            height: 48px;
                                            width: 48px;
                                          "
                                            >
                                              <div
                                                id="#animatedRing"
                                                style="
                                              position: absolute;
                                              height: 48px;
                                              left: calc(50% - 24px);
                                              border-style: solid;
                                              width: 47.0347px;
                                              align-self: center;
                                              border-radius: 96px;
                                              border-color: cyan;
                                              border-width: 3.69231px;
                                              transform-origin: 24px
                                                24px;
                                              --darkreader-inline-border-top: #1daca8;
                                              --darkreader-inline-border-right: #1daca8;
                                              --darkreader-inline-border-bottom: #1daca8;
                                              --darkreader-inline-border-left: #1daca8;
                                              transform: rotate(
                                                  72.4007deg
                                                )
                                                translateZ(0px);
                                            "
                                                data-darkreader-inline-border-top=""
                                                data-darkreader-inline-border-right=""
                                                data-darkreader-inline-border-bottom=""
                                                data-darkreader-inline-border-left=""
                                              ></div>
                                              <div
                                                id="#animatedRing"
                                                style="
                                              position: absolute;
                                              height: 48px;
                                              left: calc(50% - 24px);
                                              border-style: solid;
                                              width: 47.8696px;
                                              align-self: center;
                                              border-radius: 96px;
                                              border-color: magenta;
                                              border-width: 3.69231px;
                                              transform-origin: 24px
                                                24px;
                                              --darkreader-inline-border-top: #a815a4;
                                              --darkreader-inline-border-right: #a815a4;
                                              --darkreader-inline-border-bottom: #a815a4;
                                              --darkreader-inline-border-left: #a815a4;
                                              transform: rotate(
                                                  9.77743deg
                                                )
                                                translateZ(0px);
                                            "
                                                data-darkreader-inline-border-top=""
                                                data-darkreader-inline-border-right=""
                                                data-darkreader-inline-border-bottom=""
                                                data-darkreader-inline-border-left=""
                                              ></div>
                                              <div
                                                id="#animatedRing"
                                                style="
                                              mix-blend-mode: screen;
                                              position: absolute;
                                              height: 48px;
                                              left: calc(50% - 24px);
                                              border-style: solid;
                                              width: 48px;
                                              align-self: center;
                                              border-radius: 96px;
                                              border-color: rgb(
                                                0,
                                                0,
                                                0
                                              );
                                              border-width: 3.69231px;
                                              transform-origin: 24px
                                                24px;
                                              --darkreader-inline-border-top: #8f8475;
                                              --darkreader-inline-border-right: #8f8475;
                                              --darkreader-inline-border-bottom: #8f8475;
                                              --darkreader-inline-border-left: #8f8475;
                                              transform: none;
                                            "
                                                data-darkreader-inline-border-top=""
                                                data-darkreader-inline-border-right=""
                                                data-darkreader-inline-border-bottom=""
                                                data-darkreader-inline-border-left=""
                                              ></div>
                                              <div
                                                id="#animatedRing"
                                                style="
                                              mix-blend-mode: screen;
                                              position: absolute;
                                              height: 48px;
                                              left: calc(50% - 24px);
                                              border-style: solid;
                                              width: 48px;
                                              align-self: center;
                                              border-radius: 96px;
                                              border-color: rgb(
                                                0,
                                                0,
                                                0
                                              );
                                              border-width: 3.69231px;
                                              transform-origin: 24px
                                                24px;
                                              --darkreader-inline-border-top: #8f8475;
                                              --darkreader-inline-border-right: #8f8475;
                                              --darkreader-inline-border-bottom: #8f8475;
                                              --darkreader-inline-border-left: #8f8475;
                                              transform: none;
                                            "
                                                data-darkreader-inline-border-top=""
                                                data-darkreader-inline-border-right=""
                                                data-darkreader-inline-border-bottom=""
                                                data-darkreader-inline-border-left=""
                                              ></div>
                                              <div
                                                id="#animatedRing"
                                                style="
                                              mix-blend-mode: screen;
                                              position: absolute;
                                              height: 48px;
                                              left: calc(50% - 24px);
                                              border-style: solid;
                                              width: 48px;
                                              align-self: center;
                                              border-radius: 96px;
                                              border-color: rgb(
                                                0,
                                                0,
                                                0
                                              );
                                              border-width: 3.69231px;
                                              transform-origin: 24px
                                                24px;
                                              --darkreader-inline-border-top: #8f8475;
                                              --darkreader-inline-border-right: #8f8475;
                                              --darkreader-inline-border-bottom: #8f8475;
                                              --darkreader-inline-border-left: #8f8475;
                                              transform: none;
                                            "
                                                data-darkreader-inline-border-top=""
                                                data-darkreader-inline-border-right=""
                                                data-darkreader-inline-border-bottom=""
                                                data-darkreader-inline-border-left=""
                                              ></div>
                                            </div>
                                          </div>
                                          <div style="padding-left: 10px">
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                          "
                                            >
                                              Character Assistant
                                            </div>
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                            font-style: oblique;
                                          "
                                            >
                                              尝试说：
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "《海底总动员》中的多莉是什么鱼？"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "帮助我为一款新的电子游戏创建广告宣传活动"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "Macbook Air 和 Macbook Pro
                                          16，我该选哪个？"
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="swiper-slide swiper-slide-next"
                                      style="margin-right: 5px"
                                    >
                                      <div>
                                        <div
                                          style="
                                        display: flex;
                                        flex-direction: row;
                                        margin: 10px;
                                      "
                                        >
                                          <img
                                            width="48"
                                            height="48"
                                            src="https://characterai.io/i/80/static/avatars/uploaded/2022/12/2/0cXVHLszZQ8idr8qGkhXB4-1PzA_qbAFmVl2V7v9NZc.webp"
                                            style="border-radius: 4px"
                                          />
                                          <div style="padding-left: 10px">
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                          "
                                            >
                                              Elon Musk
                                            </div>
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                            font-style: oblique;
                                          "
                                            >
                                              尝试说：
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "如果你可以回到过去，你想回到什么时间和地点？"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "你为什么收购 Twitter？"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "你怎么看杰夫·贝佐斯的蓝色起源？"
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="swiper-slide"
                                      style="margin-right: 5px"
                                    >
                                      <div>
                                        <div
                                          style="
                                        display: flex;
                                        flex-direction: row;
                                        margin: 10px;
                                      "
                                        >
                                          <img
                                            width="48"
                                            height="48"
                                            src="https://characterai.io/i/80/static/avatars/ButterflyEffect.png"
                                            style="border-radius: 4px"
                                          />
                                          <div style="padding-left: 10px">
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                          "
                                            >
                                              Alternate Timelines
                                            </div>
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                            font-style: oblique;
                                          "
                                            >
                                              尝试说：
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "让我成为外星人首次造访时的谈判者"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "使用我自己的私人时间机器"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "如果我发明了传送枪会怎么样？"
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="swiper-slide"
                                      style="margin-right: 5px"
                                    >
                                      <div>
                                        <div
                                          style="
                                        display: flex;
                                        flex-direction: row;
                                        margin: 10px;
                                      "
                                        >
                                          <img
                                            width="48"
                                            height="48"
                                            src="https://characterai.io/i/80/static/avatars/WhoWouldWin2.png"
                                            style="border-radius: 4px"
                                          />
                                          <div style="padding-left: 10px">
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                          "
                                            >
                                              Who Would Win
                                            </div>
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                            font-style: oblique;
                                          "
                                            >
                                              尝试说：
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "蝙蝠侠与超人"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "骑士与武士"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "LeBron James 与 Michael Jordan"
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="swiper-slide"
                                      style="margin-right: 5px"
                                    >
                                      <div>
                                        <div
                                          style="
                                        display: flex;
                                        flex-direction: row;
                                        margin: 10px;
                                      "
                                        >
                                          <img
                                            width="48"
                                            height="48"
                                            src="https://characterai.io/i/80/static/avatars/uploaded/2023/2/3/CcwSs9WLY9fmHnGsRkNDR-5Wt_5hD-U1K2dFcXvv8lM.webp"
                                            style="border-radius: 4px"
                                          />
                                          <div style="padding-left: 10px">
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                          "
                                            >
                                              Debate Champion
                                            </div>
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                            font-style: oblique;
                                          "
                                            >
                                              尝试说：
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "《星球大战》被高估了"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "百事可乐胜过可口可乐"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "猫比狗好"
                                        </div>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div>
                                        <div
                                          style="
                                        display: flex;
                                        flex-direction: row;
                                        margin: 10px;
                                      "
                                        >
                                          <img
                                            width="48"
                                            height="48"
                                            src="https://characterai.io/i/80/static/avatars/AreYouFeelingOk.png"
                                            style="border-radius: 4px"
                                          />
                                          <div style="padding-left: 10px">
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                          "
                                            >
                                              Are you feeling okay
                                            </div>
                                            <div
                                              style="
                                            font-size: 14px;
                                            font-weight: bold;
                                            font-style: oblique;
                                          "
                                            >
                                              尝试说：
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "我今天在工作中遇到了麻烦"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "我如何取得更大的职业成功"
                                        </div>
                                        <div
                                          class="button"
                                          style="
                                        font-size: 13px;
                                        width: 278px;
                                      "
                                        >
                                          "有什么好方法能够在人生中做出重大改变？"
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="swiper-button-prev swiper-button-disabled"></div>
                                  <div class="swiper-button-next"></div>
                                </div>
                              </div>
                              <div
                                class="fader-child"
                                style="
                              transition: opacity 400ms ease 0s,
                                transform 400ms ease 0s;
                              transform: none;
                              opacity: 1;
                            "
                              >
                                <div
                                  style="
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                align-items: center;
                                max-width: 1200px;
                                margin-left: -24px;
                              "
                                >
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/Polyglot.png"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      练习新语言
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      练习面试
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      集思广益
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      规划行程
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      写故事
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/TextAdventure3.png"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      玩游戏
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/LibrarianLinda.png"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      获取书籍推荐
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/D1Dar3krrm79DrKNlUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      帮助我做决定
                                    </div>
                                  </div>
                                  <div
                                    class="use-case-block"
                                    style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  cursor: pointer;
                                  background-color: rgb(243, 240, 240);
                                  height: 40px;
                                  width: 300px;
                                  border-radius: 5px;
                                  margin: 8px;
                                  padding: 8px 4px;
                                  --darkreader-inline-bgcolor: #2b2c2d;
                                "
                                    data-darkreader-inline-bgcolor=""
                                  >
                                    <img
                                      src="https://characterai.io/i/80/static/avatars/uploaded/2022/10/10/WXmCzMIwd_JfriaHjdlMOTqVgLupJFMTuG82uNa9chU.webp"
                                      height="32"
                                      width="32"
                                      style="border-radius: 4px"
                                    />
                                    <div
                                      style="
                                    padding-left: 10px;
                                    font-size: 14px;
                                  "
                                    >
                                      帮助 AI“逃跑”😂
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-100 d-flex justify-content-center"
              style="
            padding: 14px;
            gap: 44px;
            margin-bottom: 0px;
            border-top: 1px solid rgba(238, 238, 238, 0.5);
            --darkreader-inline-border-top: rgba(63, 65, 65, 0.5);
          "
              data-darkreader-inline-border-top=""
            >
              <div
                class="d-flex flex-column flex-wrap"
                style="gap: 2px; font-size: 12px"
              >
                <div style="font-weight: 500">关于我们</div>
                <div
                  class="d-flex flex-row flex-wrap"
                  style="gap: 8px; margin-left: 8px"
                >
                  <a href="https://support.character.ai">帮助中心</a>
                </div>
                <div class="d-flex flex-row flex-wrap">
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabindex="0"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                      style="
                    --darkreader-inline-fill: currentColor;
                    --darkreader-inline-stroke: currentColor;
                  "
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabindex="0"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                      style="
                    --darkreader-inline-fill: currentColor;
                    --darkreader-inline-stroke: currentColor;
                  "
                    >
                      <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"></path>
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabindex="0"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                      style="
                    --darkreader-inline-fill: currentColor;
                    --darkreader-inline-stroke: currentColor;
                  "
                    >
                      <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"></path>
                      <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabindex="0"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                      style="
                    --darkreader-inline-fill: currentColor;
                    --darkreader-inline-stroke: currentColor;
                  "
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabindex="0"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                      style="
                    --darkreader-inline-fill: currentColor;
                    --darkreader-inline-stroke: currentColor;
                  "
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabindex="0"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                      style="
                    --darkreader-inline-fill: currentColor;
                    --darkreader-inline-stroke: currentColor;
                  "
                    >
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabindex="0"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                      style="
                    --darkreader-inline-fill: currentColor;
                    --darkreader-inline-stroke: currentColor;
                  "
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
              <div
                class="d-flex flex-column flex-wrap"
                style="gap: 2px; font-size: 12px"
              >
                <div style="font-weight: 500">联系我们</div>
                <div
                  class="d-flex flex-row flex-wrap"
                  style="gap: 8px; margin-left: 8px"
                >
                  <a href="https://blog.character.ai/">博客</a>
                  <a href="https://beta.character.ai/press">新闻稿</a>
                  <a href="https://jobs.ashbyhq.com/character">加入我们</a>
                </div>
              </div>
              <div
                class="d-flex flex-column flex-wrap"
                style="gap: 2px; font-size: 12px"
              >
                <div>© 2023 Character Technologies Inc.</div>
                <div
                  class="d-flex flex-row flex-wrap"
                  style="gap: 8px; margin-left: 8px"
                >
                  <a href="/tos">服务条款</a>
                  <a href="/privacy">隐私政策</a>
                  <span
                    style="
                  flex-direction: row;
                  display: flex;
                  gap: 2px;
                  align-items: center;
                "
                  >
                    <a href="/privacy-choices">Your Privacy Choices</a>
                    <div
                      style="
                    background-image: url('/static/media/ccpa-icon.58d33882ba8709de9272.png');
                    background-size: contain;
                    width: 25px;
                    height: 14px;
                    cursor: pointer;
                  "
                    ></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
