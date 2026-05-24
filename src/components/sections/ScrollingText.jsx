function ScrollingText() {
  const text = "DISCIPLINE / POWER / CONDITIONING / TRANSFORMATION / VANTA FITNESS / ";
  return (
    <section className="overflow-hidden border-y border-white/10 bg-vanta-lime py-4 text-vanta-black">
      <div className="marquee-track flex w-max">
        {[...Array(2)].map((_, index) => (
          <p key={index} className="font-display whitespace-nowrap text-5xl uppercase leading-none sm:text-7xl">
            {text.repeat(4)}
          </p>
        ))}
      </div>
    </section>
  );
}

export default ScrollingText;
