/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHours, format } from 'date-fns/esm';
import { LoadingButton } from '@mui/lab';
import {
  Button, IconButton, Modal, Typography, Box, TextField, FormControlLabel, Checkbox,
  TableBody, TableCell, TableHead, TableRow, Table, ThemeProvider,
} from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import themeButton from '../../tools/themeMui';
// eslint-disable-next-line import/no-unresolved
import Calendar from './Calendar';
import UrlImage from '../../axiosUrlImage';

// import style
import './style.scss';
import MyAccountMenu from '../MyAccountMenu';

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

function WorkspaceEdition() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: 'GET_EQUIPMENTS_LIST',
    });
    dispatch({
      type: 'GET_WORKSPACE_TO_EDIT',
      workspaceId: id,
    });
  }, []);

  //   const workspace = useSelector((state) => state.workspaces.currentWorkspace);
  const workspace = useSelector((state) => state.workspaces.workspaceToEdit);
  const imagesModalIsOpen = useSelector((state) => state.workspaces.imagesModalIsOpen);
  const imagesAreLoading = useSelector((state) => state.workspaces.imagesAreLoading);
  const workspaceIsLoading = useSelector((state) => state.workspaces.workspaceIsLoading);
  const mainImage = useSelector((state) => state.workspaces.mainImage);
  const otherImages = useSelector((state) => state.workspaces.otherImages);
  const equipmentsListFromAPI = useSelector((state) => state.workspaces.equipmentsList);
  // const bookingList = workspace.booking_list;
  console.log('MainImage ==>', mainImage);
  console.log('otherImages ==>', otherImages);
  // console.log('bookingList ==>', workspace.booking_list);
  console.log('WORKSPACE====>', workspace);
  console.log('imagesAreLoading ==>', imagesAreLoading);
  console.log('equipmentsListFromAPI ==>', equipmentsListFromAPI);

  const [openModal, setOpenModal] = useState({
    infos: false,
    image: false,
    images: false,
    description: false,
    equipments: false,
  });

  const handleModal = (modaleName, modalStatus) => () => {
    console.log('HANDLE MODALE===>', modaleName, modalStatus);
    setOpenModal({ ...openModal, [modaleName]: modalStatus });
  };

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const [fileOtherImage, setFileOtherImage] = useState(null);
  const [fileDataURLOtherImage, setFileDataURLOtherImage] = useState(null);

  const textButtonModalOtherImages = fileOtherImage ? 'Modifier' : 'Ajouter une image';

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

    if (workspace.equipments_list.find((equipment) => equipment.equipment_id === equipmentId)) {
      console.log('EQUIPMENT IS IN LIST==>');
      const filteredEquipmentsList = workspace.equipments_list.filter((equipment) => equipment.equipment_id !== equipmentId);
      console.log('filteredEquipmentsList==>', filteredEquipmentsList);
      dispatch({
        type: 'SET_WORKSPACE_EQUIPMENTS_LIST',
        workspaceEquipmentsList: filteredEquipmentsList,
      });
    }
    else {
      console.log('EQUIPMENT IS NOT IN LIST');
      const equipmentToAdd = equipmentsListFromAPI.find((equipment) => equipment.id === equipmentId);
      console.log(equipmentToAdd);
      const modifiedEquipmentsList = [...workspace.equipments_list, { equipment_id: equipmentToAdd.id, description: equipmentToAdd.description, icon_link: equipmentToAdd.icon_link }];
      dispatch({
        type: 'SET_WORKSPACE_EQUIPMENTS_LIST',
        workspaceEquipmentsList: modifiedEquipmentsList,
      });
    }
  };

  const handleAddNewImage = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('workspace_image', fileOtherImage);

    console.log('handleAddNewImage ==>', formData);

    dispatch({
      type: 'ADD_NEW_IMAGE_TO_WORKSPACE',
      payload: {
        data: formData,
        id: id,
      },
    });

    setFileDataURLOtherImage(null);
  };

  const handleAddNewMainImage = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('workspace_mainImage', file);

    console.log('handleAddNewMAINImage  ==>');

    dispatch({
      type: 'ADD_NEW_IMAGE_TO_WORKSPACE',
      payload: {
        data: formData,
        id: id,
      },
    });

    setOpenModal({ ...openModal, image: false });
  };

  const handleSubmit = (event, modalName) => {
    event.preventDefault();

    const formData = new FormData();

    workspace.equipments_list.forEach((equipment) => formData.append('equipments', equipment.equipment_id));
    formData.append('title', workspace.workspace.title);
    formData.append('address', workspace.workspace.address);
    formData.append('zip_code', workspace.workspace.zip_code);
    formData.append('city', workspace.workspace.city);
    formData.append('description', workspace.workspace.description);
    formData.append('day_price', workspace.workspace.day_price);
    formData.append('half_day_price', workspace.workspace.half_day_price);

    console.log(formData);

    dispatch({
      type: 'UPDATE_WORKSPACE',
      payload: {
        data: formData,
        id: id,
      },
    });
    console.log('handleInfosSubmit ==>');

    setOpenModal({ ...openModal, [modalName]: false });
    // setOpenModal({ ...openModal, equipments: false });
    // setOpenModal({ ...openModal, infos: false });
  };

  // const handleEquipmentsSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('handleEquipmentsSubmit ==>');
  // };

  const handleInfosChange = (event, inputName) => {
    const inputNameToUpperCase = inputName.toUpperCase();
    console.log(inputNameToUpperCase);
    console.log(event.target.value);
    dispatch({
      type: `SET_${inputNameToUpperCase}`,
      payload: event.target.value,
    });
  };

  const removeImageFromList = (event, imageId, imageLink) => {
    event.stopPropagation();

    dispatch({
      type: 'DELETE_IMAGE_FROM_WORKSPACE',
      payload: {
        workspaceId: id,
        imageId: imageId,
        imageLink: imageLink,
      },
    });

    console.log('handle remove', imageId, imageLink);
    // const filteredImagesList = otherImages.filter((image) => image.name !== imageId);
    // setOtherImages(filteredImagesList);
  };

  useEffect(() => {
    dispatch({
      type: 'CONTROL_BAR_ESPACE_PERSO',
      getAccessNavBar: true,
    });
  }, []);

  return (
    <div>
      <MyAccountMenu />
      <h1 className="workspaceEditionTitle">Modifier mon annonce</h1>

      {
        !workspaceIsLoading && equipmentsListFromAPI
      && (
      <div className="workspaceEdition">

        <div className=" workspaceEditionContainer">

          <div className="infosContainer">
            <h3 className="h3WorkspaceEdition">Infos</h3>

            <div className="infosContainer__infos">
              <p>Titre: {workspace.workspace.title} </p>
              <p>adresse: {workspace.workspace.address}</p>
              <p>Code postale: {workspace.workspace.zip_code}</p>
              <p>Ville: {workspace.workspace.city}</p>
              <p>Prix journée complète: {workspace.workspace.day_price}&euro;</p>
              <p>Prix demi-journée: {workspace.workspace.half_day_price}&euro;</p>
            </div>

            <ThemeProvider theme={themeButton}>

              <Button
                variant="contained"
                size="small"
                onClick={handleModal('infos', true)}
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
            open={openModal.infos}
            onClose={handleModal('infos', false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={(event) => handleSubmit(event, 'infos')}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Informations générales
              </Typography>
              <TextField
                id="title"
                label="title"
                multiline
                maxRows={4}
                value={workspace.workspace.title}
                onChange={(e) => handleInfosChange(e, 'title')}
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
                value={workspace.workspace.address}
                onChange={(e) => handleInfosChange(e, 'address')}
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
                value={workspace.workspace.zip_code}
                onChange={(e) => handleInfosChange(e, 'zip_code')}
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
                value={workspace.workspace.city}
                onChange={(e) => handleInfosChange(e, 'city')}
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
                value={workspace.workspace.day_price}
                onChange={(e) => handleInfosChange(e, 'day_price')}
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
                value={workspace.workspace.half_day_price}
                onChange={(e) => handleInfosChange(e, 'half_day_price')}
                placeholder="prix journée"
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
                    width: '50%',
                    backgroundColor: '#FFC000',
                  }}
                >Valider
                </Button>
              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleModal('infos', false)}
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
              {
                mainImage
                && (
                  <img className="workspaceEditionContainer__mainImageContainer__img" src={fileDataURL || `${UrlImage}${mainImage[0].link}`} alt="" />
                )
              }
            </div>

            {/* <form onSubmit={handleSubmit}> */}

            <ThemeProvider theme={themeButton}>

              <Button
                variant="contained"
                size="small"
                onClick={handleModal('image', true)}
                sx={{
                  width: '100%',
                  height: 40,
                  marginTop: '.7rem',
                  color: 'white',
                  fontSize: 10,
                  backgroundColor: '#FFC000',

                }}
              >Modifier
              </Button>
            </ThemeProvider>

            {/* </form> */}

          </div>

          <Modal
            open={openModal.image}
            onClose={handleModal('image', false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={handleAddNewMainImage}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Image principale
              </Typography>

              <div className="workspaceEditionContainer__mainImageContainer">
                {
                  mainImage
                  && (
                    <img className="workspaceEditionContainer__mainImageContainer__img" src={fileDataURL || mainImage[0].link} alt="" />
                  )
                }
              </div>

              <ThemeProvider theme={themeButton}>

                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: '30%',
                    // height: 40,
                    // marginTop: '.7rem',
                    color: 'white',
                    // fontSize: 10,
                    backgroundColor: '#FFC000',
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
                    // height: 40,
                    color: 'white',
                    // fontSize: 10,
                    backgroundColor: '#FFC000',
                  }}
                >valider
                </Button>
              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleModal('image', false)}
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
              otherImages && otherImages.map((image) => (
                <div key={image.image_id} className="listItem">
                  <div className="listItem__imageContainer">
                    <img className="listItem__imageContainer__img" src={`${UrlImage}${image.link}`} alt="" />
                  </div>
                  <IconButton
                    aria-label="delete"
                    onClick={(event) => removeImageFromList(event, image.image_id, image.link)}
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
                onClick={() => {
                  dispatch({
                    type: 'SET_IMAGES_MODAL_STATUS',
                    isOpen: true,
                  });
                }}
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
            open={imagesModalIsOpen}
            onClose={() => {
              dispatch({
                type: 'SET_IMAGES_MODAL_STATUS',
                isOpen: false,
              });
            }}
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
                    // height: 40,
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
              </ThemeProvider>

              {
              !imagesAreLoading

                && (
                  <ThemeProvider theme={themeButton}>

                    <Button
                      variant="contained"
                      size="small"
                      type="submit"
                      disabled={!fileOtherImage}
                    // onClick={handleModal('images', false)}
                      sx={{
                        width: '30%',
                        // height: 40,
                        color: 'white',
                        // fontSize: 10,
                        backgroundColor: '#FFC000',
                      }}
                    >valider
                    </Button>

                  </ThemeProvider>
                )
            }

              {
              imagesAreLoading

                && (
                  <ThemeProvider theme={themeButton}>

                    <LoadingButton loading variant="outlined">
                      Submit
                    </LoadingButton>

                  </ThemeProvider>
                )
            }

              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => {
                  dispatch({
                    type: 'SET_IMAGES_MODAL_STATUS',
                    isOpen: false,
                  });
                }}
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
              <p>{workspace.workspace.description}</p>
            </div>

            <ThemeProvider theme={themeButton}>

              <Button
                variant="contained"
                size="small"
                onClick={handleModal('description', true)}
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
            open={openModal.description}
            onClose={handleModal('description', false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={(event) => handleSubmit(event, 'description')}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Description
              </Typography>

              <TextField
                id="description"
                label="description"
                multiline
                rows={12}
                value={workspace.workspace.description}
                onChange={(e) => handleInfosChange(e, 'description')}
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
                    width: '50%',
                    backgroundColor: '#FFC000',
                  }}
                >Valider
                </Button>
              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleModal('description', false)}
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
                workspace.equipments_list.map((equipment) => (
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
                onClick={handleModal('equipments', true)}
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
            open={openModal.equipments}
            onClose={handleModal('equipments', false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={(event) => handleSubmit(event, 'equipments')}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Equipements
              </Typography>

              <div className="equipmentsListModal">
                {equipmentsListFromAPI.map((equipment) => (
                  <FormControlLabel
                    control={<Checkbox checked={Boolean(workspace.equipments_list.find((equipmentInList) => equipmentInList.equipment_id === equipment.id))} />}
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
                  size="medium"
                  type="submit"
                  sx={{
                    color: 'white',
                    width: '50%',
                    backgroundColor: '#FFC000',
                  }}
                >Valider
                </Button>
              </ThemeProvider>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleModal('equipments', false)}
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

          {
            workspace.booking_list
            && (

            <div className="workspaceEditionContainer__bookingsContainer">
              <h3 className="h3WorkspaceEdition">Réservations</h3>
              <div className="workspaceEditionContainer__bookingsContainer__content">
                <Calendar />
                <div className="workspaceEditionContainer__bookingsContainer__bookingsDate">
                  <Table
                    sx={{
                      minWidth: 'auto',
                    }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontWeight: 'bold',
                          }}
                          align="center"
                        >
                          Numero
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 'bold',
                          }}
                          align="center"
                        >
                          Date
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 'bold',
                          }}
                          align="center"
                        >
                          Creneau
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {workspace.booking_list.map((booking) => (
                        <TableRow
              // e  slint-disable-next-line react/no-array-index-key
                          key={booking.booking_id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align="center" component="th" scope="row">{booking.booking_id}</TableCell>
                          <TableCell align="center">{ format(new Date(booking.start_date), 'dd/MM/yy') }</TableCell>
                          <TableCell align="center">{getHours(new Date(booking.start_date))}H-{getHours(new Date(booking.end_date))}H</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                </div>
              </div>
            </div>
            )
          }
        </div>
      </div>
      )
      }
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
