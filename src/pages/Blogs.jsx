import React from 'react';

const Blogs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae facere eos assumenda eaque ipsum, iste
        corporis saepe sit soluta voluptate tenetur explicabo earum dolor nam nostrum commodi ratione magni animi quia
        officiis quos quis. Recusandae voluptates id, voluptas at cumque dolorem dolore eum iure adipisci blanditiis
        deleniti omnis molestiae, magnam quod ullam laboriosam maiores officia! Quos corrupti sunt officiis, quis neque
        eum. Consequuntur ipsa beatae, nostrum tenetur quos omnis provident reprehenderit necessitatibus explicabo nobis
        consectetur eum iure porro? Cumque voluptates vero iusto laudantium vitae, ipsam non illum quidem velit? Beatae
        pariatur, quo unde voluptates quas odit omnis et natus.
      </p>

      <div style={{ marginTop: '20px' }}>
        <h2>Watch Our Video</h2>
        <video
          width="100%"
          controls
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Blogs;
