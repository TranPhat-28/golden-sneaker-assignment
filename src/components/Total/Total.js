import { useSelector } from "react-redux";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const Total = () => {

    const cartItem = useSelector(state => state.cartItem.itemList);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let temp = 0;

        cartItem.forEach(item => {
            temp += item.count * item.price;
        })

        setTotal(temp.toFixed(2));
    }, [cartItem]);

    return(
        <span className={styles.total}>${total}</span>
    );
}

export default Total;