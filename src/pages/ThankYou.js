export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 500);
  return (
    <div className="ThankYou">
      <img
        src="https://cdn.pixabay.com/photo/2017/12/08/23/44/thank-you-3006975_960_720.png"
        alt="dsds"
        width={250}
      />
      <h1>Thank you!</h1>
      <p>
        Your order has been received. Our specialists will contact with you
        shortly to confirm it.
      </p>
    </div>
  );
}
