import Banner from "@/components/banner/Banner";
import Csr from "@/components/csr/Csr";
import GetCleaningTipsFromOurBlog from "@/components/getCleaningTipsFromOurBlog/GetCleaningTipsFromOurBlog";
import HowItWorksAtCleanUp from "@/components/howItWorksAtCleanUp/HowItWorksAtCleanUp";
import OurCleaningServices from "@/components/ourCleaningServices/OurCleaningServices";
import Testimonial from "@/components/testimonial/Testimonial";
import WhyChooseCleanUp from "@/components/whyChooseCleanUp/WhyChooseCleanUp";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="mt-[50px] sm:mt-[100px] md:mt-0">
        <WhyChooseCleanUp />
      </section>
      <section className="mt-[50px] md:mt-[100px]">
        <HowItWorksAtCleanUp />
      </section>
      <section className="mt-[100px] md:mt-[200px]">
        <OurCleaningServices />
      </section>
      <section className="mt-[100px] md:mt-[200px]">
        <Testimonial />
      </section>
      <section className="mt-[100px] md:mt-[200px]">
        <GetCleaningTipsFromOurBlog />
      </section>
      <section className="mt-[100px] md:mt-[200px]">
        <Csr />
      </section>
    </main>
  );
}
