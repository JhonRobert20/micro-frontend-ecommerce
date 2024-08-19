import MaxWidthWrapper from "../../components/UI/MaxWidthWrapper";
import { CompareSlider } from "../../components/UI/CompareSlider";
import hero_sin_vino from "../../assets/Screenshot.png";

import { CustomerReviewSection } from "../../components/UserReviews/CustomerReviewSection";
import HeaderSection from "../../components/HeaderSection";

function Home() {
  return (
    <>
      {/* --------- HERO SECTION ----------*/}
      <section>
        <CompareSlider
          firstImage={hero_sin_vino}
          secondImage={hero_sin_vino}
          firstImageClassName="object-fill"
          secondImageClassname="object-fill "
          className="h-[calc(100vh-3.5rem)] w-full"
        />
      </section>
      {/* ----- PRODUCTS DEFINITION SECTION ------------------- */}
      <section className="relative">
        <MaxWidthWrapper className="py-24">
          <HeaderSection
            className={"pb-12"}
            titleHeader={"Nuestros "}
            strongTitle={"Productos"}
            subtitleHeader={"descubre"}
          />
        </MaxWidthWrapper>
      </section>
      {/* --------- VALUE PROPOSITION SECTION ----------*/}
      {/* <section>
        <CustomerReviewSection />
      </section> */}
    </>
  );
}

export default Home;
