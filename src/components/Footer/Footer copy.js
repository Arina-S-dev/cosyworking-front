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
        className="Footer-Paper"
        component="footer"
        square
        // variant="outlined"
        sx={{
          /* position du footer */
          // marginTop: '90%',
          position: 'sticky',
          bottom: 0,
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          borderBottom: 'none',
        }}
        // z-index du footer
        elevation={3}
      >
        {/* Elements du footer */}
        <BottomNavigation
          className="Footer-Paper-BottomNavigation"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: 'auto',
          }}
        >
          <Typography
            sx={{
              lineHeight: '0.9rem',
            }}
          >
            <Link className="Footer-links" to="">
              A propos
            </Link>
          </Typography>
          <Typography
            sx={{
              lineHeight: '0.9rem',
            }}
          >
            <Link className="Footer-links" to="">Contactez-nous</Link>
          </Typography>
          <Typography
            sx={{
              lineHeight: '0.9rem',
            }}
          >
            <Link className="Footer-links" to="">FAQ</Link>
          </Typography>
          <Typography
            sx={{
              lineHeight: '0.9rem',
            }}
          >
            <Link className="Footer-links" to="">Mentions légales</Link>
          </Typography>
          <Typography
            sx={{
              lineHeight: '0.9rem',
            }}
          >
            <Link className="Footer-links" to="">CGV</Link>
          </Typography>
          <Typography
            sx={{
              lineHeight: '0.9rem',
            }}
          >
            <Link className="Footer-links" to="">@ {year} CosyWorking</Link>
          </Typography>
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Footer;
