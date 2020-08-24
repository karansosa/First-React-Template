import React from "react";
import Card from "./Card";

const CardSection = () =>
{
    return(
        <section className="contact bg-success pb-5">
      <div className="container ">
        <h2 className="text-white text-center pb-2 pt-2">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title = "Title 1" button="Button 1" />
          </div>
          <div className="col-4">
             <Card title = "Title 2" button="Button 2" />
          </div>
          <div className="col-4">
             <Card title = "Title 3" button="Button 3" />
          </div>
        </div>
      </div>
    </section>
    )
}

export default CardSection;