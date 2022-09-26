import { BottomNavigation, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import './styles.scss';

function Footer() {
  const year = dayjs().year();
  return (
    <div className="Footer">
      {/* Composant Mui du footer */}
      <Paper
        sx={{
          /* position du footer */
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          paddingLeft: '1rem',
          paddingRight: '1rem',
          height: '30px',
        }}
        // z-index du footer
        elevation={3}
      >
        {/* Elements du footer */}
        <BottomNavigation
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography>
            <Link className="Footer-links" to="">A propos</Link>
          </Typography>
          <Typography>
            <Link className="Footer-links" to="">Contactez-nous</Link>
          </Typography>
          <Typography>
            <Link className="Footer-links" to="">FAQ</Link>
          </Typography>
          <Typography>
            <Link className="Footer-links" to="">Mentions légales</Link>
          </Typography>
          <Typography>
            <Link className="Footer-links" to="">CGV</Link>
          </Typography>
          <Typography>
            <Link className="Footer-links" to="">@ {year} CosyWorking</Link>
          </Typography>
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Footer;
