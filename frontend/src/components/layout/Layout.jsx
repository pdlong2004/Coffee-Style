import Header from './Header';
import CartSidebar from '../cart/CartSidebar';
import { useCartSidebar } from '../../contexts/CartSidebarContext';

export default function Layout({ children }) {
    const { isOpen, closeCart } = useCartSidebar();

    return (
        <div className="overflow-x-hidden max-w-screen-2xl text-base mx-auto">
            <Header />
            {children}
            <CartSidebar isOpen={isOpen} onClose={closeCart} />
        </div>
    );
}
