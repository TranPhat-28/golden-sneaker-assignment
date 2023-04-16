import styles from "./style.module.css";
import Nike from "../../assets/nike.png";
import ProductsList from "../AllProducts/AllProducts";
import CartList from "../CartList/CartList";
import Total from "../Total/Total";

const Card = (props) => {

    const { cardTitle } = props;

    return (
        <div className={styles.card}>
            <div className={styles.blob} />

            <div className={styles.cardHeader}>
                <img src={Nike} className={styles.nike} alt="Nike"></img>
                <h2>
                    {cardTitle}
                    { cardTitle === 'Your cart' && <Total />}
                </h2>
            </div>

            <div className={styles.cardBody}>
                { cardTitle === 'Our Products' && <ProductsList />}
                { cardTitle === 'Your cart' && <CartList />}
            </div>
        </div>
    );
}

export default Card;