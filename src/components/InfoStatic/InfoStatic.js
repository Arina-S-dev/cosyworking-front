import './InfoStatic.scss';
import SearchIMG from '../../img/searchHouseWork.png';
import Contact from '../../img/contact.png';
import Desk from '../../img/desk.png';

function InfoStatic() {
  return (
    <div className="infoStatic">
      <div className="infoTitle">
        Comment fonctionne Cosy Working ?
      </div>
      <div className="tilesGroup">
        <div className="tileInfo">
          <img className="tileIMG " src={SearchIMG} alt="recherche house work" />
          <h2>Recherchez votre futur bureau</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate et mauris a
            lobortis. In pharetra bibendum nisl sit amet blandit. Aenean sodales blandit ligula,
            scelerisque semper ante ornare consectetur.
          </p>
        </div>
        <div className="tileInfo">
          <img className="tileIMG " src={Contact} alt="recherche house work" />
          <h2>Entrez en contact avec votre futur hôte</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate et mauris a
            lobortis. In pharetra bibendum nisl sit amet blandit. Aenean sodales blandit ligula,
            scelerisque semper ante ornare consectetur.
          </p>
        </div>
        <div className="tileInfo">
          <img className="tileIMG " src={Desk} alt="recherche house work" />
          <h2>Profitez de votre espace de travail</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate et mauris a
            lobortis. In pharetra bibendum nisl sit amet blandit. Aenean sodales blandit ligula,
            scelerisque semper ante ornare consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoStatic;
