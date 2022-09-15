import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import Cards from '../../components/Card/Cards';
import { DivCards, DivHome } from './styles';
import { toast } from 'react-toastify';
import Heading from './../../components/Heading/Heading';

export default function Home() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    await axios
      .get(`${BASE_URL}/cars`)
      .then((res) => {
        setCars(res.data)
      })
      .catch((error) => {
        toast.error(error.response.data.msg[0], {
          position: toast.POSITION.TOP_CENTER
      })
      })
  }

  useEffect(() => {
    getCars();
  }, [])

  return (
    <DivHome>
      <Heading/>
      <DivCards>
        {cars ? cars.map((car) => {
          return (
            <Cards
              id={car._id}
              title={car.title}
              brand={car.brand}
              age={car.age}
              price={car.price}
            />
          )
        }) : <h3>Carregando...</h3>}
        
      </DivCards>
      <p style={{textAlign: 'center'}}>© 2022 Developed by Karen Naomi Cardoso Kubo</p>
    </DivHome>
  )
}
