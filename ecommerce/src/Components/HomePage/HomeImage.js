import React from "react";
import 'semantic-ui-css/semantic.min.css'

import Carousel from "semantic-ui-carousel-react";

const HomeImage = () => {
 
  let elements = [
    {
      render: () => {
        return (
          <img className="ui image fluid" src="images/sale.jpg"/>
        );
      }
    },
    {
      render: () => {
        return <img className="ui image fluid" src="images/shopping.jpg" />;
      }
    },
    {
      render: () => {
        return (
          <img className="ui image fluid" src="images/electronics2.jpg" />
        );
      }
    }
  ];
  return (
    <div >
      <Carousel
        elements={elements}
        duration={5000}
        animation="fade left"
        showNextPrev={false}
        showIndicators={false}
      />
    </div>
  );
};
export default HomeImage

