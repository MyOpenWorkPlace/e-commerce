import models from "../assets/images/models.png";

function Home() {
  return (
    <>
      <main>
        <section className="bg-custom-gray">
          <div>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button>Shop Now</button>
            <ul>
              <li>
                <h3>200+</h3>
                <p>International Brands</p>
              </li>
              <li>
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
              </li>
              <li>
                <h3>30,000+</h3>
                <p>Happy Customers</p>
              </li>
            </ul>
            <img src={models} alt="" />
          </div>
          <div></div>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default Home;
