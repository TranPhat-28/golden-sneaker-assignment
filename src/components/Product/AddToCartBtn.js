import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { addItem } from "../../redux/features/cartItemSlice";
import CheckMark from "../../assets/check.png";

const AddToCartBtn = (props) => {
    // ID
    const { detail } = props;

    // State
    const itemList = useSelector(state => state.cartItem.itemList)
    // Check if the item has already been in the cart
    const existed = itemList.some(item => item.id === detail.id);

    // Redux dispatch
    const dispatch = useDispatch();


    return (
        <>
            {
                !existed && <div className={styles.buttonEnabled}
                    onClick={() => dispatch(addItem({ ...detail, count: 1 }))} >ADD TO CART</div>
            }

            {
                existed && <div className={styles.buttonDisabled} >
                    <img src={CheckMark} alt="Check"></img>
                </div>
            }
        </>
    );
}

export default AddToCartBtn;