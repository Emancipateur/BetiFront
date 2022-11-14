import React, {useState, useEffect }from 'react';

const FetchReservation = () => {

    const  [dataResa, setDataResa] = useState([])



    useEffect(() => {
    fetch('http://localhost:3004/posts ',{
    method : 'GET',
    mode : 'cors',
  headers: {
    'Accept': 'application/ld+json'
  }})
    .then((res) => res.json())
    .then((data) => setDataResa(data))

}, []);


    return (
 dataResa

    );
};

export default FetchReservation;