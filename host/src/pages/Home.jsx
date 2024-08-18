import MaxWidthWrapper from "../components/UI/MaxWidthWrapper";
import { Compare } from "../components/CompareHeroSection/Compare";
import tapas_vino_3 from "../assets/tapas_vino_3.jpg";
import tapas_vino_2 from "../assets/tapas_vino_2.jpg";
import sparkes_wine_l from "../assets/sparkles_wine_l.svg";
import sparkes_wine_r from "../assets/sparkles_wine_r.svg";

import { CustomerReviewSection } from "../components/UserReviews/CustomerReviewSection";
import HeaderSection from "../components/UI/HeaderSection";
import HomeContent from "catalog/HomeContent";
function Home() {
  return (
    <>
      {/* --------- HERO SECTION ----------*/}
      <section>
        <Compare
          firstImage={tapas_vino_3}
          secondImage={tapas_vino_2}
          firstImageClassName="object-cover"
          secondImageClassname="object-cover "
          className="h-[calc(80vh-3.5rem)] w-full"
        />
      </section>
      {/* --------------------------- PRODUCTS DEFINITION SECTION
      ------------------- */}
      <section className="relative">
        <MaxWidthWrapper className="py-24">
          <HeaderSection
            className={"pb-12"}
            titleHeader={"Nuestros "}
            strongTitle={"Productos"}
            subtitleHeader={"descubre"}
          />

          <HomeContent
            className={"grid grid-cols-3 place-items-center gap-3"}
          />
          <img
            className="w-80 absolute top-1/3 left-0 "
            src={sparkes_wine_l}
            draggable={false}
          />
          <img
            className="w-60 absolute top-[60%] right-0 "
            src={sparkes_wine_r}
            draggable={false}
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
