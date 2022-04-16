
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import React from "react";

function Timeline(props) {

  return (
    <>
      <div className="container">
        <div id='timeline' className='text-center'>
        </div>
        <div className='section-title'>
          <h2 className="pb-5 text-center heading">Roadmap</h2>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#003cb3', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Phase 1</h3>
            <h4 className="vertical-timeline-element-subtitle">Embark on the Journey</h4>
            <ul>
              <li>+ 400 winners for every 1000 tokens minted </li>
              <li>+ 9999 minted: Add 100 ETH to the community wallet</li>
              <li>+ Elect office bearers and launch game development!!!</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#004de6', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Phase 2</h3>
            <h4 className="vertical-timeline-element-subtitle">Build Together</h4>
            <ul>
              <li>+ Launch first Play to Earn game</li>
              <li>+ Capture Voice of the Community to set Sharp Bunnies initiatives</li>
              <li>+ Design Sharp Bunnies merchandise</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#1a66ff', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Phase 3</h3>
            <h4 className="vertical-timeline-element-subtitle">Launch Sharp Bunnies Initiatives</h4>
            <ul>
              <li>+ Launch Sharp Bunnies merchandise on leading e-commerce platform</li>
              <li>+ Hold the first ever physical event</li>
              <li>+ Introduce member + 1 for events</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
export default Timeline;
