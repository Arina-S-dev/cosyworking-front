/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Avatar, IconButton, Modal, Typography, Box, TextField, FormControlLabel, Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';

// import style
// import './style.scss';

const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: 350,
  },
  // gap: '1.5rem',
});

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function WorkspaceCreation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_EQUIPMENTS_LIST',
    });
  }, []);

  //   const workspace = useSelector((state) => state.workspaces.currentWorkspace);

  const equipmentsListFromAPI = useSelector((state) => state.workspaces.equipmentsList);
  console.log('equipmentsListFromAPI ==>', equipmentsListFromAPI);

  const [openModaleInfos, setOpenModaleInfos] = useState(false);
  const handleOpenModaleInfos = () => setOpenModaleInfos(true);
  const handleCloseModaleInfos = () => setOpenModaleInfos(false);

  const [openMainImageModale, setOpenMainImageModale] = useState(false);
  const handleOpenMainImageModale = () => setOpenMainImageModale(true);
  const handleCloseMainImageModale = () => setOpenMainImageModale(false);

  const [openModaleImages, setOpenModaleImages] = useState(false);
  const handleOpenModaleImages = () => setOpenModaleImages(true);
  const handleCloseModaleImages = () => setOpenModaleImages(false);

  const [openModaleDesc, setOpenModaleDesc] = useState(false);
  const handleOpenModaleDesc = () => setOpenModaleDesc(true);
  const handleCloseModaleDesc = () => setOpenModaleDesc(false);

  const [openModaleEquipments, setOpenModaleEquipments] = useState(false);
  const handleOpenModaleEquipments = () => setOpenModaleEquipments(true);
  const handleCloseModaleEquipments = () => setOpenModaleEquipments(false);

  const [title, setTitle] = useState('');
  const [adress, setAdress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [fullDayPrice, setFullDayPrice] = useState('');
  const [halfDayPrice, setHalfDayPrice] = useState('');
  const [description, setDescription] = useState('');
  const [equipments, setEquipments] = useState([]);
  const [otherImages, setOtherImages] = useState([]);
  const [otherImagesToDisplay, setOtherImagesToDisplay] = useState([]);

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState('https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png');

  const [fileOtherImage, setFileOtherImage] = useState(null);
  const [fileDataURLOtherImage, setFileDataURLOtherImage] = useState('https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png');
  console.log('fileOTHERIMAGE==>', fileOtherImage);
  //   console.log('fileDataURLOtherImage==>', fileDataURLOtherImage);

  const textButtonModalOtherImages = fileOtherImage ? 'Modifier' : 'Ajouter une image';

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

  const changeHandlerOtherImage = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile.type.match(imageMimeType)) {
      alert('Image mime type is not valid');
      return;
    }
    setFileOtherImage(uploadedFile);
  };

  useEffect(() => {
    let fileReader = false;
    let isCancel = false;

    if (fileOtherImage) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURLOtherImage(result);
          console.log('fileDATA==>', fileDataURL);
          console.log('FILE==>', file);
        }
      };
      fileReader.readAsDataURL(fileOtherImage);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [fileOtherImage]);

  const handleEquipmentsChange = (event) => {
    console.log('equipmentChange ===>', event.target.value);

    const equipmentId = Number(event.target.value);

    if (equipments.find((equipment) => equipment.equipment_id === equipmentId)) {
      console.log('EQUIPMENT IS IN LIST==>');
      const filteredEquipmentsList = equipments.filter((equipment) => equipment.equipment_id !== equipmentId);
      console.log('filteredEquipmentsList==>', filteredEquipmentsList);
      setEquipments(filteredEquipmentsList);
    }
    else {
      console.log('EQUIPMENT IS NOT IN LIST');
      const equipmentToAdd = equipmentsListFromAPI.find((equipment) => equipment.id === equipmentId);
      console.log(equipmentToAdd);
      const modifiedEquipmentsList = [...equipments, { equipment_id: equipmentToAdd.id, description: equipmentToAdd.description, icon_link: equipmentToAdd.icon_link }];
      setEquipments(modifiedEquipmentsList);
    }
  };

  const handleAddNewImage = (event) => {
    event.preventDefault();
    setOtherImages([...otherImages, fileOtherImage]);
    setOtherImagesToDisplay([...otherImagesToDisplay, { name: fileOtherImage.name, url: fileDataURLOtherImage }]);
    setFileOtherImage(null);
    setFileDataURLOtherImage(null);
    console.log('handleAddNewImage ==>');
  };

  const handleAddNewMainImage = (event) => {
    event.preventDefault();
    console.log('handleAddNewMAINImage  ==>');
  };

  const handleDescriptionFormSubmit = (event) => {
    event.preventDefault();
    console.log('handleDescriptionFormSubmit ==>');
  };

  const handleInfosSubmit = (event) => {
    event.preventDefault();
    console.log('handleInfosSubmit ==>');
  };

  const handleEquipmentsSubmit = (event) => {
    event.preventDefault();
    console.log('handleEquipmentsSubmit ==>');
  };

  const handleCreateWorkspace = (event) => {
    event.preventDefault();
    // const group = {
    //   title: title,
    //   address: adress,
    //   zip_code: zipCode,
    //   city: city,
    //   description: description,
    //   day_price: fullDayPrice,
    //   half_day_price: halfDayPrice,
    //   equipments: equipments,
    //   otherImages: otherImages,
    //   mainImage: file,
    // };

    // const images = [...file, ...otherImages]
    const formData = new FormData();

    otherImages.forEach((image) => formData.append('workspace_otherImages', image));
    equipments.forEach((equipment) => formData.append('equipments', equipment.equipment_id));
    formData.append('title', title);
    formData.append('address', adress);
    formData.append('zip_code', zipCode);
    formData.append('city', 'city');
    formData.append('description', description);
    formData.append('day_price', fullDayPrice);
    formData.append('half_day_price', halfDayPrice);
    // formData.append('equipments', equipments);
    // formData.append('otherImages', ...otherImages);
    formData.append('workspace_mainImage', file);
    console.log(formData);

    dispatch({
      type: 'CREATE_WORKSPACE',
      payload: formData,
    });
    // console.log('handleCreateWorkspace ==>');
    // console.log('title ==>', title);
    // console.log('adress ==>', adress);
    // console.log('zipCode ==>', zipCode);
    // console.log('city ==>', city);
    // console.log('fullDayPrice ==>', fullDayPrice);
    // console.log('halfDayPrice ==>', halfDayPrice);
    // console.log('description ==>', description);
    // console.log('equipments ==>', equipments);
    // console.log('otherImages ==>', otherImages);
    // console.log('mainImage ==>', file);
  };

  const removeImageFromList = (event, imageName) => {
    event.stopPropagation();
    console.log('handle remove', imageName);
    const filteredImagesList = otherImages.filter((image) => image.name !== imageName);
    const filteredImagesUrlList = otherImagesToDisplay.filter((image) => image.name !== imageName);
    setOtherImages(filteredImagesList);
    setOtherImagesToDisplay(filteredImagesUrlList);
  };

  return (
    <div>

      {
        equipmentsListFromAPI
      && (

      <div className="workspaceEdition">

        <div className=" workspaceEditionContainer">

          <div className="infosContainer">
            <h3 className="h3WorkspaceEdition">Infos</h3>

            <div className="infosContainer__infos">
              <p>Titre: {title} </p>
              <p>adresse: {adress}</p>
              <p>Code postale: {zipCode}</p>
              <p>Ville: {city}</p>
              <p>Prix journée complète: {fullDayPrice} &euro; </p>
              <p>Prix demi-journée: {halfDayPrice} &euro; </p>
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
            <Box sx={style} component="form" onSubmit={handleInfosSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Informations générales
              </Typography>
              <TextField
                id="title"
                label="title"
                multiline
                maxRows={4}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Message"
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="adress"
                label="adress"
                multiline
                maxRows={4}
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                placeholder="Message"
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="zipCode"
                label="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Message"
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="city"
                label="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Message"
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="fullDayPrice"
                label="fullDayPrice"
                type="number"
                value={fullDayPrice}
                onChange={(e) => setFullDayPrice(e.target.value)}
                placeholder="prix journée"
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="halfDayPrice"
                label="halfDayPrice"
                type="number"
                value={halfDayPrice}
                onChange={(e) => setHalfDayPrice(e.target.value)}
                placeholder="prix journée"
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />

              <Button
                variant="contained"
                size="medium"
                type="submit"
                sx={{
                  color: '#8A8A8A',
                  // marginBottom: '1.5rem',
                  width: '50%',
                  // fontSize: 10,
                  backgroundColor: '#FFC000',
                  ':hover': {
                    backgroundColor: '#8A8A8A',
                    color: '#FFC000',
                  },
                }}
              >Valider
              </Button>
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
              onClick={handleOpenMainImageModale}
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

            </Button>

            {/* </form> */}

          </div>

          <Modal
            open={openMainImageModale}
            onClose={handleCloseMainImageModale}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={handleAddNewMainImage}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>

              <div className="workspaceEditionContainer__mainImageContainer">
                <img className="workspaceEditionContainer__mainImageContainer__img" src={fileDataURL} alt="" />
              </div>

              <Button
                variant="contained"
                component="label"
                sx={{
                  width: '30%',
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

              <Button
                variant="contained"
                size="small"
                type="submit"
                disabled={!file}
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
              >valider
              </Button>

            </Box>
          </Modal>

          <div className="otherImagesContainer">
            <h3 className="h3WorkspaceEdition">Autres images</h3>
            <div className="imagesListContainer">
              {
                otherImagesToDisplay.map((image) => (
                  <div key={image.name} className="listItem">
                    <div className="listItem__imageContainer">
                      <img className="listItem__imageContainer__img" src={image.url} alt="" />
                    </div>
                    <IconButton
                      aria-label="delete"
                      onClick={(event) => removeImageFromList(event, image.name)}
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
            <Box sx={style} component="form" onSubmit={handleAddNewImage}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Ajouter une image
              </Typography>

              <div className="workspaceEditionContainer__mainImageContainer">
                <img className="workspaceEditionContainer__mainImageContainer__img" src={fileDataURLOtherImage || 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png'} alt="" />
              </div>

              <Button
                variant="contained"
                component="label"
                sx={{
                  width: '30%',
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
                {textButtonModalOtherImages}
                <input
                  hidden
                  type="file"
                  id="image"
                  accept=".png, .jpg, .jpeg"
                  onChange={changeHandlerOtherImage}
                />
              </Button>

              <Button
                variant="contained"
                size="small"
                type="submit"
                disabled={!fileOtherImage}
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
              >valider
              </Button>

            </Box>
          </Modal>

          <div className="descriptionContainer">
            <h3 className="h3WorkspaceEdition">Description</h3>
            <div className="descriptionContainer__description">
              <p>{description}</p>
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
            <Box sx={style} component="form" onSubmit={handleDescriptionFormSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>

              <TextField
                id="description"
                label="description"
                multiline
                rows={12}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Message"
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />

              <Button
                variant="contained"
                size="medium"
                type="submit"
                sx={{
                  color: '#8A8A8A',
                  // marginBottom: '1.5rem',
                  width: '50%',
                  // fontSize: 10,
                  backgroundColor: '#FFC000',
                  ':hover': {
                    backgroundColor: '#8A8A8A',
                    color: '#FFC000',
                  },
                }}
              >Valider
              </Button>

            </Box>
          </Modal>

          <div className="equipmentContainer">
            <h3 className="h3WorkspaceEdition">Liste des equipements disponibles</h3>
            <div className="equipmentsListContainer">
              {
                equipments.map((equipment) => (
                  <div className="equipmentsListContainer__equipment" key={equipment.id}>
                    <Avatar alt={equipment.description} src={equipment.icon_link} />
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
            <Box sx={style} component="form" onSubmit={handleEquipmentsSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>

              <div className="equipmentsListModal">
                {equipmentsListFromAPI.map((equipment) => (
                  <FormControlLabel
                    control={<Checkbox checked={Boolean(equipments.find((equipmentInList) => equipmentInList.equipment_id === equipment.id))} />}
                    key={equipment.id}
                    label={equipment.description}
                    value={equipment.id}
                    onClick={handleEquipmentsChange}
                    sx={{
                      width: '100%',
                      height: 20,
                      fontSize: 10,
                    }}
                  />
                ))}
              </div>

              <Button
                variant="contained"
                size="small"
                type="submit"
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
              >valider
              </Button>

            </Box>
          </Modal>

          <Button
            variant="contained"
            size="small"
            type="button"
            onClick={handleCreateWorkspace}
            sx={{
              width: '100%',
              height: 60,
              color: '#8A8A8A',
              fontSize: 15,
              backgroundColor: '#FFC000',
              marginTop: '1rem',
              ':hover': {
                backgroundColor: '#8A8A8A',
                color: '#FFC000',
              },
            }}
          >valider
          </Button>

        </div>
      </div>
      )
      }
    </div>

  );
}

export default WorkspaceCreation;

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
