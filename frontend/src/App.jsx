import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import {
  CartSidebarProvider,
  useCartSidebar,
} from "./contexts/CartSidebarContext";
import CartSidebar from "./components/cart/CartSidebar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/OurProduct/Products";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/Blogdetails/BlogDetails";
import BlogFillter from "./pages/Blog/BlogFillter/BlogFillter";
import ProductDetail from "./pages/Details/ProductDetail";
import About from "./pages/About/About";
import ScrollToTop from "./components/layout/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import BlogAuthor from "./pages/Blog/BlogFillter/BlogAuthor";

function CartSidebarWrapper() {
  const { isOpen, closeCart } = useCartSidebar();
  return <CartSidebar isOpen={isOpen} onClose={closeCart} />;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <CartSidebarProvider>
          <BrowserRouter>
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/category/:id" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/blogs" element={<Blog />} />x
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/blog/category/:slug" element={<BlogFillter />} />
              <Route path="/blog/author/:id" element={<BlogAuthor />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <CartSidebarWrapper />
            <Toaster position="top-right" richColors />
          </BrowserRouter>
        </CartSidebarProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
