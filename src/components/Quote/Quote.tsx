import '../Quote/quote.css';

export function Quote() {
  return (
    <div>
      <div className="container_quote">
        <h1>Download the app now.</h1>
        <p>
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="btn">
          <a href="/" className="btn-play">
            PlayStore
          </a>
          <a href="/" className="btn-app">
            App Store
          </a>
        </div>
      </div>
    </div>
  );
}
