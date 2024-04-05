const Checkout = () => {
  return (
    <>
      <main>
        <div className="checkout">
          <section className="checkout-section">
            <div className="checkout-card">
              <h3>name</h3>
              <img src="" alt="bild av mat" />
              <p>100 KR</p>
              <button>Ta bort</button>
              <p className="centeredP">Antal</p>
            </div>
            <p>Summa</p>
          </section>
          <section className="Form-section">
            <div className="Form-checkout">
              <label> namn </label>
              <input type="text"></input>
              <label> Telefonnummer </label>
              <input type="text"></input>
              <label> Mejl </label>
              <input type="text"></input>
            </div>
            <button>Beställ</button>
          </section>
        </div>
      </main>
    </>
  );
};
export default Checkout;
