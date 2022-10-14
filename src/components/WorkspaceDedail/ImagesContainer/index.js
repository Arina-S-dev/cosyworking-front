import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import UrlImage from '../../../axiosUrlImage';

function ImagesContainer({ imagesList, openPicturesModale }) {
  const mainImage = imagesList.find((image) => image.main === true);
  const otherImages = imagesList.filter((image) => image.main === false);
  // const lastId = imagesList.sort((a, b) => b.image_id - a.image_id)[0].image_id;
  // console.log(lastId);
  // console.log('imagesList', imagesList);

  return (
    <section className="imagesContainer">

      <div className="imageContainer_main-img">
        <img className="image" src={`${UrlImage}${mainImage.link}`} alt="" />
      </div>

      <div className="imageContainer_other-images">

        {
        otherImages[0]
        && (
          <div className="imageContainer_other-images-img">
            <img className="image" src={`${UrlImage}${otherImages[0].link}`} alt="" />
          </div>
        )
      }

        {
        !otherImages[0]
        && (
          <div className="imageContainer_other-images-img">
            <img className="image" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png" alt="" />
          </div>
        )
      }

        {
        otherImages[1]
        && (
          <div className="imageContainer_other-images-img">
            <img className="image" src={`${UrlImage}${otherImages[1].link}`} alt="" />
          </div>
        )
      }

        {
        !otherImages[1]
        && (
          <div className="imageContainer_other-images-img">
            <img className="image" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png" alt="" />
          </div>
        )
      }

        {
        otherImages[2]
        && (
          <div className="imageContainer_other-images-img">
            <img className="image" src={`${UrlImage}${otherImages[2].link}`} alt="" />
          </div>
        )
      }

        {
        !otherImages[2]
        && (
          <div className="imageContainer_other-images-img">
            <img className="image" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png" alt="" />
          </div>
        )
      }

        {/* <div className="imageContainer_other-images-img">
          <img className="image" src={`https://cosyworking-api.onrender.com/${otherImages[1].link}` || 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png'} alt="" />
        </div>

        <div className="imageContainer_other-images-img">
          <img className="image" src={`https://cosyworking-api.onrender.com/${otherImages[2].link}` || 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png'} alt="" />
        </div> */}

        {
        otherImages[3]
        && (
          <div className="imageContainer_other-images-img image--button">
            <img className="image " src={`${UrlImage}${otherImages[3].link}`} alt="" />
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
        )
      }

        {
        !otherImages[3]
        && (
          <div className="imageContainer_other-images-img image--button">
            <img className="image " src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png" alt="" />
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
        )
      }

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
