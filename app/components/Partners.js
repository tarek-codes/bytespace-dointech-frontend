export default function Partners() {
  const logos = [1, 2, 3, 4, 5];
  // Eight identical sets (two equal halves) so the track loops seamlessly at
  // -50% and still covers very wide screens without an empty gap on the right
  const track = Array.from({ length: 8 }, () => logos).flat();

  return (
    <section className="partners" id="partners-section">
      <div className="partners-marquee">
        <div className="partners-track">
          {track.map((n, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="partner-logo"
              key={idx}
              src={`/images/partners/logo-${n}.png`}
              alt={idx < logos.length ? 'Logoipsum' : ''}
              aria-hidden={idx >= logos.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
