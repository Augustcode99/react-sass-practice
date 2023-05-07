import footerStyle from "../scss/footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <p className={footerStyle.text}>By August {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
