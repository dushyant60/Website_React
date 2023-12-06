import React from 'react';
import Footer from '../Footer/Footer';
import TextShpere from '../TechStack/TextShpere';
import WorkProcess from './WorkProcess';

const Industry = () => {
  return (
    <div>
      <div>Industry</div>
      
      {/* Work Process Section */}
      <WorkProcess />
      
      {/* Join-us and TextStack Goes Here */}
      <TextShpere />
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Industry;