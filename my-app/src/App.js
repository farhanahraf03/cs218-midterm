import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'
import './App.css'

const EBikeForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    color: '',
    image: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('brand', formData.brand);
    formDataToSend.append('model', formData.model);
    formDataToSend.append('color', formData.color);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:5000/upload', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <Form className="custom-form">
          <h2 className="form-heading">Electric Bike Details</h2>
          <Form.Group controlId="brand">
            <Form.Label className="form-label">Brand</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              placeholder="Enter brand"
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="model">
            <Form.Label className="form-label">Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              placeholder="Enter model"
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label className="form-label">Color</Form.Label>
            <Form.Control
              type="text"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              placeholder="Enter color"
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label className="form-label">Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} className="form-input" />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};


export default EBikeForm;
