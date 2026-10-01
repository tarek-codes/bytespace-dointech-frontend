'use client';

export default function Footer() {
  const linkColumns = [
    [
      { label: 'Featured Courses', href: '/courses/featured' },
      { label: 'Featured Categories', href: '/categories' },
      { label: 'Business', href: '/courses/business' },
      { label: 'IT', href: '/courses/it' },
      { label: 'Design', href: '/courses/design' },
    ],
    [
      { label: 'Development', href: '/courses/development' },
      { label: 'Marketing', href: '/courses/marketing' },
      { label: 'Photography', href: '/courses/photography' },
      { label: 'Finance', href: '/courses/finance' },
      { label: 'Sport', href: '/courses/sport' },
    ],
    [
      { label: 'Become a Creator', href: '/become-creator' },
      { label: 'Affiliate Program', href: '/affiliate' },
      { label: 'Contact', href: '/contact' },
      { label: 'Help', href: '/help' },
      { label: 'About', href: '/about' },
    ],
  ];

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="/" className="footer-logo" id="footer-logo" aria-label="ByteSpace Home">
              <svg className="footer-logo-icon" width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0V21C0 26.799 4.701 31.5 10.5 31.5V10.5Z" fill="currentColor"/>
                <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5H18.375Z" fill="currentColor"/>
                <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5H18.375Z" fill="currentColor"/>
              </svg>
              <span className="footer-logo-name">ByteSpace</span>
            </a>
            <p className="footer-brand-desc">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="footer-newsletter" id="footer-newsletter">
              <input type="email" placeholder="Enter your email" aria-label="Enter your email for newsletter" />
              <button className="footer-newsletter-btn">Search</button>
            </div>
            <p className="footer-newsletter-legal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <div className="footer-links" id="footer-links">
            {linkColumns.map((col, colIdx) => (
              <div className="footer-links-col" key={colIdx}>
                <ul>
                  {col.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" id="footer-bottom">
          <p className="footer-copyright">© 2023 ByteSpace. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
