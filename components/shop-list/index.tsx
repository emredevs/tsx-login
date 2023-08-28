"use client";
import { ShopList, ShopListAxios } from "@/types/shop-list/type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
export default function ShopList() {
  const [shopList, setShopList] = useState<ShopList[]>([]);
  useEffect(() => {
    axios
      .get<ShopListAxios>("https://fakestoreapi.com/products")
      .then((res) => setShopList(res.data));
  }, []);
  console.log(shopList);
  return (
    <div className={styles.shopListContainer}>
      {shopList?.map((shopList) => (
        <div className={styles.ShopListBox} key={shopList.id}>
          <img src={shopList.image} alt={shopList.title} />
          <h3>
            {shopList?.title.length > 20
              ? shopList.title.slice(0, 20) + "..."
              : shopList.title}
          </h3>
          <div>
            <span>Price:{shopList.price}$</span>{" "}
            <span>Rateing:{shopList.rating.rate}</span>
          </div>

          <button>Sepete Ekle</button>
        </div>
      ))}
    </div>
  );
}