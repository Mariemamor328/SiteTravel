import React, { useEffect } from 'react'
import './home.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips, reservePlace } from '../../JS/tripSlice';


const Home = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const trip = useSelector((store) => store.trip?.trip);
    console.log('Trips:', trip); 
    useEffect(() => {
        dispatch(fetchTrips());
    }, [dispatch]);
    return (
    <div className='body'>
<section class="hero">
        <div class="hero-content">
            <h1>Discover Your Next Adventure</h1>
            <p>Tailored tours and unbeatable deals to make your dream trip a reality.</p>
            <div class="hero-buttons">
                <button class="btn primary-btn" onClick={()=>navigate('/destinations')}>Explore Destinations</button>
            </div>
        </div>
    </section>
     <section class="destinations">
        <div class="container">
            <h2>Popular Destinations</h2>
            <div class="destinations-grid">
                {trip?.map((el)=> ( 
                <div class="destination-card">

               <img src={el?.ImageDestination} alt="Destination 1"/>
               <div class="max-people"> {el?.NumbrePlace}places disponible </div>
               <div class="card-content">
                        <h3>{el?.Destination}</h3>
                        <p>{el?.Description}</p>
                        <Link to={`/reservation/${el._id}`}><button class="btn">Réserver</button></Link>
                    </div>
              
                </div>
))}
            </div>
        </div>
    </section>
     
       <section class="features">
        <div class="container">
            <h2>Why Choose Us?</h2>
            <p class="features-description">We offer unbeatable travel packages and expert guidance for your perfect trip.</p>
            <div class="features-grid">
                <div class="feature-card">
                    <i class="fas fa-dollar-sign"></i> 
                    <h3>Affordable Packages</h3>
                    <p>Get the best deals and save on your next adventure.</p>
                </div>

                <div class="feature-card">
                    <i class="fas fa-users"></i> 
                    <h3>Expert Guides</h3>
                    <p>Our guides are local experts who know the best places to explore.</p>
                </div>

                <div class="feature-card">
                    <i class="fas fa-headset"></i> 
                    <h3>24/7 Support</h3>
                    <p>We are here for you anytime you need assistance during your trip.</p>
                </div>

                <div class="feature-card">
                    <i class="fas fa-map-signs"></i> 
                    <h3>Customizable Tours</h3>
                    <p>Personalize your travel experience to suit your needs and interests.</p>
                </div>
            </div>
        </div>
    </section>


      <section class="testimonials">
        <div class="container">
            <h2>What Our Customers Say</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <img src="https://www.shutterstock.com/image-photo/portrait-serious-confident-businessman-entrepreneur-260nw-2022462281.jpg" alt="Customer 1"/>
                    <blockquote>
                        "The trip was absolutely amazing! The tour guides were very knowledgeable and the destinations were stunning."
                    </blockquote>
                    <p class="customer-name">John Doe</p>
                    <p class="customer-location">New York, USA</p>
                </div>

                <div class="testimonial-card">
                    <img src="https://www.shutterstock.com/image-photo/handsome-man-smiling-cheerful-big-260nw-1530789695.jpg" alt="Customer 2"/>
                    <blockquote>
                        "I had a fantastic experience! The service was excellent and the trip exceeded all of my expectations."
                    </blockquote>
                    <p class="customer-name">Jane Smith</p>
                    <p class="customer-location">London, UK</p>
                </div>

                <div class="testimonial-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CpI6yekftC0YtpTaZ98xMKCL3CfATz3Gcg&s" alt="Customer 3"/>
                    <blockquote>
                        "Thanks to this agency, I was able to create memories that will last a lifetime. Highly recommend their services!"
                    </blockquote>
                    <p class="customer-name">Emily Zhang</p>
                    <p class="customer-location">Sydney, Australia</p>
                </div>
            </div>
        </div>
    </section>


     <section class="packages">
        <div class="container">
            <h2>Featured Travel Packages</h2>
            <p class="packages-description">Explore our best deals and carefully crafted travel packages for your next getaway.</p>
            <div class="packages-grid">
              
                <div class="package-card">
                    <img src="https://img.delicious.com.au/WxIpPYDG/del/2023/11/lombok-lesser-sunda-island-indonesia-201237-4.jpg" alt="Package 1"/>
                    <div class="package-content">
                        <h3>Tropical Paradise</h3>
                        <p>5 Days in Bali, Indonesia</p>
                        <p class="package-price">$899 per person</p>
                        <button class="btn">Book Now</button>
                    </div>
                </div>

            
                <div class="package-card">
                    <img src="https://i.f1g.fr/media/eidos/1300x701_crop/2019/04/13/XVMe88bcd86-5d3f-11e9-8592-2e68e187fb35.jpg" alt="Package 2"/>
                    <div class="package-content">
                        <h3>European Adventure</h3>
                        <p>10 Days in Paris, Rome & Berlin</p>
                        <p class="package-price">$1,499 per person</p>
                        <button class="btn">Book Now</button>
                    </div>
                </div>

             
                <div class="package-card">
                    <img src="https://static.independent.co.uk/2023/07/04/09/iStock-1193239486.jpg?width=1200" alt="Package 3"/>
                    <div class="package-content">
                        <h3>Desert Explorer</h3>
                        <p>7 Days in Dubai, UAE</p>
                        <p class="package-price">$1,199 per person</p>
                        <button class="btn">Book Now</button>
                    </div>
                </div>

              
                <div class="package-card">
                    <img src="https://www.mantaislandresort.com/wp-content/uploads/2023/03/manta-private-island-getaway-featured.jpg" alt="Package 4"/>
                    <div class="package-content">
                        <h3>Island Getaway</h3>
                        <p>4 Days in Maldives</p>
                        <p class="package-price">$999 per person</p>
                        <button class="btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   

    



    </div>
  )
}

export default Home

/*  <img src={trips?.ImageDestination} alt="Destination 1"/>
                    <div class="max-people"> {trips?.NumbrePlace}places disponible </div>
                    <div class="card-content">
                        <h3>{trips?.Destination}</h3>
                        <p>{trips?.Description}</p>
                        <button class="btn">View More</button> */