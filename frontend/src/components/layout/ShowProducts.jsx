import { NavLink } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import Card from './Card';

const ShowProducts = ({ products = [], imageClass = '' }) => {
    return (
        <>
            {products.map((item) => (
                <NavLink key={item._id} to={`/product/${item._id}`} className="flex flex-col items-center">
                    <Card
                        image={item.image}
                        name={item.name}
                        imageClass={imageClass}
                        showSale={!!item.oldPrice}
                        textButton="Explore Mug"
                    />

                    <h3 className="mt-2.5 mb-1.25">{item.name}</h3>

                    <div
                        className="flex items-center gap-2 text-gray-500 cursor-text select-text w-full justify-center"
                        onClick={(e) => e.preventDefault()}
                    >
                        <span className={`${item.oldPrice ? 'text-xl text-coffee' : ''}`}>
                            {formatPrice(item.price)}
                        </span>

                        {item.oldPrice && <span className="line-through text-sm">{formatPrice(item.oldPrice)}</span>}
                    </div>
                </NavLink>
            ))}
        </>
    );
};

export default ShowProducts;
