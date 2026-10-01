'use client';

import Image from 'next/image';

export default function ProfessionalGrowth() {
  return (
    <section className="professional-growth" id="professional-growth-section">
      <div className="container">
        {/* Left text block */}
        <div className="pg-text">
          <h2 id="pg-title">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p>
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <div className="pg-stats" id="pg-stats">
            <div>
              <div className="pg-stat-value">12K</div>
              <div className="pg-stat-label">Students</div>
            </div>
            <div>
              <div className="pg-stat-value">70+</div>
              <div className="pg-stat-label">Courses</div>
            </div>
            <div>
              <div className="pg-stat-value">16</div>
              <div className="pg-stat-label">Creators</div>
            </div>
          </div>
        </div>

        {/* Right visual block */}
        <div className="pg-visual">
          {/* 3D lime spiral */}
          <div className="pg-spiral animate-float" aria-hidden="true">
            <Image src="/images/cta/spiral-lime.png" alt="" width={720} height={765} />
          </div>

          {/* Course card tucked behind the character */}
          <div className="course-card pg-course-card" aria-hidden="true">
            <div className="course-card-image">
              <Image
                src="/images/course-figma-v2.jpg"
                alt=""
                width={400}
                height={200}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="course-card-badges">
                <span className="course-card-badge">17 Lessons</span>
                <span className="course-card-badge">2 hours 18 mins</span>
                <span className="course-card-badge">59 Comments</span>
              </div>
            </div>
            <div className="course-card-body">
              <div className="course-card-title-row">
                <h3 className="course-card-title">Learn Figma from Basic</h3>
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
              </div>
              <div className="course-card-price">
                $25<span>/lifetime</span>
              </div>
            </div>
          </div>

          <Image
            src="/images/creator-laptop.png"
            alt="Student learning on laptop"
            width={516}
            height={483}
            className="pg-visual-image"
          />

          {/* Learning progress float card */}
          <div className="pg-float-card pg-card-progress animate-float-delay">
            <div className="hero-card-progress-label">Learning Progress</div>
            <div className="hero-card-progress-value" style={{ fontSize: '32px' }}>55%</div>
            <div className="hero-card-progress-track" style={{ width: '120px' }}>
              <div className="hero-card-progress-bar" style={{ width: '55%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
