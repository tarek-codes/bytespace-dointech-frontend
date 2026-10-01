'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/images/avatar-sarah.jpg',
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/images/avatar-james.jpg',
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/images/avatar-alex.jpg',
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title" id="testimonials-title">
            Discover What Our Community Is Saying
          </h2>
          <p className="testimonials-desc">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Grid */}
        <div className="testimonials-grid" id="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx} id={`testimonial-${idx}`}>
              <div className="testimonial-card-header">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
              <blockquote>{t.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
