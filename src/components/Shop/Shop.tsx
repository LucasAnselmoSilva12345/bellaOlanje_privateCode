import '../Shop/shop.css';
import Phone from '../../img/phone_2.svg';

export function Shop() {
  return (
    <section className="container_shop">
      <div className="info">
        <p>Explore varieties</p>
        <h1>Shop for your favorites meal as e dey hot.</h1>
        <h4>
          Shop for your favorite meals or drink sand enjoy while doing it.
        </h4>
      </div>
      <div className="img-shop">
        <img src={Phone} alt="Phone - Shop" />
      </div>
    </section>
  );
}
