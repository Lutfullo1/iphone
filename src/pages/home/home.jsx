import React from "react";
import { MainLayout } from "../../layout/main-layout";

import { heroBannerData, productData, iphone14Data } from "../../data/data";
import { Button } from "../../components/ui/button";
import { ProductBanner } from "../../components/banners/product-banner/product-banner";
import { ProductBanner2 } from "../../components/banners/product-banner2/product-banner2";
import { ProductCard } from "../../components/cards/product-card/product-card";

export const Home = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <div className="bg-bgColor mt-[8px]">
        <div className="container flex items-center gap-[50px]">
          {heroBannerData.map((item) => (
            <>
              <img className="w-300px pt-[99px]" src={item.img} alt="" />
              <div>
                <img src={item.title} alt="" />
                <p className="text-[rgb(30, 50, 64)] font-sans font-[400] text-[32px]">
                  от {item.price}
                </p>
                <Button variant="primary">подробнее</Button>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* Hero */}
      {/* PRODUCT */}
      <div className="container ">
        <ProductBanner>
          {productData.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
            />
          ))}
        </ProductBanner>
      </div>
      {/* PRODUCT */}
      {/* INFO */}
      <div className="container">
        <h3 className="mt-[72px] mb-[22px] text-gray-900 font-sans font-bold text-2xl leading-relaxed">
          Новые модели Айфонов по выгодным ценам
        </h3>
        <p className="text-gray-600 font-sans text-base font-normal leading-5 text-left">
          Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
          предлагает: Низкие цены на все виды устройств, недорогие аксессуары;
          Оригинальные подарки бренда; Новая линейка смартфонов и проверенные
          старые модели; Лаконичный дизайн, большой выбор цветов и оттенков; Все
          товары в каталоге есть в наличии и доступны для покупки в кредит и
          рассрочку; Быстрая доставка по Санкт-Петербургу и области; Гарантия на
          все модели телефонов; Все способы оплаты! Товары, представленные на
          официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся
          продажей айфонов с 2013 года. Вы всегда можете прочитать отзывы о
          покупке наших клиентов, позвонить в магазин и получить консультацию по
          любой модели Apple.
        </p>
      </div>
      {/* INFO */}
      {/* IPHONE 14 PRO MAX */}
      <div className="bg-[black] mt-[32px]">
        <div className="container flex items-center gap-[50px]">
          {iphone14Data.map((item) => (
            <>
              <img className="w-[150px]" src={item.img} alt="" />
              <div>
                <h4 className="text-white font-sans font-bold text-5xl leading-none mb-[16px]">
                  {item.title}
                </h4>
                <p className="text-white font-sans font-medium text-lg leading-7 mb-[20px]">
                  {item.text}
                </p>
                <Button variant="primary">подробнее</Button>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* IPHONE 14 PRO MAX */}
      {/* INFO */}
      <div className="container">
        <h3 className="mt-[72px] mb-[22px] text-gray-900 font-sans font-bold text-2xl leading-relaxed">
          Новые модели Айфонов по выгодным ценам
        </h3>
        <p className="text-gray-600 font-sans text-base font-normal leading-5 text-left">
          Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
          предлагает: Низкие цены на все виды устройств, недорогие аксессуары;
          Оригинальные подарки бренда; Новая линейка смартфонов и проверенные
          старые модели; Лаконичный дизайн, большой выбор цветов и оттенков; Все
          товары в каталоге есть в наличии и доступны для покупки в кредит и
          рассрочку; Быстрая доставка по Санкт-Петербургу и области; Гарантия на
          все модели телефонов; Все способы оплаты! Товары, представленные на
          официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся
          продажей айфонов с 2013 года. Вы всегда можете прочитать отзывы о
          покупке наших клиентов, позвонить в магазин и получить консультацию по
          любой модели Apple.
        </p>
      </div>
      {/* INFO */}
      {/* PRODUCT */}
      <div className="container ">
        <ProductBanner2>
          {productData.slice(0, 8).map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
            />
          ))}
        </ProductBanner2>
      </div>
      {/* PRODUCT */}
    </MainLayout>
  );
};
