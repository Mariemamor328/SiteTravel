import React from 'react';
import './blog.css';

const Blog = ({ ping,setping }) => {
  const blogPosts = [
    { title: "Les plus belles plages à visiter", excerpt: "Découvrez les plages magnifiques...", imgUrl: "https://img.freepik.com/premium-photo/beautiful-tropical-turquoise-ocean-beach-professional-photography_925376-53683.jpg" },
    { title: "Comment préparer un voyage inoubliable", excerpt: "Planifiez un voyage parfait...", imgUrl: "https://yummy-planet.com/wp-content/uploads/2018/08/planifier-son-voyage-1024x683.jpg" },
    { title: "Les destinations à ne pas manquer", excerpt: "Explorez des endroits incroyables...", imgUrl: "https://static8.depositphotos.com/1000865/970/i/450/depositphotos_9700422-stock-photo-stack-of-croatia-travel-photos.jpg" }
  ];

  return (
    <div className="blog-page">
     
      <section className="hero-section">
        <h1>Notre Blog</h1>
        <p>Conseils, histoires et inspirations pour vos voyages !</p>
      </section>

   
      <section className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.imgUrl} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className="read-more">Lire plus</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;

