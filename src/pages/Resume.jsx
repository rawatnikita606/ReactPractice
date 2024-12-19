import React from 'react';
import myimage1 from './Laptop.png';  // Assuming the image path is correct

const Resume = () => {

  // Define the data array with profile details
  const data = [
    {
      ID: "101",
      NAME: "NIKITA",
      AGE: 19,
      CITY: "DELHI",
      imgurl: myimage1,  // Assuming you want to display the same image for each profile
    },
    {
      ID: "102",
      NAME: "Anaya",
      AGE: 1,
      CITY: "DELHI",
      imgurl: myimage1,
    },
    {
      ID: "103",
      NAME: "Arjun",
      AGE: 22,
      CITY: "MUMBAI",
      imgurl: myimage1,
    }
  ];

  return (
    <div>
      {/* Internal CSS for .btn and centering */}
      <style>
        {`
          .btn {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            margin: 20px 0;
            margin:auto;
            display: flex;
           justify-content: center;
         align-items: center;
            
          }
          .btn:hover {
            background-color: #0056b3;
          }
          .center {
            text-align: center;
          }
        `}
      </style>

      {/* Button for downloading resume */}
      <a href="./HI NIKITA.pdf" download>
        <button className="btn">Download Resume</button>
      </a>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero explicabo excepturi obcaecati nam.
        Ipsam, hic possimus eaque deleniti quod beatae aperiam eligendi sit dolore ducimus. Quo nemo iste, ipsum ad
        beatae quibusdam iusto? Exercitationem esse hic aut architecto cum. Quos sed quaerat blanditiis, inventore eos
        ipsam iste minus sit facilis nisi saepe excepturi fugit magni eligendi! Eos adipisci iste odit tenetur
        deserunt laboriosam, obcaecati eligendi optio consequatur architecto odio fugiat mollitia, maxime reiciendis
        itaque impedit repellat non tempore quia molestias ipsam, eius doloremque ducimus quisquam. Eum cupiditate qui
        perspiciatis dolore. Repellendus eos qui totam quidem sequi consequuntur odit facere.
      </p>

      <div className="center">
        <img src={myimage1} alt="Nikita's Laptop" />
      </div>

      <div className="center">
        {/* Displaying profile data */}
        <h2>My Profile:</h2>
        {data.map((person) => (
          <div key={person.ID}>
            <h3>{person.NAME}</h3>
            <p>Age: {person.AGE}</p>
            <p>City: {person.CITY}</p>
            <img src={person.imgurl} alt={`${person.NAME}'s image`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
