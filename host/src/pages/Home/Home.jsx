import MaxWidthWrapper from "../../components/UI/MaxWidthWrapper";
import { CompareSlider } from "../../components/UI/CompareSlider";
import hero_sin_vino from "../../assets/winescreanshot.jpg";
import hero_sin_vino_ from "../../assets/ScreenshotEmpty.jpeg";
import CarouselCards from "catalog/carouselCards";
import { CustomerReviewSection } from "../../components/UserReviews/CustomerReviewSection";
import HeaderSection from "../../components/HeaderSection";

import { PRODUCTS_FOR_SALE, ITEMS } from "../../lib/constants";

function Home() {
  return (
    <>
      {/* --------- HERO SECTION ----------*/}
      <section>
        <CompareSlider
          firstImage={hero_sin_vino}
          secondImage={hero_sin_vino_}
          firstImageClassName="object-fill"
          secondImageClassname="object-fill "
          className="h-[calc(100vh-3.5rem)] w-full"
        />
      </section>
      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}
      <section className="relative">
        <MaxWidthWrapper className="py-24  max-w-screen-2xl">
          <HeaderSection
            className={"pb-12"}
            titleHeader={"Nuestros "}
            strongTitle={"Productos"}
            subtitleHeader={"descubre"}
          />
          <CarouselCards data={PRODUCTS_FOR_SALE} />
        </MaxWidthWrapper>
      </section>

      <section>
        <CompareSlider
          firstImage={hero_sin_vino}
          secondImage={hero_sin_vino_}
          firstImageClassName="object-fill"
          secondImageClassname="object-fill "
          className="h-[calc(100vh-3.5rem)] w-full"
        />
      </section>

      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}
      <section className="relative">
        <MaxWidthWrapper className="py-24">
          <h2 className="text-2xl">Nuestros productos</h2>

          <CarouselCards data={ITEMS} />
        </MaxWidthWrapper>
      </section>

      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}
      <section className="relative">
        <MaxWidthWrapper className="py-24">
          <h2 className="text-2xl">Nuestros productos</h2>

          <CarouselCards data={ITEMS} />
        </MaxWidthWrapper>
      </section>

      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}

      <section className="relative">
        <MaxWidthWrapper className="">
          <h2 className="text-2xl">Nuestros productos</h2>

          <CarouselCards data={ITEMS} />
        </MaxWidthWrapper>
      </section>

      <section>
        <CompareSlider
          firstImage={hero_sin_vino}
          secondImage={hero_sin_vino_}
          firstImageClassName="object-fill"
          secondImageClassname="object-fill "
          className="h-[calc(100vh-3.5rem)] w-full"
        />
      </section>

      <section>
        <CompareSlider
          firstImage={hero_sin_vino}
          secondImage={hero_sin_vino_}
          firstImageClassName="object-fill"
          secondImageClassname="object-fill "
          className="h-[calc(100vh-3.5rem)] w-full"
        />
      </section>

      {/* --------- VALUE PROPOSITION SECTION ----------*/}
      <section>
        <CustomerReviewSection />
      </section>
    </>
  );
}

export default Home;
