// import style from "./home.module.css";
import Card from "../card/Card";
import { useDispatch, useSelector,  } from "react-redux";
import { useEffect } from "react";
import { getWines, changeSearchWine,cleanStateByName } from "../../redux/action/index";

export default function Home() {
  const dispatch = useDispatch();
  const allWines = useSelector((state) => state.wines);
  const wineByName = useSelector((state) => state.wineByName);
  const searchWine = useSelector((state) => state.searchWine);
  const isOpen = useSelector((state) => state.isOpen);

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

  return (
    <div>
      {winesRender?.map((w) => (
        <div key={w.id}>
          <Card
            name={w.name}
            varietal={w.varietal}
            image={w.image}
            winery={w.winery}
            price={`$${w.price}`}
          />
        </div>
      ))}
    </div>
  );
}
