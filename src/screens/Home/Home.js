import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import Cards from '../../components/Card/Cards';
import { DivCards } from './styles';
import { goToHomePage, goToPostPage } from './../../router/coordinator';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    await axios
      .get(`${BASE_URL}/cars`)
      .then((res) => {
        setCars(res.data)
      })
      .catch((err) => {
        alert(err.data.msg)      
      })
  }

  useEffect(() => {
    getCars();
  }, [])

  return (
    <div>
      
      <Button variant='primary' onClick={()=>{goToPostPage(navigate)}}>Adicionar um novo modelo</Button>
      <DivCards>
        {cars && cars.map((car) => {
          return (
            <Cards
              id={car._id}
              title={car.title}
              brand={car.brand}
              age={car.age}
              price={car.price}
            />
          )
        })}
      </DivCards>
    </div>
  )
}
