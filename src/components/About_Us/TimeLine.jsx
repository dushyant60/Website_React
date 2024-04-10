import React from 'react';
import "./Timeline.css";

const OnelogicaTimeLine = () => {
    return (
        <div className="main-company-timeline">
        <div className="company-timeline">
            <script src="https://kit.fontawesome.com/fc596df623.js" crossorigin="anonymous"></script>
            <h3>Our Story</h3>
            <div className="timeline">
                {/* First */}
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon">
                        {/* <i className="lni-sport"></i> */}
                    </div>
                    <div className="timeline__event__date">
                        January 2023
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Company Started
                        </div>
                        <div className="timeline__event__description">
                            <p>Our Story began in January 2023 with a vision to revolutionize the industry. Founded with passion and determination, our company embarked on a journey towards excellence. From humble beginnings, we set out to make a mark in the competitive landscape, driven by innovation and a commitment to delivering unparalleled solutions.</p>
                        </div>
                    </div>
                </div>
                {/* Second */}
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        {/* <i className="lni-sport"></i> */}
                    </div>
                    <div className="timeline__event__date">
                        50+ Members
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Our Team Growth
                        </div>
                        <div className="timeline__event__description">
                            <p>Within a short span, our team burgeoned to over 50 dedicated members, each contributing their unique talents and expertise to our collective mission. United by a shared vision, we fostered a culture of collaboration and creativity, laying the foundation for our continued growth and success.</p>
                        </div>
                    </div>
                </div>

                {/* Second */}
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        {/* <i className="lni-sport"></i> */}
                    </div>
                    <div className="timeline__event__date">
                        5+ Projects
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Our Projects
                        </div>
                        <div className="timeline__event__description">
                            <p>Our journey has been marked by the successful execution of over 5 transformative projects, each one a testament to our relentless pursuit of excellence. From concept to completion, we have demonstrated our ability to tackle challenges head-on, delivering results that exceed expectations and drive tangible impact.</p>
                        </div>
                    </div>
                </div>

                {/* Second */}
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        {/* <i className="lni-sport"></i> */}
                    </div>
                    <div className="timeline__event__date">
                        Global Presence
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Our Presence
                        </div>
                        <div className="timeline__event__description">
                            <p>Today, our presence spans the globe, reaching markets far and wide. With a foothold in diverse regions, we have established ourselves as a truly global entity, poised to shape the future of our industry on a worldwide scale.</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </div>
    );
};

export default OnelogicaTimeLine;
