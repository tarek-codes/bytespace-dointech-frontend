'use client';

import Image from 'next/image';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { FaStar } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="hero" id="hero-section">
      {/* Background Edge-to-Edge Grid Overlay spanning full width regardless of screen size */}
      <div className="hero-grid-overlay" aria-hidden="true"></div>

      {/* Giant Lime Arch from SVG (cx="720" cy="1156.5" r="414.5" stroke="#CBFC01" stroke-width="320") */}
      <div className="hero-lime-arch-wrap" aria-hidden="true">
        <svg
          className="hero-lime-arch-svg"
          viewBox="0 582 1440 442"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
        >
          <circle
            cx="720"
            cy="1156.5"
            r="414.5"
            stroke="#CBFC01"
            strokeWidth="320"
          />
        </svg>
      </div>

      {/* Decorative 3D Elements matching exact SVG renders */}
      <div className="hero-decorations" aria-hidden="true">
        {/* Top-Left Lime 3D Spiral */}
        <div className="hero-deco deco-zigzag-lime animate-float-slow">
          <Image
            src="/images/shape-spiral-lime-3d.png"
            alt="3D lime spiral"
            width={1630}
            height={1732}
            priority
            unoptimized
          />
        </div>

        {/* Mid-Left White 3D Spiral */}
        <div className="hero-deco deco-zigzag-white-mid animate-float">
          <Image
            src="/images/shape-spiral-white-mid-3d.png"
            alt="3D white spiral"
            width={1630}
            height={1732}
            priority
            unoptimized
          />
        </div>

        {/* Bottom-Left White 3D Torus */}
        <div className="hero-deco deco-torus-white animate-float-delay">
          <Image
            src="/images/shape-torus-white-3d.png"
            alt="3D white torus ring"
            width={1732}
            height={1586}
            priority
            unoptimized
          />
        </div>

        {/* Top-Right Lime 3D Cylinder / Shape */}
        <div className="hero-deco deco-blob-lime animate-float-slow">
          <Image
            src="/images/shape-blob-lime-3d.png"
            alt="3D lime cylinder"
            width={1837}
            height={2013}
            priority
            unoptimized
          />
        </div>

        {/* Mid-Right White 3D Prism */}
        <div className="hero-deco deco-prism-white animate-float">
          <Image
            src="/images/shape-prism-white-3d.png"
            alt="3D white prism"
            width={1650}
            height={1816}
            priority
            unoptimized
          />
        </div>

        {/* Bottom-Right White 3D Spiral */}
        <div className="hero-deco deco-zigzag-white-bottom animate-float-delay">
          <Image
            src="/images/shape-spiral-white-bottom-3d.png"
            alt="3D white spiral"
            width={1434}
            height={1880}
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Hero Text & Search Header Content */}
      <div className="hero-header-content">
        <h1 className="hero-title" id="hero-title">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="hero-subtitle" id="hero-subtitle">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="hero-search-bar" id="hero-search">
          <div className="hero-search-input-pill">
            <HiMagnifyingGlass className="hero-search-icon" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
            />
          </div>
          <button className="hero-search-btn" id="hero-search-btn">
            Search
          </button>
        </div>
      </div>

      {/* Hero Visual Stage: High-Resolution Student Cutout + 3 Floating Cards */}
      <div className="hero-stage">
        {/* Razor-Sharp Student Cutout using the user's provided PNG rendered in High-DPI */}
        <div className="hero-student-wrapper">
          <Image
            src="/images/hero-student-char-hd.png"
            alt="ByteSpace student smiling with headphones and laptop"
            width={578}
            height={541}
            className="hero-student-img"
            priority
          />
        </div>

        {/* Floating Card 1: UI/UX Design */}
        <div className="hero-float-card hero-card-uiux animate-float" id="hero-card-uiux">
          <div className="hero-card-uiux-title">UI/UX Design</div>
          <div className="hero-card-uiux-meta">200 Courses &bull; 1000+ Students</div>
        </div>

        {/* Floating Card 2: Learning Progress */}
        <div className="hero-float-card hero-card-progress animate-float-delay" id="hero-card-progress">
          <div className="hero-card-progress-label">Learning Progress</div>
          <div className="hero-card-progress-value">55%</div>
          <div className="hero-card-progress-track">
            <div className="hero-card-progress-bar" style={{ width: '56%' }}></div>
          </div>
        </div>

        {/* Floating Card 3: Happy Students */}
        <div className="hero-float-card hero-card-students animate-float-slow" id="hero-card-students">
          <div className="hero-card-students-header">
            <span className="hero-card-students-title">Happy Students</span>
            <span className="hero-card-students-rating">
              4.5 (240) <FaStar className="star-icon" />
            </span>
          </div>
          <div className="hero-card-avatars-row">
            <div className="hero-avatar-stack">
              <Image src="/images/hero-avatar-1.png" alt="Student avatar" width={38} height={38} className="avatar-img" />
              <Image src="/images/hero-avatar-2.png" alt="Student avatar" width={38} height={38} className="avatar-img" />
              <Image src="/images/hero-avatar-3.png" alt="Student avatar" width={38} height={38} className="avatar-img" />
              <Image src="/images/hero-avatar-4.png" alt="Student avatar" width={38} height={38} className="avatar-img" />
              <Image src="/images/hero-avatar-5.png" alt="Student avatar" width={38} height={38} className="avatar-img" />
              <Image src="/images/hero-avatar-6.png" alt="Student avatar" width={38} height={38} className="avatar-img" />
              <Image src="/images/hero-avatar-7.png" alt="Student avatar" width={38} height={38} className="avatar-img" />
              <div className="avatar-badge">2K+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
