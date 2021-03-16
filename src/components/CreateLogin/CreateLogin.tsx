import '../CreateLogin/createlogin.css';
import Phone from '../../img/phone_1.svg';

export function CreateLogin() {
  return (
    <section className="container">
      <div className="phone-img">
        <img src={Phone} alt="Phone" />
      </div>
      <div className="data">
        <p>Create an account</p>
        <h1>Create/login to an existing account to get started</h1>
        <h4>
          An account is created with your email
          <br /> and a desired password
        </h4>
      </div>
    </section>
  );
}
