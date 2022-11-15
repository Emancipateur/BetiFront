import React , {useState, useEffect}from 'react';

const Details = ({props}) => {

    // console.log(props);

    var villa = props.filter(function (el) {
        

        return el[1] != "Villa ";
      })
    var suite = props.filter(function (el) {

        return el[1] != "Suite ";
      })


    

    const villaArray = [...new Set(villa.flat())];

    



// console.log( villaArray);

    return (
        <div className='detailsContentContainer'>
    <h1>Votre réservation </h1>
    <div className="detailsContent">
<div className='individualDetails'>

<h2>{villaArray[0]}</h2>
<ul>
  {props.map((item) =>  {

      return (
          <li>        {item[1].toLocaleDateString('fr-FR',  { weekday: 'long' ,year: 'numeric', month: 'long', day: 'numeric',})}</li>
    
    

)})}</ul> </div>

</div>
        </div>
    );
};

export default Details;