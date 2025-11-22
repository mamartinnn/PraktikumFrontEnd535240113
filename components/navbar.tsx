'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="py-3 sticky-top shadow-sm" 
        style={{backgroundColor:'#0f172a'}}
          data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#" className="d-flex align-items-center fw-bold fs-3 text-warning">
                     SAVORIA
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="#" className="mx-2">Home</Nav.Link>
                        <Nav.Link href="#about" className="mx-2">Story</Nav.Link>
                        <Nav.Link href="#menu" className="mx-2">Menu</Nav.Link>
                        
                        <NavDropdown title="Locations" id="navbarScrollingDropDown" className="mx-2">
                            <NavDropdown.Item href="#loc1">Jakarta Selatan</NavDropdown.Item>
                            <NavDropdown.Item href="#loc2">Bali</NavDropdown.Item>
                            <NavDropdown.Item href="#loc3">Surabaya</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>  

                    <div className="d-flex align-items-center gap-3">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Cari menu..."
                                className="me-2 form-control-sm"
                                aria-label="Search"
                                style={{ borderRadius: '20px' }}
                            />
                        </Form>
                        
                         <NavDropdown 
                            title={
                                <div style={{width: '35px', height: '35px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #ffc107'}}>
                                    <Image 
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
                                        alt="profile"
                                        width={35} 
                                        height={35}
                                    />
                                </div>
                            } 
                            id="userAccountDropdown" 
                            align="end"
                        >
                            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logout" className="text-danger">Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;