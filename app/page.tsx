import HeroCaraousel from "@/components/HeroCaraousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();
  return (
    <>
      <section className="px-6 border-2  md:px-20 py-24 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Shopping Time
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Track prices using{" "}
              <span className="text-primary">PRICEWATCH</span>
            </h1>
            <p className="mt-6">
              Empower your savings journey with our user-friendly price tracker
              app. Compare prices, track deals, and never miss a great offer
              again!
            </p>
            <Searchbar />
          </div>
          <HeroCaraousel />
        </div>
      </section>
      <section className="trending-secton">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
