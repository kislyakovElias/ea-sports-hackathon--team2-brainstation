import "./Footer.scss";
import footerImg from "../../assets/imgs/footer.png";

function Footer() {
  return (
    <div className="footer">
      <img src={footerImg} alt="" className="footer__img"></img>
    </div>
  );
}
export default Footer;
