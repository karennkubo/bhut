import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import useForm from '../../hooks/useForm';
import { getCarById } from '../../services/cars';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { updateCar } from './../../services/cars';
import { DivForm } from './styles';
import Heading from './../../components/Heading/Heading';

export default function Update() {
  const params = useParams();

  const { form, InputChange, setForm } = useForm({
    title: "",
    brand: "",
    price: "",
    age: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    updateCar(params.id, form);
  }

  useEffect(() => {
    getCarById(params.id, setForm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DivForm>
      <Heading />

      <Form className="col-md-4 col-md-offset-4" style={{ margin: 'auto' }} onSubmit={onSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ textAlign: 'center' }}>
          <Form.Label >Title</Form.Label>
          <Form.Control type="text" placeholder="E.g.: Fusca" name="title" value={form.title} onChange={InputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" style={{ textAlign: 'center' }}>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="E.g.: Ford" name="brand" value={form.brand} onChange={InputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3" style={{ textAlign: 'center' }}>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="E.g.: 60.000,00" name="price" value={form.price} onChange={InputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4" style={{ textAlign: 'center' }}>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="E.g.: 2022" name="age" value={form.age} onChange={InputChange} required />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

    </DivForm>
  )
}
