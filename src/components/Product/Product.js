import AddToCartBtn from "./AddToCartBtn";
import styles from "./style.module.css";

const ProductItem = (props) => {

    const { detail } = props;
    const { color } = detail;

    return (
        <div className={styles.product}>
            <div style={{backgroundColor: color}} className={styles.imageContainer}>
                <img src={detail.image} className={styles.image} alt="ProductImage" />
            </div>

            <h3 className={styles.title}>{detail.name}</h3>
            <p className={styles.description}>{detail.description}</p>
            <div className={styles.bottom}>
                <h3>${detail.price.toFixed(2)}</h3>

                <AddToCartBtn detail={detail} />
            </div>
        </div>
    );
}

export default ProductItem;
