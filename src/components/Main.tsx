import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import Home from "./Home";
import Footer from "./Footer";

const Main = function() {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState('');
    const [menu, setMenu] = useState('');
    const getProducts = function() {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    };
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <div>
            <Navbar setSearch={setSearch}/>
            <Menubar setMenu={setMenu} />
            <Home products={product} search={search} menu={menu} />
            <Footer />
        </div>
    );
};

export default Main;