// eslint-disable-next-line
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import style from "./navbar.module.css";
import Hamburguer from "../../assets/svgComponents/hamburguer";
import Flecha from "../../assets/svgComponents/flecha";
import SearchBar from "../searchBar/SearchBar";
import { isOpenNavBar, openList, getWineType, clearWineByName, inicioNavBar, clearAllWine } from "../../redux/action/index";
// import { getWines } from "../../redux/action/index";

export default function NavBar() {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const currentLocale = i18n.languages[0];
  const [theme, setTheme] = useState("");
  const isOpen = useSelector((state) => state.isOpen);
  const isOpenList = useSelector((state) => state.isOpenList);

  const [vinos, setVinos] = useState(true);
  const [tintos, setTintos] = useState(true);
  const [blancos, setBlancos] = useState(true);
  const [rosados, setRosados] = useState(true);
  const [espumantes, setEspumantes] = useState(true);
  const allWines = useSelector((state) => state.wines);
  const wineType = useSelector((state) => state.wineType);

  let primerTipoDeVino = null; 
if (wineType.length > 0) {
  primerTipoDeVino = wineType[0].color_type;
}



  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
    body.classList.contains("dark-theme") ? "dark" : "ligth";
    verificaThema();
    dispatch(isOpenNavBar(false));
    dispatch(openList(false));
  };

  const verificaThema = () => {
    const body = document.body;
    const dark = t("dark");
    const light = t("light");
    if (body.classList.contains("dark-theme")) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  const menuActivos = () => {
    if(allWines){
      setInicio(true)
    }else{
      setInicio(false)
    }
  }

  const cambiarTexto = () => {
    if (currentLocale === "es") {
      i18n.changeLanguage("en");
      verificaThema();
    } else i18n.changeLanguage("es");
    verificaThema();
  };

  const showMenu = () => {
    if (isOpen) {
      dispatch(isOpenNavBar(false));
      dispatch(openList(false));
    } else dispatch(isOpenNavBar(true));
  };

  const showMenuList = () => {
    if (isOpenList) {
      dispatch(openList(false));
    } else dispatch(openList(true));
  };

  const winrType = () => {
    const valueType = event.target.value;
    dispatch(getWineType(valueType));
    dispatch(clearWineByName())
    dispatch(inicioNavBar(true))
    dispatch(clearAllWine())
  };

  
  // const activeInicio = () => {
  // dispatch(inicioNavBar(true))
  // }

  // const loadRandomWines = () => {
  //   dispatch(getWines());
  // }
  // onClick={loadRandomWines}

  return (
    <nav className={isOpen ? style.menu_open : style.menu_close}>
      <div className={style.hamburguer_container_icon}>
        <h1 className={style.hamburguesa_h1}>Dionisio Wines</h1>
        <Hamburguer className={style.hamburguer_icon} onClick={showMenu} />
      </div>

      <div className={style.list_container}>
        <ul className={style.navbar_ul} id="my_navbar_collapse">
          <li className={ allWines.length > 0 ? style.btn_li_activo : style.btn_li}>
            <button>{t("nav.0")}</button>
          </li>
          <li className={ isOpenList ? style.btn_li_activo : style.btn_li}>
            <button className={style.btn_lista} onClick={showMenuList}>
              {t("nav.1")}
              <Flecha
                className={isOpenList ? style.flecha_open : style.flecha}
              />
            </button>
            <ul
              className={
                isOpenList ? style.dropdown_content : style.dropdown_close
              }
            >
              <li className={primerTipoDeVino === "Tinto" ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="tinto">
                  {t("nav.2")}
                </button>
              </li>

              <li  className={primerTipoDeVino === "Blanco" ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="blanco">
                  {t("nav.3")}
                </button>
              </li>
              <li  className={primerTipoDeVino === "Rosado" ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="rosado">
                {t("nav.4")}</button>
              </li>

              <li  className={primerTipoDeVino === "Espumante" ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="espumante">
                {t("nav.5")}</button>
              </li>
            </ul>
          </li>
          <li className={style.nav_li}>
            <button>{t("nav.6")}</button>
          </li>
          <li className={style.nav_li}>
            <button>{t("nav.7")}</button>
          </li>
        </ul>
        <div className={isOpen ? style.card : style.menu_close_bottom}>
          <button onClick={toggleTheme}>{theme ? theme : "Modo light"}</button>
          <button onClick={cambiarTexto}>{t("leng")}</button>
          <div
            className={
              isOpenList ? style.container_search_open : style.container_search
            }
          >
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
