'use client';

export default function Navbar() {
  return (
    <header className="navbar-header" id="navbar">
      <div className="navbar-container">
        {/* Brand Logo matching Figma SVG exactly */}
        <a href="/" className="navbar-brand" id="navbar-logo" aria-label="ByteSpace Home">
          <svg className="navbar-brand-icon" width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0V21C0 26.799 4.701 31.5 10.5 31.5V10.5Z" fill="#D4FB20"/>
            <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5H18.375Z" fill="#D4FB20"/>
            <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5H18.375Z" fill="#D4FB20"/>
          </svg>
          <span className="navbar-brand-name">ByteSpace</span>
        </a>

        {/* Center Nav Links */}
        <nav className="navbar-nav" id="navbar-links">
          <a href="/" className="navbar-link active">Home</a>
          <a href="/courses" className="navbar-link">Courses</a>
          <a href="/creators" className="navbar-link">Creators</a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions" id="navbar-actions">
          <a href="/signin" className="navbar-link navbar-signin">Sign In</a>
          <a href="/join" className="navbar-link navbar-join">Join Us</a>
          <button className="navbar-cart-btn" aria-label="Shopping Cart" id="navbar-cart">
            <svg width="16" height="18" viewBox="1300 50 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1314 54H1312C1312 51.79 1310.21 50 1308 50C1305.79 50 1304 51.79 1304 54H1302C1300.9 54 1300 54.9 1300 56V66C1300 67.1 1300.9 68 1302 68H1314C1315.1 68 1316 67.1 1316 66V56C1316 54.9 1315.1 54 1314 54ZM1308 51.5C1309.38 51.5 1310.5 52.62 1310.5 54H1305.5C1305.5 52.62 1306.62 51.5 1308 51.5ZM1314.5 66C1314.5 66.28 1314.28 66.5 1314 66.5H1302C1301.72 66.5 1301.5 66.28 1301.5 66V56C1301.5 55.72 1301.72 55.5 1302 55.5H1304V57C1304 57.41 1304.34 57.75 1304.75 57.75C1305.16 57.75 1305.5 57.41 1305.5 57V55.5H1310.5V57C1310.5 57.41 1310.84 57.75 1311.25 57.75C1311.66 57.75 1312 57.41 1312 57V55.5H1314C1314.28 55.5 1314.5 55.72 1314.5 56V66Z" fill="#F5F5F6"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
