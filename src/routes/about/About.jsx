import { Container } from '../../utils/Utils';
import about_img from '../../images/about_img.png';
import AboutCard from '../../components/AboutCard';

function About() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 py-10">
        <div className="flex flex-col flex-1 gap-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-medium leading-tight">
            Our Story
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] text-gray-700">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves over 3 million customers across the region.
          </p>
          <p className="text-base sm:text-lg lg:text-[18px] text-gray-700">
            Exclusive offers more than 1 million products and is growing rapidly. We provide a diverse assortment in categories ranging from consumer electronics to fashion and lifestyle.
          </p>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <img
            src={about_img}
            alt="About"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      <AboutCard />
    </Container>
  );
}

export default About;
