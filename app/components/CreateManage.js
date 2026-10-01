'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { HiCheck } from 'react-icons/hi2';

export default function CreateManage() {
  const checklistItems = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section className="create-manage" id="create-manage-section">
      <div className="container">
        {/* Left visual */}
        <div className="cm-visual">
          <Image
            src="/images/student-tablet.png"
            alt="Course creator"
            width={500}
            height={500}
            className="cm-visual-image"
          />

          {/* Total Revenue Card */}
          <div className="cm-float-card cm-card-revenue animate-float" id="cm-card-revenue">
            <div className="cm-card-revenue-label">Total Revenue</div>
            <div className="cm-card-revenue-sublabel">July 1-26</div>
            <div className="cm-card-revenue-value">$120.29</div>
            <div className="cm-card-revenue-bar">
              <div className="cm-card-revenue-fill" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Year to Date Card */}
          <div className="cm-float-card cm-card-ytd animate-float-delay" id="cm-card-ytd">
            <div className="cm-card-ytd-label">Year to Date</div>
            <div className="cm-card-ytd-sublabel">2023</div>
            <div className="cm-card-ytd-value">$1,200.38</div>
            <div className="cm-card-ytd-badge">
              <span>+6%</span>
            </div>
          </div>

          {/* Happy Students Card */}
          <div className="cm-float-card cm-card-students animate-float-slow" id="cm-card-students">
            <div className="hero-card-students-title">Happy Students</div>
            <div className="hero-card-students-rating">
              4.8 (280) <FaStar className="star" />
            </div>
            <div className="hero-card-avatars-row">
              <div className="hero-avatar-stack">
                <Image src="/images/avatar-sarah.jpg" alt="" width={32} height={32} className="avatar-img" />
                <Image src="/images/avatar-james.jpg" alt="" width={32} height={32} className="avatar-img" />
                <Image src="/images/avatar-alex.jpg" alt="" width={32} height={32} className="avatar-img" />
                <div className="avatar-badge">2K+</div>
              </div>
            </div>
          </div>

          {/* 3D lime spiral */}
          <div className="cm-spiral animate-float" aria-hidden="true">
            <Image src="/images/cta/spiral-lime.png" alt="" width={720} height={765} />
          </div>
        </div>

        {/* Right text */}
        <div className="cm-text">
          <h2 id="cm-title">Create & Manage Courses Easily.</h2>
          <p>
            <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>
          <div className="cm-checklist" id="cm-checklist">
            {checklistItems.map((item, idx) => (
              <div className="cm-checklist-item" key={idx}>
                <div className="cm-checklist-icon">
                  <HiCheck />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
