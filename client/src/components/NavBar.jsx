// eslint-disable-next-line
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./navbar.module.css";
import Hamburguer from "../assets/svgComponents/hamburguer";

export default function NavBar() {
  const [t, i18n] = useTranslation("global");
  const currentLocale = i18n.languages[0];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false)
  const [theme, setTheme] = useState("")

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
    body.classList.contains("dark-theme") ? "dark" : "ligth";
    verificaThema()
  };

  const verificaThema = () =>{
    const body = document.body;
    const dark = t('dark')
    const light = t('light')
    if (body.classList.contains("dark-theme")){
      setTheme(light)
    }else{
      setTheme(dark)
    }
  }

  const cambiarTexto = () => {
    if (currentLocale === "es") {
      i18n.changeLanguage("en");
      verificaThema()
    } else i18n.changeLanguage("es");
    verificaThema()
  };

  const showMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsOpenList(false);
    } else 
    setIsOpen(true);
  };

  const showMenuList = () => {
    if (isOpenList) {
      setIsOpenList(false);
    } else setIsOpenList(true);
  };


  return (
    <nav className={isOpen ? style.menu_open : style.menu_close}>
      <div className={style.hamburguer_container_icon}>
        <h1 className={style.hamburguesa_h1}>Dionisio Wines</h1>
        <Hamburguer className={style.hamburguer_icon} onClick={showMenu} />
      </div>

      <div className={style.list_container}>
        <ul className={style.navbar_ul} id="my_navbar_collapse">
          <li className={style.nav_li}>
            <button >{t("nav.0")}</button>
          </li>
          <li className={style.nav_li}>
            <button onClick={showMenuList}>{t("nav.1")}</button>
            <ul className={isOpenList ? style.dropdown_content : style.dropdown_close}>
              <li  className={style.nav_li}>
                <button >{t("nav.2")}</button>
              </li>

              <li className={style.nav_li}>
                <button >{t("nav.3")}</button>
              </li>
              <li className={style.nav_li}>
                <button >{t("nav.4")}</button>
              </li>
              
              <li className={style.nav_li}>
                <button >{t("nav.5")}</button>
              </li>
            </ul>
          </li>
          <li className={style.nav_li}>
            <button >{t("nav.6")}</button>
          </li>
          <li className={style.nav_li}>
            <button >{t("nav.7")}</button>
          </li>
        </ul>
        <div className={isOpen ? style.card : style.menu_close_bottom}>
          <button onClick={toggleTheme}>{theme? theme : "Modo light"}</button>
          <button onClick={cambiarTexto}>{t("leng")}</button>
        </div>
      </div>
    </nav>
  );
}
