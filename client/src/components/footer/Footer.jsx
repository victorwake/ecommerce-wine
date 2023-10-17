import style from "./footer.module.css";
import { useSelector } from "react-redux";
import WhatsApp from "../../assets/svgComponents/whatsapp";
import GitHub from "../../assets/svgComponents/gitHub";
import GitHubWhite from "../../assets/svgComponents/gitHubWhite";
import Linkedin from "../../assets/svgComponents/linkedin";

export default function Footer() {
  const getMode = useSelector((state) => state.themeMode);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/541131158866", "_blank");
  };

  const handleLinkedinAppClick = () => {
    window.open(
      "https://www.linkedin.com/in/victor-pinto-fullstack/",
      "_blank"
    );
  };

  const handlePorfolioAppClick = () => {
    window.open("https://porfolio-victor.vercel.app/", "_blank");
  };

  const handleGitHubAppClick = () => {
    window.open("https://github.com/victorwake", "_blank");
  };
  return (
    <footer className={style.container_footer}>
      <div className={style.container}>
        <div className={style.footer_content}>
          <h3 className={style.contac_h3}>Contact Us</h3>
          <p>victorpintowake@gmail.com</p>
          <p className={style.container_whatsapp}>
            WhatsApp:
            <span onClick={handleWhatsAppClick}>
              <WhatsApp className={style.whatsapp_svg} />
            </span>
          </p>
          <p>Buenos Aires, Argentina</p>
        </div>
        <div className={style.footer_content}>
          <h3 className={style.quick_list_h3}>Quick Links</h3>
          <button className={style.button_quick} onClick={handlePorfolioAppClick}>Porfolio</button>
        </div>
        <div className={style.footer_content}>
          <h3 className={style.fallow_h3}>Follow Us</h3>
          <ul className={style.social_icons}>
            <li>
              <a onClick={handleGitHubAppClick}>
                {getMode === "light" ? <GitHub /> : <GitHubWhite />}
              </a>
            </li>
            <li>
              <a onClick={handleLinkedinAppClick}>
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.bottom_bar}>
        <p>
          Copyright &copy; 2023 All Rights Reserved by<span> VictorPinto</span>.
        </p>
      </div>
    </footer>
  );
}
