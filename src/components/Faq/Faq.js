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
              <Typography sx={{ width: '100%' }}>Est-ce que en tant coworker je peux déposer une annonce ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Oui c'est tout à fait possible. Dans la barre de navigation vous avez un bouton
                "Devenir hôte" qui vous permet de modifier votre type de compte. Vous pourrez
                ensuite déposer une annonce.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: '100%' }}>Est-ce qu'il y a des frais ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                La plateforme Cosyworking prends des frais sur chaque réservation.
                Ces frais sont inclus dans le coût total.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: '100%' }}>Comment contacter l'hôte d'un espace qui m'intéresse ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorsque vous cliquez sur réserver vous serez amené à entrer en contact avec l'hôte.
                Les échanges se feront ensuite par email.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Est-il possible d'annuler une réservation après l'avoir
                confirmée ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vous pouvez annuler une réservation depuis votre espace personnel.
                Dans la section "Mon espace coworker", retrouvez la réservation
                en question et cliquer sur "Annuler".
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>La demande de réservation est-elle engageant ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cliquez sur “Réserver en ligne” vous permet de rentrer en contact avec l’hôte.
                Cela ne vous engage à rien mais vous permet de demander un devis et
                de discuter avec l’hôte du format de votre projet. Vous ne serez
                engagé que lorsque vous confirmerez et payerez cette réservation.
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
              <Typography>Quelle est la procédure à suivre en cas de dégât sur place ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                En cas de dégât réalisé sur place, l’hôte doit nous en informer dans le 48H, nous
                vous invitons également à le faire afin d’anticiper. Votre caution peut alors être
                engagée au minimum de 500 euros. Si les dégâts dépassent le montant de la caution,
                nous faisons appel à notre assurance pour couvrir les dommages causés.
                Dès que l’hôte a fait sa demande, vous recevez un mail pour vous avertir que votre
                caution sera prélevée.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Le ménage est-il inclus ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Le ménage est par défaut inclus. Si cela n’est pas le cas vous en serez informé
                par l’hôte qui l’ajoutera en option (cela est extrêmement rare).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Dois-je immatriculer mon logement auprès de la mairie ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cette démarche n’est pas encore une obligation légale pour la mise à
                disposition de son logement en journée contrairement au cas d’un démarrage
                d’activité de location saisonnière à Paris et dans les zones tendues
                (28 communes de France).En effet, l’activité permise par Cosyworking déroge à
                cette obligation qui n’a pasété prévue pour ce type d’usage relativement nouveau.
                Néanmoins, nous conseillons à os hôtes de le faire par mesure de précaution.
                Rendez-vous sur le site de votre Mairie afin d’entamer cette démarche.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Dois-je être proriétaire d'un lieu pour
                le mettre en location ?

              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Il n’est pas obligatoire que vous soyez le propriétaire de l’espace
                pour le proposer sur le site. Cependant, en tant que locataire,
                il est important de prévenir votre propriétaire et d'obtenir son accord.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion width="50%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Qui sont les coworker ? Quel type de client vais-je avoir ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Les coworker sont des travailleurs nomades, ou bien des personnes en télétravail
                souhaitant trouver un bureau pour travailler.
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
