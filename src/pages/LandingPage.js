import React, { useState } from 'react';
import { Carousel, Tab, Tabs, Form, Button, Row, Col } from 'react-bootstrap';
import './LandingPage.css'; // Custom styles
import { FaToolbox, FaChartLine, FaRocket } from 'react-icons/fa';
import { FaStar, FaComment, FaDollarSign, FaLightbulb } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import countryData from '../Json/countries+states+cities.json';
import axios from 'axios';

const LandingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState("");


  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

   
    const selectedCountryObj = countryData.find(
      (c) => c.name === selectedCountry
    );

 
    if (selectedCountryObj) {
      setStates(selectedCountryObj.states || []);
    } else {
      setStates([]);
    }

    setState('');
    setCity('');
    setCities([]);
  };


  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);

 
    const selectedStateObj = states.find((s) => s.name === selectedState);

   
    if (selectedStateObj) {
      setCities(selectedStateObj.cities || []);
    } else {
      setCities([]);
    }


    setCity('');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      phone,
      country,
      state,
      city,
      message,
    };

    try {
      const response = await axios.post('http://localhost:8000/contact/', contactData);
      console.log('Contact saved:', response.data);
  
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <div className="no-padding">

<section className="hero-section text-center py-5">
  <h2 className="hero-title">Welcome to Our Ultimate Solution</h2>
  <p className="lead hero-description">We provide innovative solutions designed to meet your business needs.</p>
  <Button variant="primary" className="mt-3 shadow-button">Get Started</Button>
</section>

<style jsx>{`
  .hero-section {
    background: #ffffff; /* White background */
    color: #333; /* Dark text color for better contrast */
    padding: 60px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .hero-title {
    font-size: 2.5rem;
    font-weight: bold; /* Ensure heading is bold */
    margin-bottom: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .hero-description {
    font-size: 1.25rem;
    margin-bottom: 30px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .shadow-button {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .shadow-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
  }
`}</style>




      <section className="carousel-section text-light ">
        <div className="container">
          <h2 className="text-center mb-4 text-white">Empowering Words for Your Success</h2>
          <Carousel interval={1000} controls={false} pause={false}>
            <Carousel.Item>
              <div style={{ backgroundColor: '#1abc9c', height: '400px' }} className="d-flex align-items-center justify-content-center text-center">
                <div>
                  <h3 className="carousel-title text-shadow">"Empower Your Business"</h3>
                  <p className="carousel-content text-shadow">Unlock your potential with our innovative solutions.</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ backgroundColor: '#3498db', height: '400px' }} className="d-flex align-items-center justify-content-center text-center">
                <div>
                  <h3 className="carousel-title text-shadow">"Transform Ideas Into Reality"</h3>
                  <p className="carousel-content text-shadow">Turn your vision into actionable success.</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ backgroundColor: '#e74c3c', height: '400px' }} className="d-flex align-items-center justify-content-center text-center">
                <div>
                  <h3 className="carousel-title text-shadow">"Innovate and Lead"</h3>
                  <p className="carousel-content text-shadow">Stay ahead of the curve with cutting-edge technology.</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>


      <section className="features-section py-5">
        <h2 className="text-center mb-4">Our Top Features</h2>
        <div className="container">
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="card shadow-sm text-center h-100 border-0">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <FaToolbox size={50} className="mb-3" />
                  <h3 className="card-title">Feature One</h3>
                  <p className="card-text">Explore how our powerful tools can help you streamline your workflow and maximize efficiency.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="card shadow-sm text-center h-100 border-0">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <FaChartLine size={50} className="mb-3" />
                  <h3 className="card-title">Feature Two</h3>
                  <p className="card-text">Gain real-time insights and detailed analytics to track your performance and optimize decision-making.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="card shadow-sm text-center h-100 border-0">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <FaRocket size={50} className="mb-3" />
                  <h3 className="card-title">Feature Three</h3>
                  <p className="card-text">Access cutting-edge technology built to scale with your business as it grows over time.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="tab-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">
            <FaCheckCircle className="me-2" /> Why Choose Us?
            <div className="underline mt-2"></div> {/* Underline div */}
          </h2>
          <Tabs defaultActiveKey="benefits" id="tab-section" className="mb-3">
            <Tab
              eventKey="benefits"
              title={<span className="text-success"><FaStar className="me-2" /> Benefits</span>}
            >
              <h3>Key Benefits</h3>
              <p>Our solution provides unmatched efficiency, cost savings, and flexibility for businesses of all sizes.</p>

              <h4>Top Benefits</h4>
              <ul>
                <li>
                  <strong>Increased Efficiency:</strong> Streamline your workflows with our easy-to-use interface that automates routine tasks, allowing your team to focus on what matters most.
                </li>
                <li>
                  <strong>Cost Savings:</strong> Reduce operational costs with our scalable solutions that adapt to your needs without breaking the bank.
                </li>
                <li>
                  <strong>Enhanced Flexibility:</strong> Our platform grows with your business, offering customizable features that cater to your unique requirements.
                </li>
                <li>
                  <strong>Data-Driven Insights:</strong> Make informed decisions with real-time analytics that provide visibility into your operations and help identify areas for improvement.
                </li>
                <li>
                  <strong>24/7 Customer Support:</strong> Enjoy peace of mind knowing that our dedicated support team is available around the clock to assist you.
                </li>
              </ul>
            </Tab>
            <Tab
              eventKey="pricing"
              title={<span className="text-danger"><FaDollarSign className="me-2" /> Pricing</span>}
            >
              <h3>Flexible Pricing</h3>
              <p>Affordable pricing models that scale with your needs, perfect for startups to enterprises.</p>

              <h4>Pricing Plans</h4>
              <div className="pricing-plan">
                <h5>Basic Plan</h5>
                <p><strong>Price:</strong> $29/month</p>
                <p>Ideal for individuals and small teams.</p>
              </div>

              <div className="pricing-plan">
                <h5>Pro Plan</h5>
                <p><strong>Price:</strong> $79/month</p>
                <p>For growing businesses needing advanced tools.</p>
              </div>

              <div className="pricing-plan">
                <h5>Enterprise Plan</h5>
                <p><strong>Price:</strong> Custom pricing</p>
                <p>For large organizations with specific needs.</p>
              </div>

              <h4>Special Offer</h4>
              <p>Sign up annually and get two months free!</p>
            </Tab>
            <Tab
              eventKey="mission"
              title={<span className="text-warning"><FaLightbulb className="me-2" /> Our Mission</span>}
            >
              <h3>Our Mission</h3>
              <p>We strive to empower businesses through innovative solutions that simplify processes and enhance productivity.</p>
              <h4>Core Values</h4>
              <ul>
                <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
                <li>Customer Focus: We prioritize our customers and strive to exceed their expectations.</li>
                <li>Innovation: We embrace change and continuously improve our solutions.</li>
                <li>Collaboration: We work together with our clients to achieve shared success.</li>
              </ul>
            </Tab>
          </Tabs>
        </div>
      </section>

      {/* Additional Section */}
      <section className="additional-section py-5">
        <h2 className="text-center mb-4 text-black">
          <FaHandshake className="me-2" /> Our Commitment to You
          <div className="underline mt-2"></div> {/* Underline div */}
        </h2>
        <div className="container">
          <Row>
            <Col xs={12} md={6}>
              <div className="commitment-card shadow p-4 rounded">
                <h3 className="text-success">Quality Assurance</h3>
                <p>We guarantee high standards in everything we do.</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="commitment-card shadow p-4 rounded">
                <h3 className="text-danger">Customer Support</h3>
                <p>Our dedicated team is here to assist you 24/7.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>


      {/* Contact Us Section */}
      <section className="contact-section bg-light py-5">
    <div className="container">
        <h2 className="text-center mb-4 text-primary">Get in Touch</h2>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mb-3 border-0 border-bottom" // Customizing with Bootstrap
                        />
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mb-3 border-0 border-bottom"
                        />
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Enter your mobile number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="mb-3 border-0 border-bottom"
                        />
                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group controlId="formCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            as="select"
                            value={country}
                            onChange={handleCountryChange}
                            className="mb-3 border-0 border-bottom"
                        >
                            <option value="">Select Country</option>
                            {countryData.map((countryObj) => (
                                <option key={countryObj.id} value={countryObj.name}>
                                    {countryObj.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>

                {country && (
                    <>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={state}
                                    onChange={handleStateChange}
                                    className="mb-3 border-0 border-bottom"
                                >
                                    <option value="">Select State</option>
                                    {states.map((stateObj) => (
                                        <option key={stateObj.id} value={stateObj.name}>
                                            {stateObj.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="mb-3 border-0 border-bottom"
                                >
                                    <option value="">Select City</option>
                                    {cities.map((cityObj) => (
                                        <option key={cityObj.id} value={cityObj.name}>
                                            {cityObj.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </>
                )}
            </Row>

            <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mb-3 border-0 border-bottom"
                />
            </Form.Group>

            <div className="text-center">
                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </div>
        </Form>
    </div>
</section>




    </div>
  );
};

export default LandingPage;
