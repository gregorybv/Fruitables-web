import { Features } from "../../components/Features";
import { Products } from "../../components/Products";
import { HomeSlide } from "../../components/Slider";

export const Home = () => {
  return (
    <>
      <HomeSlide/>
      <Features/>
      <Products/>
    </>
  );
}
