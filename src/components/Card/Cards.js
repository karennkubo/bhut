import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DivButtons } from './styles';
import { useState } from 'react';
import CarDetails from '../CarDetails/CarDetails';
import { deleteCar } from '../../services/cars';

export default function Cards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card style={{ width: '18rem' }} className="text-center" key={props.id}>
      <FontAwesomeIcon icon={faTrash} style={{ position: "absolute", right: 15, top: 10 }} onClick={() => { deleteCar(props.id) }} />
      <Card.Body>

        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.brand} </Card.Subtitle>
      </Card.Body>

      <Card.Footer style={{display: 'flex', justifyContent: 'space-between'}}>

        <Button variant="info" onClick={handleShow}>Ver detalhes</Button>

        {show && (<CarDetails
          show={show}
          handleClose={handleClose}
          title={props.title}
          brand={props.brand}
          age={props.age}
          price={props.price}
        />)}

        <Button variant="warning">Alterar</Button>

      </Card.Footer>
    </Card>
  )
}
