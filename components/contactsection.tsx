'use client'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';

function ContactSection() {
    return (
        <div 
            style={{
                backgroundColor: '#1e293b',
                padding: '80px 0'
            }}
        >
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={5} className='text-white mb-5 mb-lg-0 d-flex flex-column justify-content-center'>
                        <h2 className='display-5 fw-bold mb-4'>Reservasi Meja</h2>
                        <p className='lead mb-5 opacity-75'>
                            Pastikan Anda mendapatkan tempat terbaik untuk momen spesial. Kami sarankan melakukan reservasi H-1.
                        </p>
                        
                        <div className='p-4 rounded bg-white bg-opacity-10 backdrop-blur'>
                            <div className="d-flex align-items-center mb-3">
                                <Image 
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" 
                                    className='rounded-circle me-3 border border-2 border-warning' 
                                    width={60} height={60} alt="Reviewer"
                                />
                                <div>
                                    <h6 className="mb-0 fw-bold">Jessica M.</h6>
                                    <small className="text-warning">★★★★★</small>
                                </div>
                            </div>
                            <p className="fst-italic small mb-0">
                                "Pelayanan luar biasa dan makanannya sangat otentik. Tempat terbaik untuk dinner romantis di Jakarta!"
                            </p>
                        </div>
                    </Col>

                    <Col lg={6} className='offset-lg-1'>
                        <Card className='shadow-lg border-0 rounded-4'>
                            <Card.Body className='p-5'>
                                <h3 className="text-center fw-bold mb-4 text-dark">Form Booking</h3>
                                <Form>
                                    <Row>
                                        <Col md={6} className="mb-3">
                                            <Form.Label className="small fw-bold text-secondary">TANGGAL</Form.Label>
                                            <Form.Control type='date' />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Form.Label className="small fw-bold text-secondary">JAM</Form.Label>
                                            <Form.Control type='time' defaultValue="19:00" />
                                        </Col>
                                    </Row>
                                    
                                    <Form.Group className='mb-3'>
                                        <Form.Label className="small fw-bold text-secondary">NAMA LENGKAP</Form.Label>
                                        <Form.Control type='text' placeholder='Nama Anda' />
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label className="small fw-bold text-secondary">KONTAK (WA/EMAIL)</Form.Label>
                                        <Form.Control type='text' placeholder='0812...' />
                                    </Form.Group>

                                    <Button 
                                        type='submit' 
                                        className='w-100 py-3 fw-bold mt-2'
                                        style={{ backgroundColor: '#0f172a', border: 'none' }}
                                    >
                                        KONFIRMASI RESERVASI
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactSection;