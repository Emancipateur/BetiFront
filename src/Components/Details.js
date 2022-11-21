import React, { useState, useEffect } from "react";

const Details = ({ props }) => {
  console.log(props);

  var villa = props.filter(function (el) {
    return el[0].includes("Villa ");
  });

  var suite = props.filter(function (el) {
    return el[0].includes("Suite ");
  });
  var chambre = props.filter(function (el) {
    return el[0].includes("Chambre ");
  });

  const villaArray = [...new Set(villa.flat())];
  const suiteArray = [...new Set(suite.flat())];
  const chambreArray = [...new Set(chambre.flat())];

  const abc =  [villaArray, suiteArray , chambreArray]

//   console.log(suiteArray);
//   console.log(villaArray);

//   console.log( abc);

  return (
    <div className="detailsContentContainer">
      {/* <h1>Votre réservation </h1> */}
      <div className="detailsContent">
      { abc.map((item ) =>{ 

        //   console.log(item[2] != undefined);

        if (item != "" )
        {
        let uniteName = item[0]
        let days = item.shift()
        console.log(new Date(item[1]));
          return (
        <div className="individualDetails">
            <h2>{uniteName}</h2>
        
   
          <ul>
       {item.map((i) => {

           return (

<li>
          
{

        new Date(i).toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}   
      </li>
           )
       })}
       
         
        
      
          </ul>
        </div>
       )}})}


      </div>
    </div>
  );
};

export default Details;
