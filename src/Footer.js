const Footer = () => {
  const myDescription = "My passion is to become a professional CODER...";
  const time = new Date().getFullYear();
  return (
    <main>
      <h3>{myDescription}</h3>
      <p>Copyright &copy; {time}</p>
    </main>
  );
};

export default Footer;
