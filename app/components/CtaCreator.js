'use client';

export default function CtaCreator() {
  const shapes = [
    { name: 'spiral-lime', src: 'spiral-lime', anim: 'animate-float-slow' },
    { name: 'spiral-white', src: 'spiral-white', anim: 'animate-float' },
    { name: 'cone-white', src: 'cone-white', anim: 'animate-float-delay' },
    { name: 'torus-lime', src: 'torus-lime', anim: 'animate-float-slow' },
    { name: 'cone-lime', src: 'cone-lime', anim: 'animate-float' },
    { name: 'cylinder-white', src: 'cylinder-white', anim: 'animate-float-delay' },
    { name: 'spiral-lime-bottom', src: 'spiral-lime-bottom', anim: 'animate-float-slow' },
  ];

  return (
    <section className="cta-creator" id="cta-creator-section">
      {/* 3D decorations */}
      <div className="cta-shapes" aria-hidden="true">
        {shapes.map((s) => (
          <div className={`cta-shape cta-shape-${s.name} ${s.anim}`} key={s.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/cta/${s.src}.png`} alt="" />
          </div>
        ))}
      </div>

      <div className="cta-creator-content container">
        <h2 id="cta-title">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p>
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button className="cta-creator-btn" id="cta-join-btn">Join as Creator</button>
      </div>
    </section>
  );
}
