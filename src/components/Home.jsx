import React from "react";
import FlexBoxWithImage from "./FlexBoxWithImage";
import windmill from "../assets/windmill.png";
import app2 from "../assets/app2.jpg";
import img3 from "../assets/visu.png";
import buzz from "../assets/buzz2.png";
import news from "../assets/news3.png";
import ace from "../assets/ace2.png";
import arrow from "../assets/arrow2.png";


function Home() {
  return (
    <div>
      <FlexBoxWithImage
        head="YOUR DOCUMNET"
        title="Document Management System"
        imageUrl={windmill}
        ace={ace}
        arrow={arrow}
        backgroundColor="gray-100"
      />
      <FlexBoxWithImage
        head="APPLICATIONS"
        title="OMS Application"
        imageUrl={app2}
        ace={ace}
        arrow={arrow}
        backgroundColor="gray-100"
      />
      <FlexBoxWithImage
        head="APPLICATIONS"
        title="Decision Support Vusualization"
        imageUrl={img3}
        ace={ace}
        arrow={arrow}
        backgroundColor="gray-100"
      />
      <FlexBoxWithImage
        head="BUZZ"
        title="OMS Buzz"
        imageUrl={buzz}
        ace={ace}
        arrow={arrow}
        backgroundColor="gray-100"
      />
      <FlexBoxWithImage
        head="SUZLON NEWS LETTER"
        title="WindChimes"
        imageUrl={news}
        ace={ace}
        
        backgroundColor="gray-100"
        msg = "You reaches at bottom"
      />
    </div>
  );
}

export default Home;
