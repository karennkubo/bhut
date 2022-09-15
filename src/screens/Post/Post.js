import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { DivForm } from './styles';
import { goToHomePage } from './../../router/coordinator';
import { useNavigate } from 'react-router-dom';
import useForm from './../../hooks/useForm';
import { createCar } from './../../services/cars';

export default function Post() {
  const navigate = useNavigate();

  const { form, InputChange, clear } = useForm({
    title: "",
    brand: "",
    price: "",
    age: "",
  });
  
  const onSubmit = (event) => {
    event.preventDefault();
    createCar(form);
    clear();
  }
  
  return (
    <DivForm>
      <Button variant='primary' onClick={() => { goToHomePage(navigate) }} style={{margin: 'auto'}}>Voltar</Button>

      <Form className="col-md-4 col-md-offset-4" style={{margin:'auto'}} onSubmit={onSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
          <Form.Label >Title</Form.Label>
          <Form.Control type="text" placeholder="E.g.: Fusca" name="title" value={form.title} onChange={InputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" >
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="E.g.: Ford" name="brand" value={form.brand} onChange={InputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3" >
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="E.g.: 60.000,00" name="price" value={form.price} onChange={InputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4" >
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="E.g.: 2022" name="age" value={form.age} onChange={InputChange} required />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </DivForm>
  )
}
