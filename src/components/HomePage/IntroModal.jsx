import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa';
import "./IntroModal.css";

const IntroModal = ({ isOpen, closeModal, videoSrc }) => {
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlayed(true);
    }
  };

  useEffect(() => {
    if (isOpen && !played) {
      // Play the video when the modal opens
      handlePlay();
    }
  }, [isOpen, played]);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setPlayed(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Intro Video Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      
      <div className="video-container">
      <button className="close-modal" onClick={closeModal}><FaTimes /></button>
        <video
          ref={videoRef}
          className="intro-modal-video"
          autoPlay
          controls={!played} // Show controls only when video is not playing
          onClick={handlePlay}
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default IntroModal;
