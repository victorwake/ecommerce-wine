import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container_footer}>
      <div className={style.container}>
        <div lassName={style.row}>
          <div className={style.col}>
            <h6>About</h6>
            <p className={style.text_justify}>Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className={style.col}>
            <h6>Categories</h6>
            <ul className={style.footer_links}>
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className={style.col}>
            <h6>Quick Links</h6>
            <ul className={style.footer_links}>
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className={style.container}>
        <div className={style.row}>
          <div cclassName={style.col}>
            <p className={style.copyright_text}>Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
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
