import '../Checkout/checkout.css';
import Phone from '../../img/phone_3.svg';

export function Checkout() {
  return (
    <section className="container_check">
      <div className="chec-img">
        <img src={Phone} alt="Phone - Check" />
      </div>
      <div className="data_check">
        <p>Checkout</p>
        <h1>When you done check out and get it delivered.</h1>
        <h4>
          When you done check out and get it <br />
          delivered with ease.
        </h4>
      </div>
    </section>
  );
}
