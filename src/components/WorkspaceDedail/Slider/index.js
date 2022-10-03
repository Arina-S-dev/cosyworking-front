/* eslint-disable max-len */
import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import PropTypes from 'prop-types';

function SliderComponent({ classCss, imagesList }) {
  const mainImage = imagesList.find((image) => image.mainImage === true);
  const otherImages = imagesList.filter((image) => image.mainImage === false);
  const settings = {
    dots: true,
  };
  return (
    <div className={classCss}>
      <Slider {...settings}>
        <div>
          <img src={mainImage.link} alt="" />
        </div>
        {
        otherImages.map((image) => (
          <div key={image.id}>
            <img src={image.link} alt="" />
          </div>
        ))
      }

      </Slider>
    </div>
  );
}

SliderComponent.propTypes = {
//   pictures: PropTypes.number.isRequired,
  classCss: PropTypes.string.isRequired,
  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      mainImage: PropTypes.bool.isRequired,
    }),
  ).isRequired,

};

export default SliderComponent;
