'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { FaFacebook, FaStar } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function MiniCourseCard({ image, title, className }) {
  return (
    <div className={`course-card signin-course ${className}`} aria-hidden="true">
      <div className="course-card-image">
        <Image src={image} alt="" width={400} height={200} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        <div className="course-card-badges">
          <span className="course-card-badge">17 Lessons</span>
          <span className="course-card-badge">2 hours 18 mins</span>
          <span className="course-card-badge">59 Comments</span>
        </div>
      </div>
      <div className="course-card-body">
        <div className="course-card-title-row">
          <h3 className="course-card-title">{title}</h3>
          <div className="course-card-rating">4.5 <FaStar className="star" /></div>
        </div>
        <div className="course-card-author">by purepixel studio</div>
        <div className="course-card-meta">
          <div className="course-card-level">
            <svg className="course-card-level-icon" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <rect x="1" y="8" width="2.6" height="5" rx="0.8" />
              <rect x="5.7" y="4.5" width="2.6" height="8.5" rx="0.8" />
              <rect x="10.4" y="1" width="2.6" height="12" rx="0.8" />
            </svg>
            Beginner
          </div>
          <div className="course-card-enrolled">
            <Image src="/images/avatar-sarah.jpg" alt="" width={26} height={26} className="course-card-enrolled-avatar" />
            <Image src="/images/avatar-james.jpg" alt="" width={26} height={26} className="course-card-enrolled-avatar" />
            <Image src="/images/avatar-alex.jpg" alt="" width={26} height={26} className="course-card-enrolled-avatar" />
            <span className="course-card-enrolled-count">26+</span>
          </div>
        </div>
        <div className="course-card-price">$25<span>/lifetime</span></div>
      </div>
    </div>
  );
}

export default function SignInView({ mode = 'signin' }) {
  const isSignup = mode === 'signup';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const innerRef = useRef(null);

  // Fit the whole page in the viewport: measure the natural layout, then
  // scale it down (never up) so nothing needs scrolling at any screen size.
  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return undefined;

    const fit = () => {
      el.style.transform = 'none';
      el.style.width = '';
      el.style.maxWidth = '';
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const natural = el.offsetHeight;
      const scale = Math.min(1, vh / natural);
      if (scale < 1) {
        // Widen the layout box so the scaled content still spans the screen
        el.style.width = `${vw / scale}px`;
        el.style.maxWidth = 'none';
      }
      el.style.transform = `scale(${scale})`;
    };

    fit();
    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    return () => {
      window.removeEventListener('resize', fit);
      window.removeEventListener('orientationchange', fit);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // Authentication is not wired up yet
  };

  return (
    <main className="signin" id="signin-page">
      <div className="signin-grid" aria-hidden="true" />

      <div className="signin-inner" ref={innerRef}>
        {/* Left: brand + showcase */}
        <section className="signin-left">
          <a href="/" className="signin-logo" aria-label="ByteSpace Home">
            <svg width="29" height="32" viewBox="0 0 29 32" fill="none" aria-hidden="true">
              <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0V21C0 26.799 4.701 31.5 10.5 31.5V10.5Z" fill="#D4FB20" />
              <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5H18.375Z" fill="#D4FB20" />
              <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5H18.375Z" fill="#D4FB20" />
            </svg>
          </a>

          <h2 className="signin-left-title">{isSignup ? 'Sign up and come in' : 'Sign in with ease'}</h2>
          <p className="signin-left-text">
            {isSignup
              ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost'
              : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}
          </p>

          <div className="signin-showcase" aria-hidden="true">
            <MiniCourseCard image="/images/course-digital-asset-v2.jpg" title="Build Digital Asset" className="signin-course-back" />
            <MiniCourseCard image="/images/course-big-data-v2.jpg" title="the Power of Big Data" className="signin-course-front" />

            <Image className="signin-shape signin-torus animate-float-slow" src="/images/cta/torus-lime.png" alt="" width={720} height={660} />
            <Image className="signin-shape signin-cone animate-float" src="/images/cta/cone-lime.png" alt="" width={720} height={790} />
            <Image className="signin-shape signin-spiral animate-float-delay" src="/images/shape-spiral-white-mid-3d.png" alt="" width={400} height={425} />

            <div className="signin-students animate-float-slow">
              <div className="signin-students-title">Happy Students</div>
              <div className="signin-students-rating">4.8 (240) <FaStar /></div>
              <div className="hero-avatar-stack">
                <Image src="/images/hero-avatar-1.png" alt="" width={30} height={30} className="avatar-img" />
                <Image src="/images/hero-avatar-2.png" alt="" width={30} height={30} className="avatar-img" />
                <Image src="/images/hero-avatar-3.png" alt="" width={30} height={30} className="avatar-img" />
                <Image src="/images/hero-avatar-4.png" alt="" width={30} height={30} className="avatar-img" />
                <Image src="/images/hero-avatar-5.png" alt="" width={30} height={30} className="avatar-img" />
                <div className="avatar-badge">2K+</div>
              </div>
            </div>
          </div>
        </section>

        {/* Right: form card */}
        <section className="signin-card" aria-labelledby="signin-title">
          <a href="/" className="signin-logo signin-logo-mobile" aria-label="ByteSpace Home">
            <svg width="26" height="29" viewBox="0 0 29 32" fill="none" aria-hidden="true">
              <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0V21C0 26.799 4.701 31.5 10.5 31.5V10.5Z" fill="#003BE2" />
              <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5H18.375Z" fill="#003BE2" />
              <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5H18.375Z" fill="#003BE2" />
            </svg>
          </a>
          <span className="signin-eyebrow">{isSignup ? 'Create an Account' : 'Sign In'}</span>
          <h1 id="signin-title" className="signin-title">
            {isSignup ? <>Welcome to<br />ByteSpace</> : 'Welcome Back'}
          </h1>

          <form className="signin-form" onSubmit={onSubmit}>
            {isSignup && (
              <>
                <label className="signin-label" htmlFor="signin-name">Full Name</label>
                <input
                  id="signin-name"
                  className="signin-input"
                  type="text"
                  placeholder="Jamie Davis"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </>
            )}

            <label className="signin-label" htmlFor="signin-email">Email</label>
            <input
              id="signin-email"
              className="signin-input"
              type="email"
              placeholder="designer@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="signin-label" htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              className="signin-input"
              type="password"
              placeholder="••••••••"
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="signin-submit">{isSignup ? 'Continue' : 'Sign In'}</button>
          </form>

          {isSignup ? (
            <p className="signin-new signin-new-signup">
              Already have an account? <a href="/signin">Login</a>
            </p>
          ) : (
            <>
              <div className="signin-divider"><span>or</span></div>

              <div className="signin-social">
                <button type="button" className="signin-social-btn" aria-label="Continue with Facebook">
                  <FaFacebook size={24} color="#1877F2" />
                </button>
                <button type="button" className="signin-social-btn" aria-label="Continue with Google">
                  <FcGoogle size={24} />
                </button>
              </div>

              <p className="signin-new">
                New user? <a href="/join">Create an account</a>
              </p>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
