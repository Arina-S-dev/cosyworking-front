/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { lightFormat, getHours } from 'date-fns/esm';
import {
  Button, Avatar, IconButton, Modal, Typography, Box, TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import Calendar from './Calendar';

// import style
import './style.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function WorkspaceEdition() {
  //   const workspace = useSelector((state) => state.workspaces.currentWorkspace);
  const workspace = useSelector((state) => state.workspaces.workspaceToEdit);
  const { images } = workspace;
  const mainImage = images.find((image) => (image.mainImage === true));
  const otherImages = images.filter((image) => (image.mainImage === false));
  const equipmentsList = workspace.equipments_list;
  const bookingList = workspace.booking_list;
  // console.log('MainImage ==>', mainImage);
  // console.log('otherImages ==>', otherImages);
  // console.log('bookingList ==>', bookingList);
  // console.log(workspace);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(mainImage.link);

  const [openModaleInfos, setOpenModaleInfos] = useState(false);
  const handleOpenModaleInfos = () => setOpenModaleInfos(true);
  const handleCloseModaleInfos = () => setOpenModaleInfos(false);

  const [openModaleImages, setOpenModaleImages] = useState(false);
  const handleOpenModaleImages = () => setOpenModaleImages(true);
  const handleCloseModaleImages = () => setOpenModaleImages(false);

  const [openModaleDesc, setOpenModaleDesc] = useState(false);
  const handleOpenModaleDesc = () => setOpenModaleDesc(true);
  const handleCloseModaleDesc = () => setOpenModaleDesc(false);

  const [openModaleEquipments, setOpenModaleEquipments] = useState(false);
  const handleOpenModaleEquipments = () => setOpenModaleEquipments(true);
  const handleCloseModaleEquipments = () => setOpenModaleEquipments(false);

  //   const fileReader = new FileReader();

  const changeHandler = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile.type.match(imageMimeType)) {
      alert('Image mime type is not valid');
      return;
    }
    setFile(uploadedFile);
  };

  useEffect(() => {
    let fileReader = false;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
          console.log('fileDATA==>', fileDataURL);
          console.log('FILE==>', file);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('SUBMIT§§§==>');
  // };

  return (
    <div className="workspaceEdition">
      {/* <div className="menuLeft">
        blabla
      </div> */}

      <div className=" workspaceEditionContainer">

        <div className="infosContainer">
          <h3 className="h3WorkspaceEdition">Infos</h3>

          <div className="infosContainer__infos">
            <p>Titre: {workspace.title} </p>
            <p>adresse: {workspace.address}</p>
            <p>Code postale: {workspace.zipCode}</p>
            <p>Ville: {workspace.city}</p>
            <p>Prix journée complète: {workspace.dayPrice}</p>
            <p>Prix demi-journée: {workspace.halfDayPrice}</p>
          </div>

          <Button
            variant="contained"
            size="small"
            onClick={handleOpenModaleInfos}
            // onClick={openPicturesModale}
            sx={{
              width: '30%',
              height: 40,
              color: '#8A8A8A',
              fontSize: 10,
              backgroundColor: '#FFC000',
              ':hover': {
                backgroundColor: '#8A8A8A',
                color: '#FFC000',
              },
            }}
          >Modifier
          </Button>

        </div>

        <Modal
          open={openModaleInfos}
          onClose={handleCloseModaleInfos}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue={workspace.title}
              size="small"
            />
          </Box>
        </Modal>

        <div className="mainImage">

          <h3 className="h3WorkspaceEdition">Image principale</h3>
          <div className="workspaceEditionContainer__mainImageContainer">
            <img className="workspaceEditionContainer__mainImageContainer__img" src={fileDataURL} alt="" />
          </div>

          {/* <form onSubmit={handleSubmit}> */}

          <Button
            variant="contained"
            component="label"
            sx={{
              width: '100%',
              height: 40,
              marginTop: '.7rem',
              color: '#8A8A8A',
              fontSize: 10,
              backgroundColor: '#FFC000',
              ':hover': {
                backgroundColor: '#8A8A8A',
                color: '#FFC000',
              },
            }}
          >
            modifier
            <input
              hidden
              type="file"
              id="image"
              accept=".png, .jpg, .jpeg"
              onChange={changeHandler}
            />
          </Button>

          {/* </form> */}

        </div>

        <div className="otherImagesContainer">
          <h3 className="h3WorkspaceEdition">Autres images</h3>
          <div className="imagesListContainer">
            {
            otherImages.map((image) => (
              <div key={image.id} className="listItem">
                <div className="listItem__imageContainer">
                  <img className="listItem__imageContainer__img" src={image.link} alt="" />
                </div>
                <IconButton
                  aria-label="delete"
                  sx={{
                    width: 30,
                    height: 30,
                    color: '#8A8A8A',
                    margin: '.5rem',
                    fontSize: 10,
                    ':hover': {
                      backgroundColor: 'white',
                      color: 'crimson',
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))
          }
          </div>
          <Button
            variant="contained"
            size="small"
            onClick={handleOpenModaleImages}
            sx={{
              width: '30%',
              height: 40,
              color: '#8A8A8A',
              marginTop: '1rem',
              fontSize: 10,
              backgroundColor: '#FFC000',
              ':hover': {
                backgroundColor: '#8A8A8A',
                color: '#FFC000',
              },
            }}
          >Ajouter une photos
          </Button>
        </div>

        <Modal
          open={openModaleImages}
          onClose={handleCloseModaleImages}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>

        <div className="descriptionContainer">
          <h3 className="h3WorkspaceEdition">Description</h3>
          <div className="descriptionContainer__description">
            <p>{workspace.description}</p>
          </div>

          <Button
            variant="contained"
            size="small"
            onClick={handleOpenModaleDesc}
            sx={{
              width: '30%',
              height: 40,
              color: '#8A8A8A',
              fontSize: 10,
              backgroundColor: '#FFC000',
              ':hover': {
                backgroundColor: '#8A8A8A',
                color: '#FFC000',
              },
            }}
          >Modifier
          </Button>
        </div>

        <Modal
          open={openModaleDesc}
          onClose={handleCloseModaleDesc}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>

        <div className="equipmentContainer">
          <h3 className="h3WorkspaceEdition">Liste des equipements disponibles</h3>
          <div className="equipmentsListContainer">
            {
              equipmentsList.map((equipment) => (
                <div className="equipmentsListContainer__equipment" key={equipment.id}>
                  <Avatar alt={equipment.description} src={equipment.icon} />
                  <p className="equipmentsListContainer__equipment__name">{equipment.description}</p>
                </div>
              ))
            }
          </div>

          <Button
            variant="contained"
            size="small"
            onClick={handleOpenModaleEquipments}
            sx={{
              width: '30%',
              height: 40,
              color: '#8A8A8A',
              fontSize: 10,
              backgroundColor: '#FFC000',
              ':hover': {
                backgroundColor: '#8A8A8A',
                color: '#FFC000',
              },
            }}
          >Ajouter des equipements
          </Button>
        </div>

        <Modal
          open={openModaleEquipments}
          onClose={handleCloseModaleEquipments}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>

        <div className="workspaceEditionContainer__bookingsContainer">
          <h3 className="h3WorkspaceEdition">Réservations</h3>
          <div className="workspaceEditionContainer__bookingsContainer__content">
            <Calendar />
            <div className="workspaceEditionContainer__bookingsContainer__bookingsDate">
              {
              bookingList.map((booking) => (
                <div className="workspaceEditionContainer__bookingsContainer__bookingsDate__item">
                  <p className="workspaceEditionContainer__bookingsContainer__bookingsDate__item__num">Reservation n°: {booking.id}</p>
                  <p className="workspaceEditionContainer__bookingsContainer__bookingsDate__item__date">
                    Du &nbsp; {lightFormat(new Date(booking.start_date), 'dd-MM-yy')} {getHours(new Date(booking.start_date))}H &nbsp; Au &nbsp; {lightFormat(new Date(booking.end_date), 'dd-MM-yy')} {getHours(new Date(booking.end_date))}H
                  </p>
                </div>
              ))
            }

            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default WorkspaceEdition;

//

//   <Button variant="contained" component="label">
//     modifier
//     <input
//       hidden
//       type="file"
//       id="image"
//       accept=".png, .jpg, .jpeg"
//       onChange={changeHandler}
//     />
//   </Button>;

// { /* <form>
//         <label htmlFor="image"> ajouter une Image  </label>
//         <input
//           type="file"
//           id="image"
//           accept=".png, .jpg, .jpeg"
//           onChange={changeHandler}
//         />

//         <input type="submit" label="Upload" />

//       </form> */ }
// { /* {fileDataURL
//         ? (
//           <p className="img-preview-wrapper">
//             <img src={fileDataURL} alt="preview" />
//           </p>
//         ) : null} */ }

//   const [imageFiles, setImageFiles] = useState([]);
//   const [images, setImages] = useState([]);

//   const changeHandlerOtherImages = (e) => {
//     const { files } = e.target;
//     const validImageFiles = [];
//     for (let i = 0; i < files.length; i++) {
//       const uploadedFile = files[i];
//       if (uploadedFile.type.match(imageMimeType)) {
//         validImageFiles.push(uploadedFile);
//       }
//     }
//     if (validImageFiles.length) {
//       setImageFiles(validImageFiles);
//       return;
//     }
//     alert('Selected images are not of valid type!');
//   };

//   useEffect(() => {
//     const uploadedImages = [];
//     const fileReaders = [];
//     let isCancel = false;
//     if (imageFiles.length) {
//       imageFiles.forEach((fileItem) => {
//         const fileReader = new FileReader();
//         fileReaders.push(fileReader);
//         fileReader.onload = (e) => {
//           const { result } = e.target;
//           if (result) {
//             images.push(result);
//           }
//           if (uploadedImages.length === imageFiles.length && !isCancel) {
//             setImages(uploadedImages);
//           }
//         };
//         fileReader.readAsDataURL(fileItem);
//       });
//     }
//     return () => {
//       isCancel = true;
//       fileReaders.forEach((fileReader) => {
//         if (fileReader.readyState === 1) {
//           fileReader.abort();
//         }
//       });
//     };
//   }, [imageFiles]);

// { /* <div className="otherImagesContainer">

// {
// images.length > 0

//   ? images.map((image) => (
//     <div className="workspaceEditionContainer__mainImageContainer">

//       <img className="image" key={image} src={image} alt="" />

//     </div>
//   ))
//   : (
//     <div className="workspaceEditionContainer__mainImageContainer">

//       <img className="image" src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png" alt="" />

//     </div>
//   )
// }

// <Button variant="contained" component="label">
//   modifier
//   <input
//     hidden
//     type="file"
//     id="image"
//     accept=".png, .jpg, .jpeg"
//     onChange={changeHandlerOtherImages}
//   />
// </Button>

// </div> */ }

// { /* <Button
//               variant="contained"
//               component="label"
//               sx={{
//                 width: '100%',
//                 height: 40,
//                 marginTop: '.7rem',
//                 color: '#8A8A8A',
//                 fontSize: 10,
//                 backgroundColor: '#FFC000',
//                 ':hover': {
//                   backgroundColor: '#8A8A8A',
//                   color: '#FFC000',
//                 },
//               }}
//             >
//               Valider
//               <input hidden type="submit" />
//             </Button> */ }

// Du {lightFormat(new Date(booking.start_date), 'dd-MM-yy-HH'} 'Au' {lightFormat(new Date(booking.end_date), 'dd-MM-yy-HH'}
