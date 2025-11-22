'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

interface MenuItems {
    id: number;
    title: string;
    desc: string;
    imageUrl: string;
    price: string; 
}

const menuData: MenuItems[] = [
    { id: 1, title: "Truffle Wagyu Steak", price: "IDR 450K", desc: "Daging Wagyu A5 dengan saus truffle hitam.", imageUrl: "https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Lobster Thermidor", price: "IDR 320K", desc: "Lobster segar dipanggang dengan keju parmesan.", imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Spicy Miso Ramen", price: "IDR 85K", desc: "Mie jepang dengan kuah kaldu 12 jam.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Salmon Encroute", price: "IDR 150K", desc: "Salmon bungkus pastry dengan bayam.", imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Royal Curry", price: "IDR 95K", desc: "Kari otentik India dengan roti naan.", imageUrl: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Berry Cheesecake", price: "IDR 55K", desc: "Penutup manis dengan buah berry segar.", imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80" }
];

function WorkSection() {
    return (
        <Container className="my-5 py-4"> 
            <div className="text-center mb-5">
                <h6 className="text-primary fw-bold text-uppercase ls-2">Menu Favorit</h6>
                <h2 className="fw-bold display-6">Pilihan Chef Bulan Ini</h2>
                <div className="mx-auto mt-3" style={{height: '3px', width: '70px', backgroundColor: '#0f172a'}}></div>
            </div>

            <Row className="g-4">
                {menuData.map((item) => (
                    <Col key={item.id} md={6} lg={4}>
                        <Card className="h-100 shadow border-0 overflow-hidden card-hover">
                            <div className="overflow-hidden">
                                <Card.Img 
                                    variant="top" 
                                    src={item.imageUrl} 
                                    alt={item.title}
                                    style={{ height: '220px', objectFit: 'cover', transition: 'transform 0.3s' }}
                                    className="hover-zoom"
                                />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <Card.Title className="fw-bold mb-0 h5">{item.title}</Card.Title>
                                    <span className="text-primary fw-bold">{item.price}</span>
                                </div>
                                <Card.Text className="text-muted small flex-grow-1">
                                    {item.desc}
                                </Card.Text>
                                <Button variant="dark" className="w-100 mt-3 rounded-1" style={{backgroundColor: '#0f172a'}}>
                                    Pesan Sekarang
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default WorkSection;