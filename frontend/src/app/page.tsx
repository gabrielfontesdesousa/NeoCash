import ContainerAboutUs from "./components/LandingPage/ContainerAboutUs";
import ContainerHome from "./components/LandingPage/ContainerHome";
import ContainerPlans from "./components/LandingPage/ContainerPlans";
import ContainerProduct from "./components/LandingPage/ContainerProduct";
import ContentAboutUs from "./components/LandingPage/ContentAboutUs";
import ContentHome from "./components/LandingPage/ContentHome";
import ContentPlans from "./components/LandingPage/ContentPlans";
import ContentProduct from "./components/LandingPage/ContentProduct";
import Footer from "./components/LandingPage/Footer";
import Header from "./components/LandingPage/Header";
import LandingPage from "./components/LandingPage/LandingPage";

export default function Home() {
  return (
    <LandingPage>
      <ContainerHome>
        <Header />
        <ContentHome />
      </ContainerHome>
      <ContainerProduct>
        <ContentProduct />
      </ContainerProduct>
      <ContainerPlans>
        <ContentPlans />
      </ContainerPlans>
      <ContainerAboutUs>
        <ContentAboutUs />
      </ContainerAboutUs>
      <Footer></Footer>
    </LandingPage>
  );
}
