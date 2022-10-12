import './AboutUs.scss';
import Arina from '../../img/avatar_femme_arina.png';
import Clement from '../../img/avatar_homme_clement.png';
import Corentin from '../../img/avatar_homme_corentin.png';
import Cyril from '../../img/avatar_homme_cyril.png';
import Quentin from '../../img/avatar_homme_quentin.png';
import Nicolas from '../../img/avatar_homme_nicolas.png';
import aboutUs from '../../img/aboutUs.png';

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUsImgDiv">
        <img src={aboutUs} alt="a propos" className="aboutUsIMG" />
      </div>
      <div className="ourProject">
        <h2 className="projectTitle"> Notre Objectif</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius quis augue at
          elementum.Nunc sit amet mollis tortor, in porta purus. Vivamus gravida rutrum elit, et
          ultricies orci euismod quis. Aenean ullamcorper consectetur nulla nec faucibus.
          Vivamus tincidunt velit faucibus, ornare nisl nec, maximus metus. In nisi ante,
          convallis vel velit vitae, imperdiet eleifend magna. Fusce magna nisi, fermentum
          eu posuere non, commodo non felis. Aenean accumsan mollis suscipit.Pellentesque tempor
          tellus in consectetur finibus. Integer non ante turpis. In lacinia ornare dictum.Phasellus
          condimentum elementum purus sed rutrum. Aenean a auctor risus. Maecenas aliquam arcu augue
          at rutrum.
        </p>
      </div>
      <div className="team">
        <h2 className="teamTitle"> Notre Equipe</h2>
        <div className="teamCard">
          <div className="card">
            <img className="teamCardIMG" src={Arina} alt="Membre de l'équipe" />
            <div className="teamCardInfos">
              <h3> Arina</h3>
              <h4>Git Master</h4>
            </div>
          </div>
          <div className="card">
            <img className="teamCardIMG" src={Clement} alt="Membre de l'équipe" />
            <div className="teamCardInfos">
              <h3> Clement</h3>
              <h4>Scrum Master</h4>
            </div>
          </div>
          <div className="card">
            <img className="teamCardIMG" src={Corentin} alt="Membre de l'équipe" />
            <div className="teamCardInfos">
              <h3> Corentin</h3>
              <h4>Lead Dev Back</h4>
            </div>
          </div>
          <div className="card">
            <img className="teamCardIMG" src={Quentin} alt="Membre de l'équipe" />
            <div className="teamCardInfos">
              <h3> Quentin</h3>
              <h4>Product Owner</h4>
            </div>
          </div>
          <div className="card">
            <img className="teamCardIMG" src={Cyril} alt="Membre de l'équipe" />
            <div className="teamCardInfos">
              <h3> Cyril</h3>
              <h4>Lead Dev Front</h4>
            </div>
          </div>
          <div className="card">
            <img className="teamCardIMG" src={Nicolas} alt="Membre de l'équipe" />
            <div className="teamCardInfos">
              <h3> Nicolas</h3>
              <h4>Référent UX / UI</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
