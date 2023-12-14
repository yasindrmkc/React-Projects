import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <span>Bu sezonda en iyisini bul</span>
        <h2>Herkese özel koleksiyon</h2>
        <a href="#">Şimdi Keşfet</a>
      </div>
      <div className="hero-right">
        <img src="/images/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
