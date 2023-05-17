export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
  return (
    <div className="ThankYou">
      <h1>Thank you!</h1>
      <p>Your order has been received. Our specialists will contact with you shortly to confirm it.</p>
      <img src="https://www.funimada.com/assets/images/cards/big/thank-you-2.gif" alt="dsds" width={250} />
    </div>
  );
}