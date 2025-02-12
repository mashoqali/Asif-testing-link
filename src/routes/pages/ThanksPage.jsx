import React from 'react';
import { Link } from 'react-router-dom';
import ThanksTopImg from './assets/thankstop.png';

const ThanksPage = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ width: '100%', height: '100vh' }}
    >
        <div className='position-relative'>
        <img
          src={ThanksTopImg}
          alt="top"
          className='position-absolute'
          style={{ width: '10rem', top: '-80px', right: '-80px', zIndex: 0 }} // Set a lower zIndex for the images
        />

        <img
          src={ThanksTopImg}
          alt="top"
          className='position-absolute'
          style={{
            width: '10rem',
            bottom: '-80px',
            left: '-80px',
            transform: 'rotate(190deg)',
            zIndex: 0, // Set a lower zIndex for the images
          }}
        />
      <div
        className='d-flex flex-column justify-content-center align-items-center p-4 rounded position-relative'
        style={{
          height: '400px',
          background: 'white',
          border: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1, // Set a lower zIndex for the content div
        }}
      >
       
        <div className='d-flex justify-content-center align-items-center' 
        style={{width:"5rem", height:"5rem", borderRadius:"50%", background:"rgb(243, 245, 251)" }}>
           
        </div>

        <h2 className='mt-4'>Thank You!</h2>
        <p className='my-4 text-center' style={{ color: 'gray', fontSize: '22px', fontWeight: '600' }}>
          We have received your submission
        </p>
        <Link
          to='/'
          className='px-4 p-2 mt-4 border rounded text-white'
          style={{ background: 'rgb(14, 11, 61)', textDecoration: 'none' }}
        >
          Return
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ThanksPage;
 