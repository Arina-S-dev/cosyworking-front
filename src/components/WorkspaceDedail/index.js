/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Avatar } from '@mui/material';

// imports components
import LeafletMap from './Map';
import Calendar from './Calendar';
import SliderComponent from './Slider';
import BookingBarMobile from './BookingBarMobile';
import ImagesContainer from './ImagesContainer';
import CalendarModal from './ModalCalendar';
import ImagesSliderModal from './ImagesSliderModal';

// import style
import './style.scss';

function WorkspaceDetail() {
  const workspace = useSelector((state) => state.workspaces.currentWorkspace);
  // eslint-disable-next-line no-console
  console.log(workspace);
  const [PictureModalOpen, setpictureModalOpen] = useState(false);
  const [CalendarModalOpen, setcalendarModalOpen] = useState(false);

  const calendarModalClassName = CalendarModalOpen ? 'calendarModal' : 'isHidden';
  const equipmentsList = workspace.equipments_list;

  return (

    <div className=" workspaceDetail">

      {/* modale calendrier pour version mobile */}
      <CalendarModal className={calendarModalClassName} halfDayPrice={workspace.halfDayPrice} dayPrice={workspace.dayPrice} closeCalendarModale={() => (setcalendarModalOpen(false))} />

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

        <h2 className="title">{workspace.title}</h2>

        <div className="hostDesc_comments">
          <p className="stars">&#9733; 4.5</p>
          <a href="#">comments(12)</a>
        </div>
      </div>

      {/* description hote */}
      <div className="hostDesc">
        <div className="hostDesc_hostInfos">
          <Avatar alt={workspace.user.host} src={workspace.user.host_avatar} />
          <p className="hostName">{workspace.user.host}</p>
        </div>
      </div>

      <section className="detailContainer">

        <div className="detailContainer_left">

          <div className="detailContainer_left_equipmentContainer">
            <h3>Liste des equipements disponibles</h3>
            <div className="equipmentDesc">
              {
              equipmentsList.map((equipment) => (
                <div className="equipment" key={equipment.id}>
                  <Avatar alt={equipment.description} src={equipment.icon} />
                  <p className="equipmentName">{equipment.description}</p>
                </div>
              ))
            }
            </div>
          </div>

          <div className="detailContainer_left_workspaceDesc">
            <h3>Description du bien</h3>
            <p className="Desc">
              {workspace.description}
            </p>
          </div>
        </div>

        <div className="detailContainer_right">

          <Calendar dayPrice={workspace.dayPrice} halfDayPrice={workspace.halfDayPrice} />

        </div>
      </section>

      {/* map leaflet  */}
      <LeafletMap latitude={workspace.latitude} longitude={workspace.longitude} />

      {/* barre de reservation pour la version mobile  */}
      <BookingBarMobile halfDayPrice={workspace.halfDayPrice} dayPrice={workspace.dayPrice} openCalendarModale={() => (setcalendarModalOpen(true))} />

    </div>
  );
}

export default WorkspaceDetail;
