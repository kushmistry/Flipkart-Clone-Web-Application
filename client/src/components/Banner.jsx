import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../constants/data";
import "../css/carousel.css";

const Banner = ({}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box>
      <Carousel
        className="carousal-container"
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {bannerData.map((item) => {
          return <img key={item.id} className="carousel-img" src={item.url} alt="Carousel" />;
        })}
      </Carousel>
    </Box>
  );
};

export default Banner;
