// import React, { useEffect, useState } from "react";
// import styles from './Wishlist.module.scss';
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { IoIosArrowForward } from "react-icons/io";


// // Sepet listesi bileşeni
// const Wishlist = () => {
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const { userInfo } = useSelector((state) => state.auth);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedWishlistList = localStorage.getItem('wishlistList');

//         if (storedWishlistList) {
//             const parsedWishlistList = JSON.parse(storedWishlistList);
//             // Her ürünün count değerini sayıya dönüştür
//             const updatedWishlistItems = parsedWishlistList.map(item => ({
//                 ...item,
//                 count: parseInt(item.count) || 1, // Eğer count NaN veya undefined ise 1 olarak ayarla
//                 price: parseFloat(item.price).toFixed(2) // Fiyatı ondalık kısmı iki basamakla sınırla
//             }));
//             setWishlistItems(updatedWishlistItems);
//         }
//     }, []);

//     // Ürün sayısını artırma işlevi
//     const handleIncreaseQuantity = (itemId) => {
//         const updatedWishlistItems = wishlistItems.map(item => {
//             if (item.id === itemId) {
//                 const newCount = item.count + 1;
//                 const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

//                 return {
//                     ...item,
//                     count: newCount,
//                     price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
//                 };
//             }
//             return item;
//         });

//         // Güncellenmiş sepet listesini localStorage'e kaydedin
//         localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
        
//         // State'i güncelleyin
//         setWishlistItems(updatedWishlistItems);
//     };

//     // Ürün sayısını azaltma veya ürünü sepetten kaldırma işlevi
//     const handleDecreaseQuantity = (itemId) => {
//         const updatedWishlistItems = wishlistItems.map(item => {
//             if (item.id === itemId) {
//                 if (item.count > 1) {
//                     const newCount = item.count - 1;
//                     const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

//                     return {
//                         ...item,
//                         count: newCount,
//                         price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
//                     };
//                 } else {
//                     // Ürün adedi 1 ise ürünü sepetten kaldır
//                     return null;
//                 }
//             }
//             return item;
//         }).filter(item => item !== null); // null olanları filtrele
        
//         // Güncellenmiş sepet listesini localStorage'e kaydedin
//         localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
        
//         // State'i güncelleyin
//         setWishlistItems(updatedWishlistItems);
//     };

//     // Kullanıcının sepet listesini _id'ye göre filtrele (userInfo varsa)
//     const filteredWishlistItems = userInfo ? wishlistItems.filter(item => item._id === userInfo._id) : [];

//     // const handlePayment = (itemPrice) => {
//     //     navigate('/wishlist/payment', { state: { itemPrice } });
//     // };

//     // Check if user is logged in, otherwise show toast and redirect to registration
//     const handleWishlistView = () => {
//         if (!userInfo) {
//             toast.warn('Favorilere eklemek için kayıt olmalısınız.');
//             setTimeout(() => {
//                 navigate('/register', { state: { from: window.location.pathname } });
//             }, 3000); // 3 saniye sonra yönlendirme
//             return;
//         }
//     };

//     useEffect(() => {
//         handleWishlistView();
//     }, [userInfo]); // Run on userInfo change

//     return (
//         <div>
//             <div className={styles.wishlistList}>
//             <ul>
//                 {filteredWishlistItems.map((item, index) => (
//                     <li key={index}>
//                         <img src={item.thumbnail} alt={item.title} />
//                         <div className={styles.texts}>
//                             <h3>{item.title}</h3>
//                             <p>Fiyat: {item.price}$</p>
//                             <p>Adet: {item.count}</p>
//                             <button onClick={() => handleIncreaseQuantity(item.id)}>Arttır</button>
//                             {item.count === 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Sil</button>}
//                             {item.count > 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Azalt</button>}
//                             {/* <button onClick={() => handlePayment(item.price)}>Ödeme yap</button> */}
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//             <ToastContainer />
//         </div>
//         </div>
//     );
// };

// export default Wishlist;









// import React, { useEffect, useState } from "react";
// import styles from './Wishlist.module.scss';
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { IoIosArrowForward } from "react-icons/io";

// // Wishlist bileşeni
// const Wishlist = () => {
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const { userInfo } = useSelector((state) => state.auth);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedWishlistList = localStorage.getItem('wishlistList');

//         if (storedWishlistList) {
//             const parsedWishlistList = JSON.parse(storedWishlistList);
//             // Her ürünün count değerini sayıya dönüştür
//             const updatedWishlistItems = parsedWishlistList.map(item => ({
//                 ...item,
//                 count: parseInt(item.count) || 1, // Eğer count NaN veya undefined ise 1 olarak ayarla
//                 price: parseFloat(item.price).toFixed(2) // Fiyatı ondalık kısmı iki basamakla sınırla
//             }));
//             setWishlistItems(updatedWishlistItems);
//         }
//     }, []);

//     // Ürün sayısını artırma işlevi
//     const handleIncreaseQuantity = (itemId) => {
//         const updatedWishlistItems = wishlistItems.map(item => {
//             if (item.id === itemId) {
//                 const newCount = item.count + 1;
//                 const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

//                 return {
//                     ...item,
//                     count: newCount,
//                     price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
//                 };
//             }
//             return item;
//         });

//         // Güncellenmiş favori listesini localStorage'e kaydedin
//         localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
        
//         // State'i güncelleyin
//         setWishlistItems(updatedWishlistItems);
//     };

//     // Ürün sayısını azaltma veya ürünü favorilerden kaldırma işlevi
//     const handleDecreaseQuantity = (itemId) => {
//         const updatedWishlistItems = wishlistItems.map(item => {
//             if (item.id === itemId) {
//                 if (item.count > 1) {
//                     const newCount = item.count - 1;
//                     const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

//                     return {
//                         ...item,
//                         count: newCount,
//                         price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
//                     };
//                 } else {
//                     // Ürün adedi 1 ise ürünü favorilerden kaldır
//                     return null;
//                 }
//             }
//             return item;
//         }).filter(item => item !== null); // null olanları filtrele
        
//         // Güncellenmiş favori listesini localStorage'e kaydedin
//         localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
        
//         // State'i güncelleyin
//         setWishlistItems(updatedWishlistItems);
//     };

//     // Ürünleri sepete ekleme işlevi
//     const handleAddToBag = (itemId) => {
//         const storedWishlistList = localStorage.getItem('wishlistList') || '[]';
//         const wishlistList = JSON.parse(storedWishlistList);

//         const itemToAdd = wishlistItems.find(item => item.id === itemId);

//         if (!itemToAdd) {
//             toast.error('Ürün bulunamadı.');
//             return;
//         }

//         const existingProduct = wishlistList.find(item => item.id === itemId);
//         if (!existingProduct) {
//             wishlistList.push(itemToAdd);
//             toast.success(`${itemToAdd.title} sepete eklendi!`);
//             localStorage.setItem('wishlistList', JSON.stringify(wishlistList));
//         } else {
//             toast.info(`${itemToAdd.title} zaten sepette bulunmaktadır.`);
//         }
//     };

//     // Kullanıcının favori listesini _id'ye göre filtrele (userInfo varsa)
//     const filteredWishlistItems = userInfo ? wishlistItems.filter(item => item._id === userInfo._id) : [];

//     // Favorilere eklemek için kullanıcıyı uyar ve yönlendir
//     const handleWishlistView = () => {
//         if (!userInfo) {
//             toast.warn('Favorilere eklemek için kayıt olmalısınız.');
//             setTimeout(() => {
//                 navigate('/register', { state: { from: window.location.pathname } });
//             }, 3000); // 3 saniye sonra yönlendirme
//             return;
//         }
//     };

//     useEffect(() => {
//         handleWishlistView();
//     }, [userInfo]); // userInfo değiştiğinde çalışır

//     return (
//         <div>
//             <div className={styles.wishlistList}>
//                 <ul>
//                     {filteredWishlistItems.map((item, index) => (
//                         <li key={index}>
//                             <img src={item.thumbnail} alt={item.title} />
//                             <div className={styles.texts}>
//                                 <h3>{item.title}</h3>
//                                 <p>Fiyat: {item.price}$</p>
//                                 <p>Adet: {item.count}</p>
//                                 <button onClick={() => handleIncreaseQuantity(item.id)}>Arttır</button>
//                                 {item.count === 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Sil</button>}
//                                 {item.count > 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Azalt</button>}
//                                 <button onClick={() => handleAddToBag(item.id)}>Sepete Ekle</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// };

// export default Wishlist;



// import React, { useEffect, useState } from "react";
// import styles from './Wishlist.module.scss';
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { IoIosArrowForward } from "react-icons/io";

// // Wishlist bileşeni
// const Wishlist = () => {
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const { userInfo } = useSelector((state) => state.auth);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedWishlistList = localStorage.getItem('wishlistList');

//         if (storedWishlistList) {
//             const parsedWishlistList = JSON.parse(storedWishlistList);
//             // Her ürünün count değerini sayıya dönüştür
//             const updatedWishlistItems = parsedWishlistList.map(item => ({
//                 ...item,
//                 count: parseInt(item.count) || 1, // Eğer count NaN veya undefined ise 1 olarak ayarla
//                 price: parseFloat(item.price).toFixed(2) // Fiyatı ondalık kısmı iki basamakla sınırla
//             }));
//             setWishlistItems(updatedWishlistItems);
//         }
//     }, []);

//     // Ürün sayısını artırma işlevi
//     const handleIncreaseQuantity = (itemId) => {
//         const updatedWishlistItems = wishlistItems.map(item => {
//             if (item.id === itemId) {
//                 const newCount = item.count + 1;
//                 const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

//                 return {
//                     ...item,
//                     count: newCount,
//                     price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
//                 };
//             }
//             return item;
//         });

//         // Güncellenmiş favori listesini localStorage'e kaydedin
//         localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
        
//         // State'i güncelleyin
//         setWishlistItems(updatedWishlistItems);
//     };

//     // Ürün sayısını azaltma veya ürünü favorilerden kaldırma işlevi
//     const handleDecreaseQuantity = (itemId) => {
//         const updatedWishlistItems = wishlistItems.map(item => {
//             if (item.id === itemId) {
//                 if (item.count > 1) {
//                     const newCount = item.count - 1;
//                     const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

//                     return {
//                         ...item,
//                         count: newCount,
//                         price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
//                     };
//                 } else {
//                     // Ürün adedi 1 ise ürünü favorilerden kaldır
//                     return null;
//                 }
//             }
//             return item;
//         }).filter(item => item !== null); // null olanları filtrele
        
//         // Güncellenmiş favori listesini localStorage'e kaydedin
//         localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
        
//         // State'i güncelleyin
//         setWishlistItems(updatedWishlistItems);
//     };

//     // Ürünleri sepete ekleme işlevi ve sepet sayfasına yönlendirme
//     const handleAddToBag = (itemId) => {
//         const storedWishlistList = localStorage.getItem('wishlistList') || '[]';
//         const wishlistList = JSON.parse(storedWishlistList);

//         const itemToAdd = wishlistItems.find(item => item.id === itemId);

//         if (!itemToAdd) {
//             toast.error('Ürün bulunamadı.');
//             return;
//         }

//         const existingProduct = wishlistList.find(item => item.id === itemId);
//         if (!existingProduct) {
//             wishlistList.push(itemToAdd);
//             localStorage.setItem('wishlistList', JSON.stringify(wishlistList));
//             toast.success(`${itemToAdd.title} sepete eklendi!`);
//             navigate('/basket'); // Sepet sayfasına yönlendir
//         } else {
//             toast.info(`${itemToAdd.title} zaten sepette bulunmaktadır.`);
//         }
//     };

//     // Kullanıcının favori listesini _id'ye göre filtrele (userInfo varsa)
//     const filteredWishlistItems = userInfo ? wishlistItems.filter(item => item._id === userInfo._id) : [];

//     // Favorilere eklemek için kullanıcıyı uyar ve yönlendir
//     const handleWishlistView = () => {
//         if (!userInfo) {
//             toast.warn('Favorilere eklemek için kayıt olmalısınız.');
//             setTimeout(() => {
//                 navigate('/basket', { state: { from: window.location.pathname } });
//             }, 3000); // 3 saniye sonra yönlendirme
//             return;
//         }
//     };

//     useEffect(() => {
//         handleWishlistView();
//     }, [userInfo]); // userInfo değiştiğinde çalışır

//     return (
//         <div>
//             <div className={styles.wishlistList}>
//                 <ul>
//                     {filteredWishlistItems.map((item, index) => (
//                         <li key={index}>
//                             <img src={item.thumbnail} alt={item.title} />
//                             <div className={styles.texts}>
//                                 <h3>{item.title}</h3>
//                                 <p>Fiyat: {item.price}$</p>
//                                 <p>Adet: {item.count}</p>
//                                 <button onClick={() => handleIncreaseQuantity(item.id)}>Arttır</button>
//                                 {item.count === 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Sil</button>}
//                                 {item.count > 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Azalt</button>}
//                                 <button onClick={() => handleAddToBag(item.id)}>Sepete Ekle</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// };

// export default Wishlist;





import React, { useEffect, useState } from "react";
import styles from './Wishlist.module.scss';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Wishlist = () => {


  const navigation = useNavigate()


  const [wishlistItems, setWishlistItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlistList');
    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist);
      setWishlistItems(parsedWishlist);
    }
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter(item => item.id !== itemId);
    localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
    setWishlistItems(updatedWishlistItems);
    toast.success('Item removed from wishlist!');
  };

  const handleAddToBasket = (item) => {
    const basketList = JSON.parse(localStorage.getItem('basketList')) || [];
    basketList.push({ ...item, count: 1 });
    localStorage.setItem('basketList', JSON.stringify(basketList));
    toast.success('Item added to basket!');
  };

  const filteredWishlistItems = userInfo ? wishlistItems.filter(item => item._id === userInfo._id) : [];

  const handleWishlistView = () => {
    if (!userInfo) {
      toast.warn('You must register to view your wishlist.');
      setTimeout(() => {
        navigate('/register', { state: { from: window.location.pathname } });
      }, 1000);
    }
  };

  useEffect(() => {
    handleWishlistView();
  }, [userInfo]);

  // return (
  //   <div className={styles.wishlistList}>
  //     <h1>Wishlist</h1>
  //     <ul>
  //       {filteredWishlistItems.map((item, index) => (
  //         <li key={index}>
  //           <img src={item.thumbnail} alt={item.title} />
  //           <div>
  //             <h3>{item.title}</h3>
  //             <p>Price: {item.price}$</p>
  //             <div className={styles.buttonContainer}>
  //               <button onClick={() => handleRemoveItem(item.id)}>Sil</button>
  //               <button onClick={() => handleAddToBasket(item)}>Sepete ekle</button>
  //             </div>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //     <ToastContainer />
  //   </div>
  // );

  return (
    <div className={styles.wishlistList}>
       <div className={styles.texts}>
            <h1>Favori</h1>
            <h2 onClick={() => navigation('/')}>Ana səhifə</h2>
            </div>
      <ul>
        {filteredWishlistItems.map((item, index) => (
          <li key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <div className={styles.texts}>
              <h3>{item.title}</h3>
              <p>Qiymət: {item.price}$</p>
              <div className={styles.buttonContainer}>
                <button onClick={() => handleRemoveItem(item.id)}>Sil</button>
                <button onClick={() => handleAddToBasket(item)}>Səbətə əlavə et</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
  
};

export default Wishlist;