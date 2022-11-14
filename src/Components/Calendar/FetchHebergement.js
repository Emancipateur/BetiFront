import React, {useState, useEffect }from 'react';

const FetchHebergement = () => {


const  [dataHebe, setDataHebe] = useState([])

useEffect(() => {
  fetch('http://localhost:3004/hebe' ,{
  method : 'GET',
  mode : 'cors',
headers: {
  'Accept': 'application/ld+json'
}})
  .then((res) => res.json())
  .then((data) => setDataHebe(data))

}, []);


const  [Unites1, setUnites1] = useState([])
const  [Unites2, setUnites2] = useState([])
const  [Unites3, setUnites3] = useState([])
const  [Unites4, setUnites4] = useState([])
const  [Unites5, setUnites5] = useState([])
const  [Unites6, setUnites6] = useState([])
const Unites = [Unites1, Unites2,Unites3,Unites4 , Unites5, Unites6 ]

useEffect(() => {
const unite1 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH1"    )).reverse()
  setUnites1(unite1)
const unite2 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH2"    )).reverse()
  setUnites2(unite2)
const unite3 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH3"    )).reverse()
  setUnites3(unite3)
const unite4 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH4"    )).reverse()
  setUnites4(unite4)
const unite5 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH5"    )).reverse()
  setUnites5(unite5)
const unite6 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH6"    )).reverse()
  setUnites6(unite6)

  
return 
  
} ,[dataHebe])




    return (
  Unites
    );
};

export default FetchHebergement;