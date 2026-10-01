'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const categories = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration',
  'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design',
  'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking',
];

const courses = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    image: '/images/course-figma-v2.jpg',
    author: 'purepixel studio',
    rating: 4.5,
    level: 'Beginner',
    lessons: 17,
    duration: '2 hours 18 mins',
    comments: 59,
    price: 25,
    enrolled: 26,
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    image: '/images/course-digital-asset-v2.jpg',
    author: 'purepixel studio',
    rating: 4.5,
    level: 'Beginner',
    lessons: 17,
    duration: '2 hours 18 mins',
    comments: 59,
    price: 25,
    enrolled: 26,
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    image: '/images/course-big-data-v2.jpg',
    author: 'purepixel studio',
    rating: 4.5,
    level: 'Beginner',
    lessons: 17,
    duration: '2 hours 18 mins',
    comments: 59,
    price: 25,
    enrolled: 26,
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    image: '/images/course-productivity-v2.jpg',
    author: 'purepixel studio',
    rating: 4.5,
    level: 'Beginner',
    lessons: 17,
    duration: '2 hours 18 mins',
    comments: 59,
    price: 25,
    enrolled: 26,
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    image: '/images/course-money-v2.jpg',
    author: 'purepixel studio',
    rating: 4.5,
    level: 'Beginner',
    lessons: 17,
    duration: '2 hours 18 mins',
    comments: 59,
    price: 25,
    enrolled: 26,
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    image: '/images/course-startup-v2.jpg',
    author: 'purepixel studio',
    rating: 4.5,
    level: 'Beginner',
    lessons: 17,
    duration: '2 hours 18 mins',
    comments: 59,
    price: 25,
    enrolled: 26,
  },
];

export default function DiscoverCourses() {
  return (
    <section className="discover" id="discover-section">
      <div className="container">
        {/* Header */}
        <div className="discover-header">
          <h2 className="discover-title" id="discover-title">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="discover-subtitle">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="discover-br" /> fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Tags */}
        <div className="discover-tags" id="discover-tags">
          {categories.map((cat, idx) => (
            <Fragment key={idx}>
              <button
                className={`discover-tag${idx === 0 ? ' active' : ''}`}
                id={`tag-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat}
              </button>
              {/* Desktop row breaks: 8 / 7 / rest */}
              {(idx === 7 || idx === 13) && <span className="discover-tags-break" aria-hidden="true" />}
            </Fragment>
          ))}
          <button className="discover-tag discover-tag-more">+ More</button>
        </div>

        {/* Course Cards */}
        <div className="courses-grid" id="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id} id={`course-${course.id}`}>
              <div className="course-card-image">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="course-card-badges">
                  <span className="course-card-badge lessons">{course.lessons} Lessons</span>
                  <span className="course-card-badge duration">{course.duration}</span>
                  <span className="course-card-badge comments">{course.comments} Comments</span>
                </div>
              </div>
              <div className="course-card-body">
                <div className="course-card-title-row">
                  <h3 className="course-card-title">{course.title}</h3>
                  <div className="course-card-rating">
                    {course.rating} <FaStar className="star" />
                  </div>
                </div>
                <div className="course-card-author">by {course.author}</div>
                <div className="course-card-meta">
                  <div className="course-card-level">
                    <svg className="course-card-level-icon" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                      <rect x="1" y="8" width="2.6" height="5" rx="0.8" />
                      <rect x="5.7" y="4.5" width="2.6" height="8.5" rx="0.8" />
                      <rect x="10.4" y="1" width="2.6" height="12" rx="0.8" />
                    </svg>
                    {course.level}
                  </div>
                  <div className="course-card-enrolled">
                    <Image src="/images/avatar-sarah.jpg" alt="" width={26} height={26} className="course-card-enrolled-avatar" />
                    <Image src="/images/avatar-james.jpg" alt="" width={26} height={26} className="course-card-enrolled-avatar" />
                    <Image src="/images/avatar-alex.jpg" alt="" width={26} height={26} className="course-card-enrolled-avatar" />
                    <Image src="/images/avatar-sarah.jpg" alt="" width={26} height={26} className="course-card-enrolled-avatar" />
                    <span className="course-card-enrolled-count">{course.enrolled}+</span>
                  </div>
                </div>
                <div className="course-card-price">
                  ${course.price}<span>/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
