import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import styles from "./style.module.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const CartList = () => {

    const itemList = useSelector(state => state.cartItem.itemList)

    return (
        <div className={styles.cartList}>
            {itemList.length === 0 && <p>Your cart is empty.</p>}

            <TransitionGroup>
                {itemList.length !== 0 && itemList.map(item => (
                    <CSSTransition key={item.id} classNames={{
                        enter: styles.cartItemEnter,
                        enterActive: styles.cartItemEnterActive,
                        exit: styles.cartItemExit,
                        exitActive: styles.cartItemExitActive,
                    }} timeout={500}
                    unmountOnExit>
                        <CartItem detail={item} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default CartList;

// {itemList.length !== 0 && itemList.map(item => (
//     <CartItem key={item.id} detail={item} />
// ))}