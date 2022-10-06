import Card from '@mui/material/Card';
import MyAccountMenu from '../../../MyAccountMenu';

import './style.scss';

function MyRequests() {
  return (
    <>
      <MyAccountMenu />
      <div>Mes demandes</div>
      <div className="card-container">
        <Card sx={{ maxWidth: 700 }}>
          <p>Ma première demande</p>
        </Card>
      </div>
    </>
  );
}

export default MyRequests;
