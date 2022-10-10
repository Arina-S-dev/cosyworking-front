import './Faq.scss';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionImg from '../../img/bureaufaq.png';

function Faq() {
  return (
    <div className="faqContainer">
      <div className="title">
        <img className="questionImg" src={QuestionImg} alt="Question" />
        <h1> Nous avons les réponses à vos questions </h1>
      </div>
      <div className="questionContainer">
        <div className="ColumnLeft">
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
        <div className="ColumnRight">
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo leo
                non sapien accumsan luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed quis hendrerit ligula. Nullam imperdiet
                ut sapien ac egestas. Sed sagittis sollicitudin erat. Duis rutrum est.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="contactFaq">
        <h1> Vous n'avez pas trouvé votre réponse ?  </h1>
        <Link className="buttonToContact" to="/">Contactez-nous</Link>
      </div>
    </div>
  );
}

export default Faq;
