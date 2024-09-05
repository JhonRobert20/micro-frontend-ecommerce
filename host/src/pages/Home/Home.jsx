import MaxWidthWrapper from "../../components/UI/MaxWidthWrapper";
import CompareImages from "catalog/CompareImages";
import hero_sin_vino from "../../../public/assets/winescreanshot.jpg";
import hero_sin_vino_ from "../../../public/assets/ScreenshotEmpty.jpeg";
import ProductsCardsInfo from "catalog/productsCardsInfo";
import { PRODUCTS_FOR_SALE, ITEMS } from "../../lib/constants";
import ProductBanner from "catalog/ProductBanner";
import HeaderSection from "../../components/UI/HeaderSection";

function Home() {
  return (
    <>
      {/* --------- HERO SECTION ----------*/}
      <section>
        <CompareImages
          firstImage={hero_sin_vino}
          secondImage={hero_sin_vino_}
          firstImageClassName="object-cover z-20"
          secondImageClassname="object-cover "
          className="h-[calc(100vh-3.5rem)] w-full"
        />
      </section>

      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}
      <section className="relative">
        <MaxWidthWrapper className="py-24  max-w-screen-2xl">
          <HeaderSection
            className={"pb-14"}
            titleHeader={"Nuestros "}
            strongTitle={"Productos"}
            subtitleHeader={"descubre"}
          />
          <ProductsCardsInfo data={PRODUCTS_FOR_SALE} />
        </MaxWidthWrapper>
      </section>

      <section className="h-[calc(120vh-3.5rem)] w-full">
        <MaxWidthWrapper className="py-24  max-w-screen-2xl">
          <HeaderSection
            className={"pb-14"}
            titleHeader={"Nuestros "}
            strongTitle={"Productos"}
            subtitleHeader={"descubre"}
          />
          <ProductBanner />
        </MaxWidthWrapper>
      </section>

      {/* ----- PROMO BANNER ------------------- */}

      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}

      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}

      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}

      {/* --------- VALUE PROPOSITION SECTION ----------*/}
      {/* <section className="mb-11">
        <CustomerReviewSection />
      </section> */}
    </>
  );
}

export default Home;
