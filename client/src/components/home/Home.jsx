// import style from "./home.module.css";
import Card from "../card/Card";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import { getWines, changeSearchWine, cleanStateByName } from "../../redux/action/index";
import Loading from '../../util/Loading'
import style from './home.module.css'

export default function Home() {
  const dispatch = useDispatch();
  const allWines = useSelector((state) => state.wines);
  const wineByName = useSelector((state) => state.wineByName);
  const searchWine = useSelector((state) => state.searchWine);
  const wineType = useSelector((state) => state.wineType);
  const isOpen = useSelector((state) => state.isOpen);
  const navInicioActive = useSelector((state) => state.navInicio);
  // const btnWwineType = useSelector((state) => state.wineTypeBtn)
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [randomWines, setRandomWines] = useState([]);
  

  let notFound = false;
  if (searchWine && wineByName.length === 0) {
    notFound = true;
  }

  let winesRender = [];
  if (searchWine) {
    winesRender = wineByName;
  } else {
    winesRender = allWines;
  }

  

  useEffect(() => {
    if (!allWines.length) dispatch(getWines());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(cleanStateByName([]))
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
) : (
  <Loading />
)}
    </div>
  );
}
