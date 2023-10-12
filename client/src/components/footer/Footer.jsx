import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container_footer}>
      <div className={style.container}>
        <div lassName={style.row}>
          <div className={style.col}>
            <h6>About</h6>
            <p className={style.text_justify}>VictorPinto <i>CONTENIDO </i> Texto.</p>
          </div>

          <div className={style.col}>
            <h6>Tecnologis</h6>
            <ul className={style.footer_links}>
              <li><a href="#">React</a></li>
              <li><a href="#">Node</a></li>
              <li><a href="#">Redux</a></li>
              <li><a href="#">MongoDb</a></li>
              <li><a href="#">Sequelize</a></li>
            </ul>
          </div>

          <div className={style.col}>
            <h6>Quick Links</h6>
            <ul className={style.footer_links}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className={style.container}>
        <div className={style.row}>
          <div cclassName={style.col}>
            <p className={style.copyright_text}>Copyright &copy; 2023 All Rights Reserved by 
         <a href="#"> VictorPinto</a>.
            </p>
          </div>

          <div className={style.col}>
            <ul className={style.social_icons}>
              <li><a className={style.facebook} href="#"><i className={style.fa_facebook}></i></a></li>
              <li><a className={style.twitter} href="#"><i className={style.fa_twitter}></i></a></li>
              <li><a className={style.dribbble} href="#"><i className={style.fa_dribbble}></i></a></li>
              <li><a className={style.linkedin} href="#"><i className={style.fa_linkedin}></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  );
}
