import heroBg from "../../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="hero bg-cover bg-center text-white py-32 px-4"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-light-mint">Resource Hub</span>
        </h1>
        <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
          Everything you need to feel better, in one place.
        </p>
      </div>
    </section>
  );
}