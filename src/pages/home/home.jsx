import BigSlider from "../../components/Sliders/Big-slider";
import Img1 from '@img/main-slider1.webp';
import Img2 from '@img/main-slider1.webp';
import Img3 from '@img/main-slider1.webp';


const Home = () => {
  const imagesArray = [Img1,Img2,Img3]
  return (
    <div className="home">
        <section className="home-slider">
               <BigSlider img={imagesArray} />
        </section>
    </div>
  );
};
export default Home;
