import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../img/logo.png';

function Footer() {
  const year = dayjs().year();
  return (
    <div className="Footer">
      <div className="topFooter">
        <div className="logoContainer">
          <img className="logoFooter" src={logo} alt="logo" />
          <div className="infos">
            <p className="adressFooter"> Boulevard des Champs Elysées <br /> 75000 PARIS</p>
            <Link className="contactButton" to="/">Revenir à l'accueil</Link>
          </div>
        </div>
        <div className="footerNavBar">
          <p className="titleFooter"> Navigation</p>
          <Link className="navigationFooter-links" to="/">Accueil</Link>
          <Link className="navigationFooter-links" to="/recherche">Rechercher une Location</Link>
          <Link className="navigationFooter-links" to="/faq">FAQ</Link>
          <Link className="navigationFooter-links" to="/">A Propos</Link>
          <Link className="navigationFooter-links" to="/contact">Contactez-nous</Link>
        </div>
        <div className="follow">
          <p className="titleFooter"> Suivez-nous</p>
          <div>
            <FacebookIcon className="socialsFooter" />
            <InstagramIcon className="socialsFooter" />
            <TwitterIcon className="socialsFooter" />
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="border" />
        <div className="bottomLinks">
          <Link className="bottomFooter-links" to="/mentionslegales">Mentions légales</Link>
          <Link className="bottomFooter-links" to="/cgv">CGV</Link>
          <Link className="bottomFooter-links" to="/">@ {year} CosyWorking</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
