import React, {useState, useEffect }from 'react';

const FetchReservation = () => {

    const  [dataResa, setDataResa] = useState([])

const ical2json = require('ical2json')

    useEffect(() => {
    // fetch('http://localhost:3004/posts ',{
    fetch(' https://manava.abricode.fr/rest/ical.php?_x=ohoG1mc7Fk7iuH0CCJxWJb5Fs4mkNMYgERXz__QTRbmUSLFGjtfQCdSn3z33ofnMPeppqEvEXJDpRLiDz1eXhA ',{
    method : 'GET',
    mode : 'cors',
  
  headers: {
    'Accept': 'application/ld+json',

 
  }})
    .then((res) => res.text())
    .then((res) => ical2json.convert(res))
    .then((data) => setDataResa(data.VCALENDAR[0].VEVENT))


}, []);

console.log(dataResa);
    return (
 dataResa

    );
};

export default FetchReservation;