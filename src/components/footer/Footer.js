function Footer() {
  return (
    <div
      className="w-100 d-flex justify-content-center"
      style="padding: 14px; gap: 44px; margin-bottom: 0px; border-top: 1px solid rgba(238, 238, 238, 0.5); --darkreader-inline-border-top: rgba(63, 65, 65, 0.5);"
      data-darkreader-inline-border-top=""
    >
      <div
        className="d-flex flex-column flex-wrap"
        style="gap: 2px; font-size: 12px;"
      >
        <div style="font-weight: 500;">About us</div>
        <div
          className="d-flex flex-row flex-wrap"
          style="gap: 8px; margin-left: 8px;"
        >
          <a href="https://support.character.ai">Help Center</a>
        </div>
        <div className="d-flex flex-row flex-wrap">
          <button
            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
            tabIndex="0"
            type="button"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
            <span className="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-wrap"
        style="gap: 2px; font-size: 12px;"
      >
        <div style="font-weight: 500;">Contact us</div>
        <div
          className="d-flex flex-row flex-wrap"
          style="gap: 8px; margin-left: 8px;"
        >
          <a href="https://blog.character.ai/">Blog</a>
          <a href="https://beta.character.ai/press">Press</a>
          <a href="https://jobs.ashbyhq.com/character">Work with us</a>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-wrap"
        style="gap: 2px; font-size: 12px;"
      >
        <div>© 2023 Character Technologies Inc.</div>
        <div
          className="d-flex flex-row flex-wrap"
          style="gap: 8px; margin-left: 8px;"
        >
          <a href="/tos">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <span style="flex-direction: row; display: flex; gap: 2px; align-items: center;">
            <a href="/privacy-choices">Your Privacy Choices</a>
            <div style="background-image: url('/static/media/ccpa-icon.58d33882ba8709de9272.png'); background-size: contain; width: 25px; height: 14px; cursor: pointer;"></div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
