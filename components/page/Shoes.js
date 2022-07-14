import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoes, shoesSelector } from "store/shoesSlice";

import Card from "components/CardShoe";
import styles from "styles/Common.module.scss";

export default function Shoes() {
  const dispatch = useDispatch();
  const { shoes, loading, error } = useSelector(shoesSelector);

  useEffect(() => {
    dispatch(fetchShoes());
  }, [dispatch]);

  return (
    <>
      {loading && <p>loading</p>}
      {error && <p>error</p>}

      <div className={styles.container}>
        <h1 className={styles.title}>List Product</h1>

        <div className={styles.containerProduct}>
          {shoes.map((e) => (
              <Card
              id={e.id}
              key={e.id}
                brand={e.brand}
                name={e.name}
                image={e.imageURL}
                price={e.price}
              />
          ))}
        </div>
      </div>
    </>
  );
}
