'use client';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function ServiceSection() {
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <Container fluid className="p-0 mb-5">
                <Row className="g-0 align-items-center">
                    <Col md={6} className="bg-dark text-white p-5" style={{ backgroundColor: '#0f172a !important' }}>
                        <div className="p-lg-5">
                            <h5 className="text-warning mb-3">THE MIND BEHIND</h5>
                            <h2 className="display-4 fw-bold mb-4">Alexander Graham</h2>
                            <p className="lead mb-4 opacity-75">
                                "Memasak adalah tentang cinta dan kesabaran. Di Savoria, kami tidak hanya menyajikan makanan, kami menyajikan kenangan."
                            </p>
                            <p className="opacity-75">
                                Berpengalaman lebih dari 20 tahun di industri kuliner Eropa dan Asia, Alexander membawa visi untuk menggabungkan teknik presisi Prancis dengan keberanian rempah Nusantara.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Image 
                            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80" 
                            alt="Founder"
                            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
            </Container>

            <Container className='my-5 pb-5'>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Tim Kuliner Kami</h2>
                    <p className="text-muted">Orang-orang hebat di balik setiap hidangan lezat</p>
                </div>
                
                <Row className='justify-content-center'>
                    {[
                        { name: "Chef Yujin", role: "Head Pastry", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80" },
                        { name: "Chef Sato", role: "Executive Chef", img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=500&q=80" },
                        { name: "Chef Sarah", role: "Sous Chef", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=500&q=80" }
                    ].map((chef, idx) => (
                        <Col key={idx} md={4} className='mb-4'>
                            <Card className="border-0 text-center h-100">
                                <div className="mx-auto mt-3" style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%' }}>
                                    <Card.Img 
                                        src={chef.img} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold mt-2">{chef.name}</Card.Title>
                                    <Card.Subtitle className="mb-3 text-warning">{chef.role}</Card.Subtitle>
                                    <Card.Text className="small text-muted">
                                        Profesional yang berdedikasi tinggi untuk menciptakan standar rasa terbaik bagi pelanggan setia kami.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
export default ServiceSection;