import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Detalp.module.scss';
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Basket from '../../Pages/Basket/Basket';


const Detalp = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { note_id } = useParams();
    const { userInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/notes/${note_id}`);
                const data = response.data;
                if (data && data.getById) {
                    setProduct(data.getById);
                } else {
                    setError('Ürün bulunamadı.');
                }
            } catch (error) {
                console.error('Ürün alınırken hata oluştu:', error);
                setError('Ürün detayları alınırken bir hata oluştu.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [note_id]);

    const handleAddToBag = () => {
        if (!userInfo) {
            toast.warn('Sepete eklemek için kayıt olmalısınız.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000); 
            return;
        }

        const storedUserInfo = localStorage.getItem('userInfo');
        let basketList = [];

        if (storedUserInfo) {
            const userInfoObject = JSON.parse(storedUserInfo);

            const productToAdd = {
                _id: userInfo._id,
                id: note_id,
                title: product.title,
                price: product.price,
                email: userInfo.email,
                thumbnail: product.thumbnail
            };

            if (localStorage.getItem('basketList')) {
                basketList = JSON.parse(localStorage.getItem('basketList'));
                const existingProduct = basketList.find(item => item.id === note_id);
                if (!existingProduct) {
                    basketList.push(productToAdd);
                    toast.success(`${product.title} sepete eklendi!`);
                } else {
                    toast.info(`${product.title} zaten sepette bulunmaktadır.`);
                }
            } else {
                basketList.push(productToAdd);
                toast.success(`${product.title} sepete eklendi!`);
            }

            localStorage.setItem('basketList', JSON.stringify(basketList));
        } else {
            console.log('Kullanıcı bilgisi bulunamadı. Giriş yapmalısınız.');
        }
        
    };

 
    const handleAddToWishlist = () => {
        if (!userInfo) {
            toast.warn('Favorilere eklemek için kayıt olmalısınız.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000); 
            return;
        }

        const storedUserInfo = localStorage.getItem('userInfo');
        let wishlistList = [];

        if (storedUserInfo) {
            const userInfoObject = JSON.parse(storedUserInfo);

            const productToAdd = {
                _id: userInfo._id,
                id: note_id,
                title: product.title,
                price: product.price,
                email: userInfo.email,
                thumbnail: product.thumbnail
            };

            if (localStorage.getItem('wishlistList')) {
                wishlistList = JSON.parse(localStorage.getItem('wishlistList'));
                const existingProduct = wishlistList.find(item => item.id === note_id);
                if (!existingProduct) {
                    wishlistList.push(productToAdd);
                    toast.success(`${product.title} favorilere eklendi!`);
                } else {
                    toast.info(`${product.title} zaten favorilerde bulunmaktadır.`);
                }
            } else {
                wishlistList.push(productToAdd);
                toast.success(`${product.title} favorilere eklendi!`);
            }

            localStorage.setItem('wishlistList', JSON.stringify(wishlistList));
        } else {
            console.log('Kullanıcı bilgisi bulunamadı. Giriş yapmalısınız.');
        }
    };

    if (loading) {
        return <div className={styles.loading}>Yükleniyor...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!product) {
        return <div className={styles.error}>Ürün bulunamadı.</div>;
    }

    return (
        <div className={styles.detalp}>
            <div className={styles.detailContent}>
            <div className={styles.productDetails}>
                <img src={product.thumbnail} alt={product.title} className={styles.image} />
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>Fiyat: {product.price}$</p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.category}>Kategori: {product.category}</p>
                    <div className={styles.ratings}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className={styles.btns}>
                        <button onClick={handleAddToBag}>Sepete Ekle</button>
                        <button onClick={handleAddToWishlist}>İstek Listesine Ekle</button>
                    </div>
                </div>
            </div>
            {/* {userInfo && <Basket userId={userInfo._id} />} */}
            <ToastContainer />
        </div>
        </div>
    );
};

export default Detalp;


