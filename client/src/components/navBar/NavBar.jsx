
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import style from "./navbar.module.css";
import Hamburguer from "../../assets/svgComponents/hamburguer";
import Flecha from "../../assets/svgComponents/flecha";
import SearchBar from "../searchBar/SearchBar";
import { isOpenNavBar, 
  openList, 
  getWineType, 
  clearWineByName, 
  clearAllWine, 
  wineTypeBtn, 
  getWines, 
  inicioActive,
  clearWineType,
  getExperience,
  clearExperience,
  changeSearchWine,
  getTheme,
  getTitle,
  loginClose
} from "../../redux/action/index";


export default function NavBar() {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const currentLocale = i18n.languages[0];
  const [theme, setTheme] = useState("");
  const isOpen = useSelector((state) => state.isOpen);
  const isOpenList = useSelector((state) => state.isOpenList);


  const allWines = useSelector((state) => state.wines);
  const wineType = useSelector((state) => state.wineType);
  const btnWwineType = useSelector((state) => state.wineBtnType)
  const experiences = useSelector((state) => state.experience)
  const getMode = useSelector((state) => state.themeMode)

  const handleLoginOpen = () => {
    dispatch(loginClose(true))
  };

  const toggleTheme = () => {
      const body = document.body;
      if (getMode === "dark") {
        dispatch(getTheme('light'))
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        dispatch(getTheme('dark'))
        body.classList.remove("light");
        body.classList.add("dark");
    }
    verificaThema();
    dispatch(isOpenNavBar(false));
    dispatch(openList(false));
  };

  const verificaThema = () => {
    const dark = t("dark");
    const light = t("light");
    if (getMode === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };
  
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
    const valueType =  event.target.value;
    dispatch(clearWineByName());
    dispatch(clearAllWine());
    dispatch(clearExperience())
    dispatch(wineTypeBtn(valueType));
    dispatch(getWineType(valueType));
    dispatch(getTitle(`Vinos ${valueType}`))
  };

  const inicio = () => {
    dispatch(changeSearchWine(false));
    dispatch(clearWineType())
    dispatch(clearExperience())
    dispatch(clearWineByName());
    dispatch(inicioActive(true))
    dispatch(getWines())
    dispatch(getTitle('Recomendados'))
  }

  const experience = () => {
    dispatch(getExperience())
    dispatch(clearWineType())
    dispatch(clearAllWine());
    dispatch(clearWineByName());
    dispatch(getTitle('Experiencias'))
  }

  useEffect(() => {
    verificaThema()
    // eslint-disable-next-line
  }, [toggleTheme]);


  return (
    <nav className={isOpen ? style.menu_open : style.menu_close}>
      <div className={style.hamburguer_container_icon}>
        <h1 className={style.hamburguesa_h1}>Dionisio Wines</h1>
        <Hamburguer className={style.hamburguer_icon} onClick={showMenu} />
      </div>

      <div className={style.list_container}>
        <ul className={style.navbar_ul} id="my_navbar_collapse">
          <li className={ allWines.length > 0 ? style.btn_li_activo : style.btn_li}>
            <button onClick={inicio} >{t("nav.0")}</button>
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
             <li className={"tinto" == btnWwineType && wineType.length > 0 ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="tinto">
                  {t("nav.2")}
                </button>
              </li>

              <li  className={"blanco" == btnWwineType && wineType.length > 0 ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="blanco">
                  {t("nav.3")}
                </button>
              </li>
              <li  className={"rosado" == btnWwineType && wineType.length > 0 ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="rosado">
                {t("nav.4")}</button>
              </li>

              <li  className={"espumante" == btnWwineType && wineType.length > 0 ? style.btn_li_activo : style.btn_li}>
                <button onClick={winrType} value="espumante">
                {t("nav.5")}</button>
              </li>
            </ul>
          </li>
          <li className={ experiences.length > 0 ? style.btn_li_activo : style.btn_li}>
            <button onClick={experience} value="">{t("nav.6")}</button>
          </li>
          <li className={style.nav_li}>
            <button onClick={handleLoginOpen}>{t("nav.7")}</button>
          </li>
        </ul>
        <div className={isOpen ? style.card : style.menu_close_bottom}>
          <button onClick={toggleTheme}>{theme}</button>
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
