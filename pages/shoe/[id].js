import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoeID, shoesSelector } from "store/shoesSlice";

export default function Shoes() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { shoe, loading, error } = useSelector(shoesSelector);

  useEffect(() => {
    dispatch(fetchShoeID(id));
  }, [dispatch]);

  return (
    <>
      {error && <p>error</p>}

      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <img src={shoe.imageURL} alt="" />
          <p>{shoe.name}</p>
          <p>{shoe.brand}</p>
          <p>{shoe.price}</p>
        </>
      )}
    </>
  );
}
