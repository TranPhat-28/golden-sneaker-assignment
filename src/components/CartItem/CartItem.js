import { useDispatch } from "react-redux";
import TrashCan from "../../assets/trash.png"
import styles from "./style.module.css";
import { addItemCount, removeItem } from "../../redux/features/cartItemSlice";

const CartItem = (props) => {

    const {detail} = props;
    const dispatch = useDispatch();

    // Handle subtract item count
    const handleSubtract = () => {
        if (detail.count !== 1){
            dispatch(addItemCount({id: detail.id, value: -1}))
        }
        else{
            dispatch(removeItem(detail.id))
        }
    }

    return (
        <div className={styles.itemContainer}>
            {/* For displaying the product image */}
            <div className={styles.left}>
                <div className={styles.circle} style={{backgroundColor: detail.color}}></div>
                <img src={detail.image} className={styles.image} alt="ProductImage" />
            </div>

            {/* Product information */}
            <div className={styles.right}>
                <h5>{detail.name}</h5>
                <h3>${detail.price}</h3>
                <div className={styles.rightBottom}>

                    {/* Display add button, subtract button and count */}
                    <div className={styles.countContainer}>
                        <div className={styles.countButton}
                            onClick={handleSubtract}>-</div>
                        <div>{detail.count}</div>
                        <div className={styles.countButton}
                            onClick={() => dispatch(addItemCount({id: detail.id, value: 1}))}>+</div>
                    </div>

                    {/* The Remove from Cart button */}
                    <div className={styles.deleteButton} onClick={() => dispatch(removeItem(detail.id))}>
                        <img src={TrashCan} alt="Delete" className={styles.icon}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;