import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <h2>Contact</h2>
      <address>
        ISIMA<br />
        Campus Universitaire BP 05<br />
        Mahdia, Tunisie
      </address>
      <p><strong>Email :</strong> <a href="mailto:isima@isima.rnu.tn">isima@isima.rnu.tn</a></p>
      <p><strong>Téléphone :</strong> <a href="tel:+21673683100">+216 73 683 100</a></p>
      <p><strong>Fax :</strong> +216 73 683 120</p>
      <a href="https://isima.rnu.tn/fr">Site web de l'ISIMA</a>
    </main>
  );
}

export default Contact;
