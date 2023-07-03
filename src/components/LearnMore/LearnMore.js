import {SmallerButton} from "../../styles/GlobalComponents/Button";
import React from "react";

const LearnMore = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <SmallerButton link="/what-we-offer">Learn More</SmallerButton>
    </div>
  )
}

export default LearnMore;