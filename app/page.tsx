"use client";
import React from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col, Badge } from "react-bootstrap";
import WorkSection from "../components/worksection";
import ContactSection from "../components/contactsection";
import Servicesection from "../components/servicesection";
import HeroSection from "../components/herosection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <main>
        <HeroSection />
        
        <section id="about" className="py-5">
            <Container className="my-5">
                <Row className="align-items-center gx-5">
                    <Col md={6} className="mb-4 mb-md-0"> 
                        <div className="position-relative">
                            <img 
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
                                alt="Interior Restoran" 
                                className="img-fluid rounded-4 shadow" 
                                style={{ width: '100%', objectFit: 'cover' }} 
                            />
                            <div className="bg-warning position-absolute bottom-0 start-0 p-3 rounded-top-right text-dark fw-bold">
                                Est. 2024
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>        
                        <div className="ps-md-4">
                            <Badge bg="secondary" className="mb-2">CERITA KAMI</Badge>
                            <h2 className="display-6 fw-bold text-dark">Lebih Dari Sekadar Rasa</h2>
                            <p className="text-muted mt-3" style={{ lineHeight: '1.8' }}>
                                <b>SAVORIA</b> hadir di tengah hiruk pikuk kota sebagai oase bagi para penikmat rasa. 
                                Kami tidak hanya menyajikan makanan, tetapi menghadirkan sebuah karya seni di atas piring.
                                Filosofi kami sederhana: bahan lokal terbaik bertemu dengan teknik memasak kelas dunia.
                            </p>
                            
                            <h4 className="mt-4 h5 fw-bold">Kenapa Memilih Kami?</h4>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2 d-flex align-items-start">
                                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                    <span><strong>Fusion Gastronomy:</strong> Eksplorasi rasa tanpa batas dari Asia hingga Eropa.</span>
                                </li>
                                <li className="mb-2 d-flex align-items-start">
                                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                    <span><strong>Premium Ingredients:</strong> Kami bermitra langsung dengan petani dan nelayan lokal.</span>
                                </li>
                                <li className="d-flex align-items-start">
                                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                    <span><strong>Ambiance:</strong> Desain interior yang modern namun tetap hangat untuk setiap momen spesial Anda.</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      </main>
      
      <div id="menu">
        <WorkSection />
      </div>
      
      <Servicesection/>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </div>
  );
}