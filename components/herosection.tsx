"use client"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

interface Slide {
    imageUrl: string;
    title: string; 
    subtitle: string; 
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Cita Rasa Nusantara", 
            subtitle: "Warisan kuliner otentik Indonesia", 
            imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
        },
        { 
            title: "Asian Fusion", 
            subtitle: "Perpaduan rasa timur yang harmonis",
            imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
        },
        {
            title: "Western Delights", 
            subtitle: "Steak premium dan pasta pilihan",
            imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
        },
    ]

    return (
        <Carousel fade interval={4000} controls={false} indicators={true}> 
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div 
                        style={{
                            backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "85vh",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        
                        <div className="text-center text-white px-4">
                            <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                                {slide.title}
                            </h1>
                            <p className="fs-4 mb-4">{slide.subtitle}</p>
                            <Button 
                                variant="outline-light" 
                                size="lg"
                                className="px-5 rounded-pill"
                            >
                                Jelajahi Menu
                            </Button>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HeroSection;