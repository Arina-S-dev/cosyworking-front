/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, IconButton, Modal, Typography, Box, TextField, FormControlLabel, Checkbox, ThemeProvider, CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import { CancelOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import themeButton from '../../tools/themeMui';
import UrlImage from '../../axiosUrlImage';
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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: 'GET_EQUIPMENTS_LIST',
    });
  }, []);

  //   const workspace = useSelector((state) => state.workspaces.currentWorkspace);

  const equipmentsListFromAPI = useSelector((state) => state.workspaces.equipmentsList);
  const creationRequestStatus = useSelector((state) => state.workspaces.creationRequestStatus);
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

  const [openAlert, setOpenAlert] = useState(false);

  if (creationRequestStatus === 'fail' && !openAlert) {
    setOpenAlert(true);
    dispatch({
      type: 'SET_CREATION_REQUEST_STATUS',
      creationRequestStatus: null,
    });
  }

  const pageTitle = creationRequestStatus === 'pending' ? 'Workspace en cour de creation' : 'Bienvenue sur la page de Création de votre annonce';
  if (creationRequestStatus === 'succeed') {
    navigate('/espace-perso/espace-hote/mes-annonces');
    dispatch({
      type: 'SET_CREATION_REQUEST_STATUS',
      creationRequestStatus: null,
    });
  }

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
  const [fileDataURL, setFileDataURL] = useState(null);

  const [fileOtherImage, setFileOtherImage] = useState(null);
  const [fileDataURLOtherImage, setFileDataURLOtherImage] = useState(null);
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
    setOpenModaleImages(false);
    console.log('handleAddNewImage ==>');
  };

  const handleAddNewMainImage = (event) => {
    event.preventDefault();
    setOpenMainImageModale(false);
    console.log('handleAddNewMAINImage  ==>');
  };

  const handleDescriptionFormSubmit = (event) => {
    event.preventDefault();
    setOpenModaleDesc(false);
    console.log('handleDescriptionFormSubmit ==>');
  };

  const handleInfosSubmit = (event) => {
    event.preventDefault();
    setOpenModaleInfos(false);
    console.log('handleInfosSubmit ==>');
  };

  const handleEquipmentsSubmit = (event) => {
    event.preventDefault();
    setOpenModaleEquipments(false);
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
    formData.append('city', city);
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
    dispatch({
      type: 'SET_CREATION_REQUEST_STATUS',
      creationRequestStatus: 'pending',
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

  const textButtonModalImage = fileDataURL ? 'Modifier' : 'Ajouter une image';

  return (
    <div>

      <h1 className="workspaceEditionTitle">{pageTitle}</h1>

      {
        creationRequestStatus === 'pending'
        && (
          <ThemeProvider theme={themeButton}>
            <CircularProgress
              size={200}
              thickness={2}
              sx={{
                margin: '5rem calc(50% - 100px) ',
              }}
            />
          </ThemeProvider>
        )
      }

      {
        equipmentsListFromAPI && creationRequestStatus !== 'pending'
      && (

      <div className="workspaceEdition">

        <div className=" workspaceEditionContainer">

          <div className="infosContainer">
            <h3 className="h3WorkspaceEdition">Infos</h3>

            <div className="infosContainer__infos">
              <div className="priceDivInfos">
                <p className="userResponseRequest">Titre:</p> <p className="userResponseInfos">{title}</p>
              </div>
              <div className="priceDivInfos">
                <p className="userResponseRequest">Adresse:</p> <p className="userResponseInfos">{adress}</p>
              </div>
              <div className="priceDivInfos">
                <p className="userResponseRequest">Code postal:</p> <p className="userResponseInfos">{zipCode}</p>
              </div>
              <div className="priceDivInfos">
                <p className="userResponseRequest">Ville:</p> <p className="userResponseInfos">{city}</p>
              </div>
              <div className="priceDivInfos">
                <p className="userResponseRequest">Prix d'une journée complète:</p> <p className="userResponseInfos">{fullDayPrice} &euro;</p>
              </div>
              <div className="priceDivInfos">
                <p className="userResponseRequest">Prixd'une demi-journée:</p> <p className="userResponseInfos">{halfDayPrice} &euro;</p>
              </div>
            </div>

            <ThemeProvider theme={themeButton}>

              {/* type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    width: '100%',
                    height: '85%',
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    lineHeight: '0.9rem',
                    display: 'none',
                  }} */}

              <Button
                variant="contained"
                size="small"
                onClick={handleOpenModaleInfos}
              // onClick={openPicturesModale}
                sx={{
                  width: '30%',
                  height: 40,
                  color: 'white',
                  fontSize: 10,
                  backgroundColor: '#FFC000',
                  // ':hover': {
                  //   backgroundColor: '#8A8A8A',
                  //   color: '#FFC000',
                  // },
                }}
              >Ajouter
              </Button>
            </ThemeProvider>

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
                label="Nom de l'annonce"
                multiline
                maxRows={4}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="adress"
                label="Adresse"
                multiline
                maxRows={4}
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="zipCode"
                label="Code Postal"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="city"
                label="Ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="fullDayPrice"
                label="Prix pour une journée"
                type="number"
                value={fullDayPrice}
                onChange={(e) => setFullDayPrice(e.target.value)}
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />
              <TextField
                id="halfDayPrice"
                label="Prix pour une demi journée"
                type="number"
                value={halfDayPrice}
                onChange={(e) => setHalfDayPrice(e.target.value)}
                size="small"
                required
                sx={{
                  width: '100%',
                }}
              />

              <ThemeProvider theme={themeButton}>

                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  sx={{
                    color: 'white',
                    // marginBottom: '1.5rem',
                    width: '50%',
                    // fontSize: 10,
                    backgroundColor: '#FFC000',
                    // ':hover': {
                    //   backgroundColor: '#8A8A8A',
                    //   color: '#FFC000',
                    // },
                  }}
                >Valider
                </Button>
              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleCloseModaleInfos}
                sx={{

                  color: 'black',
                  position: 'absolute',
                  top: 10,
                  right: 10,
                }}
              >
                <CancelOutlined sx={{ fontSize: 26 }} />
              </IconButton>

            </Box>
          </Modal>

          <div className="mainImage">

            <h3 className="h3WorkspaceEdition">Image principale</h3>
            <div className="workspaceEditionContainer__mainImageContainer">
              <img className="workspaceEditionContainer__mainImageContainer__img" src={fileDataURL} alt="" />
            </div>

            {/* <form onSubmit={handleSubmit}> */}
            <ThemeProvider theme={themeButton}>
              <Button
                variant="contained"
                component="label"
                onClick={handleOpenMainImageModale}
                sx={{
                  width: '50%',
                  height: 40,
                  marginTop: '.7rem',
                  color: 'white',
                  fontSize: 10,
                  backgroundColor: '#FFC000',
                // ':hover': {
                //   backgroundColor: '#8A8A8A',
                //   color: '#FFC000',
                // },
                }}
              >
                Ajouter

              </Button>
            </ThemeProvider>

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
                Image principale
              </Typography>

              <div className="workspaceEditionContainer__mainImageContainer">
                <img className="workspaceEditionContainer__mainImageContainer__img" src={fileDataURL || 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/no-image-1-1.png'} alt="" />
              </div>

              <ThemeProvider theme={themeButton}>

                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: '30%',
                    height: 40,
                    marginTop: '.7rem',
                    color: 'white',
                    fontSize: 10,
                    backgroundColor: '#FFC000',
                  // ':hover': {
                  //   backgroundColor: '#8A8A8A',
                  //   color: '#FFC000',
                  // },
                  }}
                >
                  {textButtonModalImage}
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
                    color: 'white',
                    fontSize: 10,
                    backgroundColor: '#FFC000',

                  }}
                >valider
                </Button>
              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleCloseMainImageModale}
                sx={{

                  color: 'black',
                  position: 'absolute',
                  top: 10,
                  right: 10,
                }}
              >
                <CancelOutlined sx={{ fontSize: 26 }} />
              </IconButton>

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

            <ThemeProvider theme={themeButton}>
              <Button
                variant="contained"
                size="small"
                onClick={handleOpenModaleImages}
                sx={{
                  width: '30%',
                  height: 40,
                  color: 'white',
                  marginTop: '1rem',
                  fontSize: 10,
                  backgroundColor: '#FFC000',
                }}
              >Ajouter une photos
              </Button>

            </ThemeProvider>
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

              <ThemeProvider theme={themeButton}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: '30%',
                    height: 40,
                    marginTop: '.7rem',
                    color: 'white',
                    fontSize: 10,
                    backgroundColor: '#FFC000',
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
                    color: 'white',
                    fontSize: 10,
                    backgroundColor: '#FFC000',
                  }}
                >valider
                </Button>

              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleCloseModaleImages}
                sx={{

                  color: 'black',
                  position: 'absolute',
                  top: 10,
                  right: 10,
                }}
              >
                <CancelOutlined sx={{ fontSize: 26 }} />
              </IconButton>

            </Box>
          </Modal>

          <div className="descriptionContainer">
            <h3 className="h3WorkspaceEdition">Description</h3>
            <div className="descriptionContainer__description">
              <p>{description}</p>
            </div>

            <ThemeProvider theme={themeButton}>
              <Button
                variant="contained"
                size="small"
                onClick={handleOpenModaleDesc}
                sx={{
                  width: '30%',
                  height: 40,
                  color: 'white',
                  fontSize: 10,
                  backgroundColor: '#FFC000',
                }}
              >Modifier
              </Button>

            </ThemeProvider>

          </div>

          <Modal
            open={openModaleDesc}
            onClose={handleCloseModaleDesc}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={handleDescriptionFormSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Description
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

              <ThemeProvider theme={themeButton}>

                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  sx={{
                    color: 'white',
                    // marginBottom: '1.5rem',
                    width: '50%',
                    // fontSize: 10,
                    backgroundColor: '#FFC000',
                  }}
                >Valider
                </Button>
              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleCloseModaleDesc}
                sx={{

                  color: 'black',
                  position: 'absolute',
                  top: 10,
                  right: 10,
                }}
              >
                <CancelOutlined sx={{ fontSize: 26 }} />
              </IconButton>

            </Box>
          </Modal>

          <div className="equipmentContainer">
            <h3 className="h3WorkspaceEdition">Liste des equipements disponibles</h3>
            <div className="equipmentsListContainer">
              {
                equipments.map((equipment) => (
                  <div className="equipmentsListContainer__equipment" key={equipment.id}>
                    <img className="equipment_icon" src={`${UrlImage}${equipment.icon_link}`} alt={equipment.description} />
                    <p className="equipmentsListContainer__equipment__name">{equipment.description}</p>
                  </div>
                ))
              }
            </div>

            <ThemeProvider theme={themeButton}>

              <Button
                variant="contained"
                size="small"
                onClick={handleOpenModaleEquipments}
                sx={{
                  width: '30%',
                  height: 40,
                  color: 'white',
                  fontSize: 10,
                  backgroundColor: '#FFC000',

                }}
              >Ajouter des equipements
              </Button>
            </ThemeProvider>

          </div>

          <Modal
            open={openModaleEquipments}
            onClose={handleCloseModaleEquipments}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={handleEquipmentsSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Equipements
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

              <ThemeProvider theme={themeButton}>
                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  sx={{
                    width: '30%',
                    height: 40,
                    color: 'white',
                    fontSize: 10,
                    backgroundColor: '#FFC000',
                  }}
                >valider
                </Button>

              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleCloseModaleEquipments}
                sx={{

                  color: 'black',
                  position: 'absolute',
                  top: 10,
                  right: 10,
                }}
              >
                <CancelOutlined sx={{ fontSize: 26 }} />
              </IconButton>

            </Box>
          </Modal>

          <ThemeProvider theme={themeButton}>

            <Button
              variant="contained"
              size="small"
              type="button"
              onClick={handleCreateWorkspace}
              sx={{
                width: '20%',
                ml: 'auto',
                mr: 'auto',
                height: 45,
                color: 'white',
                fontSize: 15,
                backgroundColor: '#FFC000',
                marginTop: '1rem',
              }}
            >Mettre en ligne mon annonce
            </Button>
          </ThemeProvider>

        </div>
      </div>
      )
      }

      <Box sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999999999999999,
      }}
      >
        <Collapse in={openAlert}>
          <Alert
            action={(
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
              )}
            sx={{ mb: 2 }}
            severity="error"
          >
            Quelque chose s'est mal passer veuillez reesayer ulterieurement!
          </Alert>
        </Collapse>
      </Box>
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
