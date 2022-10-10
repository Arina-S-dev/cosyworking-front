import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ImagesContainer({ imagesList, openPicturesModale }) {
  const mainImage = imagesList.find((image) => image.main === true);
  const otherImages = imagesList.filter((image) => image.main === false);

  return (
    <section className="imagesContainer">

      <div className="imageContainer_main-img">
        <img className="image" src={mainImage.link} alt="" />
      </div>

      <div className="imageContainer_other-images">

        {
        otherImages.map((image, index) => (
          index < 3

              && (
              <div className="imageContainer_other-images-img" key={image.image_id}>
                <img className="image" src={image.link} alt="" />
              </div>
              )

        ))
      }

        <div className="imageContainer_other-images-img image--button">
          <img className="image " src={otherImages[3].link} alt="" />
          <span className="image--button_cross">
            <Button
              variant="contained"
              size="small"
              onClick={openPicturesModale}
              sx={{
                width: 90,
                height: 30,
                color: '#8A8A8A',
                fontSize: 10,
                backgroundColor: '#FFC000',
                ':hover': {
                  backgroundColor: '#8A8A8A',
                  color: '#FFC000',
                },
              }}
            >Show more
            </Button>
          </span>
        </div>

      </div>

      <div />
    </section>
  );
}

ImagesContainer.propTypes = {

  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      image_id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      main: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  openPicturesModale: PropTypes.func.isRequired,

};

export default ImagesContainer;
