import style from "./footer.module.css";
import WhatsApp from "../../assets/svgComponents/whatsapp";

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/541131158866", "_blank");
  };

  const handlePorfolioAppClick = () => {
    window.open("https://wa.me/541131158866", "_blank");
  };
  return (
    <footer className={style.container_footer}>
        <div className={style.container}>
            <div className={style.footer_content}>
                <h3 className={style.contac_h3}>Contact Us</h3>
                <p>victorpintowake@gmail.com</p>
                <p className={style.container_whatsapp}>WhatsApp:<span onClick={handleWhatsAppClick}><WhatsApp className={style.whatsapp_svg} /></span></p>
                <p>Buenos Aires, Argentina</p>
            </div>
            <div className={style.footer_content}>
                <h3>Quick Links</h3>
                 <ul className={style.list}>
                    <li><button onClick={handlePorfolioAppClick} >Porfolio</button></li>

                 </ul>
            </div>
            <div className={style.footer_content}>
                <h3>Follow Us</h3>
                <ul className={style.social_icons}>
                 <li><a href=""><i className={style.fa_facebook}></i></a></li>
                 <li><a href=""><i className={style.fa_twitter}></i></a></li>
                 <li><a href=""><i className={style.fa_instagram}></i></a></li>
                 <li><a href=""><i className={style.fa_linkedin}></i></a></li>
                </ul>
                </div>
        </div>
        <div className={style.bottom_bar}>
            <p>Copyright &copy; 2023 All Rights Reserved by<span> VictorPinto</span>.</p>
        </div>
    </footer>
  );
}
