'use client';

import { 
  HiOutlinePaintBrush, 
  HiOutlineCodeBracket, 
  HiOutlineComputerDesktop, 
  HiOutlineBriefcase,
  HiOutlineMegaphone,
  HiOutlineCamera 
} from 'react-icons/hi2';

const categoryItems = [
  { name: 'Design', icon: <HiOutlinePaintBrush /> },
  { name: 'Development', icon: <HiOutlineCodeBracket /> },
  { name: 'IT & Software', icon: <HiOutlineComputerDesktop /> },
  { name: 'Business', icon: <HiOutlineBriefcase /> },
  { name: 'Marketing', icon: <HiOutlineMegaphone /> },
  { name: 'Photography', icon: <HiOutlineCamera /> },
];

export default function Categories() {
  return (
    <section className="categories" id="categories-section">
      <div className="container">
        <div className="categories-header">
          <h2 className="categories-title" id="categories-title">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="categories-subtitle">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans<br className="categories-br" /> various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="categories-grid" id="categories-grid">
          {categoryItems.map((cat, idx) => (
            <div className="category-card" key={idx} id={`category-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              <div className="category-card-icon">{cat.icon}</div>
              <div className="category-card-name">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
