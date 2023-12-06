// src/components/SphereGallery.js
import React, { useEffect } from 'react';
import './SphereGallery.css';

const SphereGallery = () => {
  const sphereRadius = 220;
  const imageSpeed = 0.006;
  const imagesData = [
    '/svg/chrome.svg', '/svg/css.svg', '/svg/express.svg', '/svg/figma.svg', '/svg/firebase.svg',
    '/svg/git.svg', '/svg/github.svg', '/svg/csharp.svg','/svg/openai.svg',
    '/svg/chrome.svg', '/svg/css.svg', '/svg/figma.svg',
    '/svg/git.svg', '/svg/github.svg', '/svg/csharp.svg',
    '/svg/chrome.svg', '/svg/css.svg', '/svg/express.svg', '/svg/figma.svg',
    '/svg/git.svg', '/svg/github.svg','/svg/express.svg', '/svg/figma.svg',
    '/svg/git.svg', '/svg/github.svg','/svg/express.svg', '/svg/figma.svg',
    '/svg/git.svg', '/svg/github.svg', '/svg/git.svg', '/svg/github.svg','/svg/express.svg', '/svg/figma.svg',
    '/svg/git.svg', '/svg/github.svg','/svg/git.svg', '/svg/github.svg','/svg/express.svg', '/svg/figma.svg','/svg/figma.svg',
    '/svg/git.svg', '/svg/github.svg','/svg/git.svg', '/svg/github.svg','/svg/express.svg', '/svg/figma.svg','/svg/express.svg', '/svg/figma.svg', '/svg/express.svg',
  ];

  useEffect(() => {
    const container = document.getElementById('sphere-container');

    const latitudeLines = 6; 
    const longitudeLines = 8;

    const totalImages = imagesData.length;

    const setInitialPosition = (image, index) => {
      const latitudeRange = Math.PI / 2 - 0.4; 
      const latitude = index === 0 ? 0 : Math.max(
        -latitudeRange,
        Math.min((index % latitudeLines) / (latitudeLines - 2) * latitudeRange * 2 - latitudeRange, latitudeRange)
      );
      const longitude = (Math.floor(index / latitudeLines) % longitudeLines) / longitudeLines * 2 * Math.PI;
      const x = sphereRadius * Math.cos(latitude) * Math.cos(longitude);
      const y = sphereRadius * Math.sin(latitude);
      const z = sphereRadius * Math.cos(latitude) * Math.sin(longitude);

      image.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`;
    };

    const images = document.querySelectorAll('.sphere-img');
    images.forEach(setInitialPosition);

    let imageRotation = 0;
    const moveImages = () => {
      imageRotation += imageSpeed;
      images.forEach((image, index) => {
        const latitudeRange = Math.PI / 2 - 0.4; // Adjusted to provide more latitude space
        const latitude = index === 0 ? 0 : Math.max(
          -latitudeRange,
          Math.min((index % latitudeLines) / (latitudeLines - 1) * latitudeRange * 2 - latitudeRange, latitudeRange)
        );
        const longitude = (Math.floor(index / latitudeLines) % longitudeLines) / longitudeLines * 2 * Math.PI + imageRotation;
        const x = sphereRadius * Math.cos(latitude) * Math.cos(longitude);
        const y = sphereRadius * Math.sin(latitude);
        const z = sphereRadius * Math.cos(latitude) * Math.sin(longitude);

        image.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotate(${imageRotation}rad)`;
      });
      requestAnimationFrame(moveImages);
    };

    moveImages();
  }, []);

  return (
    <div className="techStacks">
      <div className="intro-text-left">
        <h2 className="intro-heading">Join Us on This Journey</h2>
        <p className="intro-paragraph">
          <span className="highlight">Explore our tech stack showcase </span>a testament to our dedication,
          expertise, and commitment to delivering solutions that exceed
          expectations. Dive into the world of possibilities with us and let's
          embark on this transformative journey together!
        </p>
        <button className="contactButton_Tech">Contact Us</button>
      </div>

      <div id="sphere-container">
        {imagesData.map((imgSrc, index) => (
          <img key={index} className="sphere-img" src={imgSrc} alt={`image-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default SphereGallery;
