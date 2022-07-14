import Link from "next/link";
import style from "styles/Card.module.scss";

export default function CardShoe({ id, brand, image, name, price }) {
  return (
    <Link href={`/shoe/${id}`}>
      <div className={style.shoe}>
        <div className={style.wrap}>
          <div className={style.image}>
            <img src={image} alt={`${brand} ${name}`} />
          </div>
          <div className={style.title}>
            <h5>{brand}</h5>
            <p className={style.name}>{name}</p>
            <p className={style.price}>$ {price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
