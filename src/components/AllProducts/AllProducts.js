import data from "../../data/shoes.json";
import ProductItem from "../Product/Product";
const ProductsList = () => {

    // Shoes data
    const shoes = data.shoes;
    
    return(
        <>
            {shoes.map(item => (
                <ProductItem key={item.id} detail={item} />
            ))}
        </>
    );
}

export default ProductsList;