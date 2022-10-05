import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import SliderComponent from '../Slider';

function ImagesSliderModal({ PictureModalOpen, closePictureModal, imagesList }) {
  return (
    <div className={classNames('ModalSliderContainer', { isHidden: !PictureModalOpen })}>
      <SliderComponent classCss="ModaleSlider" imagesList={imagesList} />
      <IconButton
        aria-label="delete"
        size="small"
        onClick={closePictureModal}
        sx={{
          color: 'white',
          position: 'absolute',
          top: 40,
          right: 40,
        }}
      >
        <CancelOutlined fontSize="large" />
      </IconButton>
    </div>
  );
}

ImagesSliderModal.propTypes = {

  PictureModalOpen: PropTypes.bool.isRequired,
  closePictureModal: PropTypes.func.isRequired,
  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      mainImage: PropTypes.bool.isRequired,
    }),
  ).isRequired,

};

export default ImagesSliderModal;
