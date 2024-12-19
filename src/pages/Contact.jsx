import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message.`);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Contact Us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusamus quidem? Optio ipsam reiciendis
        deleniti sapiente enim commodi dignissimos velit aliquam, rem magni explicabo aspernatur expedita minus
        voluptatem exercitationem vitae dicta.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '20px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <div>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              minHeight: '100px',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
