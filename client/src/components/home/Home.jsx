// import style from "./home.module.css";
import Card from "../card/Card";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { getWines, changeSearchWine, clearWineByName, getTheme } from "../../redux/action/index";
import Loading from '../../util/Loading'
import style from './home.module.css'
import CardExp from "../experience/CardExp"
import Login from '../loginAndRegister/Login.jsx'

export default function Home() {
  const dispatch = useDispatch();
  const allWines = useSelector((state) => state.wines);
  const wineByName = useSelector((state) => state.wineByName);
  const searchWine = useSelector((state) => state.searchWine);
  const wineType = useSelector((state) => state.wineType);
  const experiencies = useSelector((state) => state.experience);
  const title = useSelector((state) => state.title);
  const navInicioActive = useSelector((state) => state.navInicio);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [randomWines, setRandomWines] = useState([]);
  const closeLogin = useSelector((state) => state.closeLogin)

  // let notFound = false;
  // if (searchWine && wineByName.length === 0) {
  //   notFound = true;
  // }

let winesRender = useMemo(() => {
  if (searchWine) {
    return wineByName;
  } else {
    return allWines;
  }
}, [searchWine, wineByName, allWines]);

  useEffect(() => {
    if (!allWines.length) dispatch(getWines());
    const body = document.body;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      body.classList.add("dark");
      dispatch(getTheme('dark'))  
    } else {
      body.classList.add("light");
      dispatch(getTheme('light'))  
    }
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    return () => {
      dispatch(clearWineByName())
      dispatch(changeSearchWine(false));
      
    };
  }, [dispatch]);


  useEffect(() => {
    const shuffledWines = [...winesRender].sort(() => Math.random() - 0.5);
    const randomWinesSubset = shuffledWines.slice(0, 8);
    setRandomWines(randomWinesSubset);
    let loadedImages = 0;
    const totalImages = randomWinesSubset.length;

    const imageLoadHandler = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    winesRender.forEach((w) => {
      const image = new Image();
      image.src = w.image;
      image.onload = imageLoadHandler;
      image.onerror = imageLoadHandler;
    });
  }, [winesRender, navInicioActive]);
  

  return (
    <div className={style.container_wines}>
  
    <div className={style.container_h2}>
    {closeLogin&& (
        <Login />
      )}
    <h2>
    {title} 
    
    </h2></div>
    
    <div className={style.box_wines}>
      {imagesLoaded ? (
        wineType && wineType.length > 0 && wineByName.length < 1 ? (
          wineType.map((w) => (
            <div key={w.id}>
              <Card
                className={style.card_wines}
                name={w.name}
                varietal={w.varietal}
                image={w.image}
                winery={w.winery}
                price={`$${w.price}`}
              />
            </div>
          ))
        ) : (
          experiencies.length > 0 && randomWines.length < 1 ? (
            experiencies.map((e) => (
              <div key={e.id}>
                <CardExp
                  name={e.name}
                  image={e.image}
                />
              </div>
            ))
          ) : (
            randomWines?.map((w) => (
              <div key={w.id}>
                <Card
                  className={style.card_wines}
                  name={w.name}
                  varietal={w.varietal}
                  image={w.image}
                  winery={w.winery}
                  price={`$${w.price}`}
                />
              </div>
            ))
          )
        )
      ) : (
        <Loading />
      )}
    </div>
    </div>
  );
}
