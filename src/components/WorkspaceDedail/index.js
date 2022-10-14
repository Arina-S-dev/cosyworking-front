/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

// imports components
import LeafletMap from './Map';
import Calendar from './Calendar';
import SliderComponent from './Slider';
import BookingBarMobile from './BookingBarMobile';
import ImagesContainer from './ImagesContainer';
import CalendarModal from './ModalCalendar';
import ImagesSliderModal from './ImagesSliderModal';
import { actionGetWorkspaceDetail } from '../../actions/workspaces';
import UrlImage from '../../axiosUrlImage';

// import style
import './style.scss';

function WorkspaceDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // console.log('useEFFECT');
    // console.log(new Date('2022-10-20T06:00:00+00:00'));
    // console.log(new Date('2022-10-20T15:00:00+00:00'));
    dispatch(actionGetWorkspaceDetail(id));
  }, []);

  const workspace = useSelector((state) => state.workspaces.currentWorkspace);
  const submitStatus = useSelector((state) => state.workspaces.submitStatus);
  // const isLoading = useSelector((state) => state.workspaces.isLoading);
  // eslint-disable-next-line no-console
  // console.log('WORSPACE====>', workspace);
  // if (workspace) {
  //   console.log('WORSPACEIMAGES====>', workspace.images);
  //   console.log('WORSPACEUSER====>', workspace.user[0]);
  //   console.log('WORSPACE ID====>', workspace.workspace.id);
  // }

  const [PictureModalOpen, setpictureModalOpen] = useState(false);
  const [CalendarModalOpen, setcalendarModalOpen] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

  const calendarModalClassName = CalendarModalOpen ? 'calendarModal' : 'isHidden';
  // const equipmentsList = workspace.equipments_list;

  if (submitStatus === 'fail' && !openAlert) {
    setOpenAlert(true);
    dispatch({
      type: 'BOOKING_SUBMIT_STATUS',
      submitStatus: null,
    });
  }

  return (

    <div>

      {workspace && (

      <div className=" workspaceDetail">
        <Box sx={{
          width: '100%',
          position: 'fixed',
          top: 50,
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
              Quelque chose s'est mal passée, veuillez reesayer ulterieurement!
            </Alert>
          </Collapse>
        </Box>

        {/* modale calendrier pour version mobile */}
        <CalendarModal className={calendarModalClassName} halfDayPrice={workspace.workspace.half_day_price} dayPrice={workspace.workspace.day_price} closeCalendarModale={() => (setcalendarModalOpen(false))} />

        {/* carousel d'images (version mobile) */}
        <div className="sliderMobileContainer">
          <SliderComponent classCss="slider" imagesList={workspace.images} />
        </div>

        {/* modale avec carousel d'images (version desktop) */}
        <ImagesSliderModal PictureModalOpen={PictureModalOpen} closePictureModal={() => (setpictureModalOpen(false))} imagesList={workspace.images} />

        {/* mosaique d'images pour la version desktop    */}
        <ImagesContainer
          imagesList={workspace.images}
          openPicturesModale={() => {
            setpictureModalOpen(true);
          }}
        />

        {/* entete titre et lien vers les commentaires commentaires  */}
        <div className="titleContainer">

          <h2 className="titleContainer_title">{workspace.workspace.title}</h2>

          <div className="hostDesc_comments">
            <p className="stars">&#9733; 4.5</p>
            <a href="#">comments(12)</a>
          </div>
        </div>

        {/* description hote */}
        <div className="hostDesc">
          {/* <div className="hostDesc_hostInfos">
            <Avatar alt={workspace.user[0].host} src={workspace.user[0].host_avatar} />
            <p className="hostName">{workspace.user[0].host}</p>
          </div> */}
          <Link to={`/profil/${workspace.user[0].host_id}`} className="hostDesc_hostInfos">
            <Avatar alt={workspace.user[0].host} src={`${UrlImage}${workspace.user[0].host_avatar}`} />
            <p className="hostName">{workspace.user[0].host}</p>
          </Link>
        </div>

        <section className="detailContainer">

          <div className="detailContainer_left">

            <div className="detailContainer_left_equipmentContainer">
              <h3>Liste des equipements disponibles</h3>
              <div className="equipmentDesc">
                {
                  workspace.equipments_list.map((equipment) => (
                    <div className="equipment" key={equipment.equipment_id}>
                      {/* <Avatar alt={equipment.description} src={equipment.icon_link} /> */}
                      <img className="equipment_icon" src={`${UrlImage}${equipment.icon_link}`} alt={equipment.description} />
                      <p className="equipmentName">{equipment.description}</p>
                    </div>
                  ))
        }
              </div>
            </div>

            <div className="detailContainer_left_workspaceDesc">
              <h3>Description du bien</h3>
              <p className="Desc">
                {workspace.workspace.description}
              </p>
            </div>
          </div>

          <div className="detailContainer_right">

            <Calendar dayPrice={workspace.workspace.day_price} halfDayPrice={workspace.workspace.half_day_price} workspaceId={workspace.workspace.id} host={workspace.user[0].host} />

          </div>
        </section>

        {/* map leaflet  */}
        <LeafletMap latitude={Number(workspace.workspace.latitude)} longitude={Number(workspace.workspace.longitude)} />

        {/* barre de reservation pour la version mobile  */}
        <BookingBarMobile halfDayPrice={workspace.workspace.half_day_price} dayPrice={workspace.workspace.day_price} openCalendarModale={() => (setcalendarModalOpen(true))} />

      </div>
      )}
    </div>

  );
}

export default WorkspaceDetail;
