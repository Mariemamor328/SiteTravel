import React from 'react'
import './footer.css'
const Footer = ( { ping,setping }) => {
  return (
    <div  className='body'> 
<footer class="footer">
            
            <div class="footer-container">
            <div class="interactive-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.515179537598!2d10.098065215251786!3d33.88139758062709!
2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d1a606c91b12ff%3A0x4e6d32c2b7d5f5e4!2sGab%C3%A8s%2C%20Tunisia!5e0!3m2!1s
en!2s!4v1635826133780!5m2!1sen!2s" 
                            width="100%"
                            height="300"
                            style={{ border: '0' }} 
                            allowfullscreen="" 
                            loading="lazy"
                            title="Location Map">
                    </iframe>
               
        </div>
             
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><p>About Us</p></li>
                        <li><p>Blog</p></li>
                        <li><p>FAQ</p></li>
                        <li><p>Contact</p></li>
                    </ul>
                </div>
                
             
                <div class="footer-social">
                    <h4>Follow Us</h4>
                    <div class="social-icons">
                       <div class="icons"> <i class="fa-brands fa-instagram"></i><p>instagram</p></div>
                       <div class="icons"> <i class="fa-brands fa-facebook-f"></i><p>facebook</p></div>
                        <div class="icons"> <i class="fa-brands fa-twitter"></i><p>twitter</p></div>
                    </div>
                </div>
                
              
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@travelagency.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: Gabés , Tunisia</p>
                </div>
            </div>
        
        </footer>
        <div class="footer-bottom">
            <p>© 2024 Travelagency. All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer