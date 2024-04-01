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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </div>
    );
};

export default OnelogicaTimeLine;
