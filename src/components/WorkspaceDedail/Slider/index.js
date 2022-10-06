/* eslint-disable max-len */
import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import PropTypes from 'prop-types';

function SliderComponent({ classCss, imagesList }) {
  const mainImage = imagesList.find((image) => image.main === true);
  const otherImages = imagesList.filter((image) => image.main === false);
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
          <div key={image.image_id}>
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
      image_id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      main: PropTypes.bool.isRequired,
    }),
  ).isRequired,

};

export default SliderComponent;
