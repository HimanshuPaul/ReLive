import heroBg from "../../assets/resource-hero-bg.jpeg";

export default function Hero() {
  return (
    <section
      className="hero bg-cover bg-center text-white py-60 px-4"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-light-mint">Resource Hub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Everything you need to feel better, in one place.
        </p>
      </div>
    </section>
  );
}
