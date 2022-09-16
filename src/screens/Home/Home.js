import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from '../../assets/loading.gif';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import Cards from '../../components/Card/Cards';
import { DivCards, DivHome } from './styles';
import { toast } from 'react-toastify';
import Heading from './../../components/Heading/Heading';
import Footer from './../../components/Footer/Footer';

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
    <>
      <Heading />
      <DivHome>

        <DivCards>
          {cars.length > 0 ? cars.map((car) => {
            return (
              <Cards
                id={car._id}
                title={car.title}
                brand={car.brand}
                age={car.age}
                price={car.price}
              />
            )
          }) : <img src={Loading} alt="loading" />}

        </DivCards>

      </DivHome>
      <Footer />
    </>

  )
}
