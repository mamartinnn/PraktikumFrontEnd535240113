'use client'
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CustomFooter(){
    return(
        <footer className="text-white pt-5 pb-3" style={{backgroundColor: '#0f172a'}}>
            <Container>
                <Row className="gy-4"> 
                    <Col lg={4} md={6}>
                        <h3 className="fw-bold text-warning mb-3">SAVORIA</h3>
                        <p className="small opacity-75 pe-lg-5">
                            Menghadirkan pengalaman kuliner kelas dunia langsung ke meja Anda. Rasa otentik, suasana nyaman, dan pelayanan bintang lima.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                             <i className="bi bi-instagram fs-5 cursor-pointer"></i>
                             <i className="bi bi-facebook fs-5 cursor-pointer"></i>
                             <i className="bi bi-twitter-x fs-5 cursor-pointer"></i>
                        </div>
                    </Col>
                    
                    <Col lg={4} md={6}>
                        <h5 className="fw-bold mb-3">Akses Cepat</h5>
                        <div className="d-flex gap-5">
                            <ul className="list-unstyled opacity-75">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Beranda</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Tentang</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Reservasi</a></li>
                            </ul>
                            <ul className="list-unstyled opacity-75">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Menu</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Lokasi</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">FAQ</a></li>
                            </ul>
                        </div>
                    </Col>
                    
                    <Col lg={4} md={12}>
                        <h5 className="fw-bold mb-3">Berlangganan Info</h5>
                        <p className="small opacity-75">Dapatkan promo menarik setiap minggunya.</p>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Email Anda" aria-label="Email" />
                            <Button variant="warning" id="button-addon2">
                                Kirim
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            
                <Row className="mt-5 pt-3 border-top border-secondary"> 
                    <Col className="text-center small opacity-50">
                        &copy; Martin 535240113. All Rights Reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}