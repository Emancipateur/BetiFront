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


const  [Unites1, setUnites1] = useState([
  {
      "id": 3,
      "uniteId": 1,
      "libelleUnite": " Unité 1",
      "codeUnite": "UH1",
      "code": "POISSON",
      "libelle": "Poisson",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 3,
      "typeHebergementLibelle": "Villa",
      "typeHebergementCode": "VILLA",
      "totaliteUnite": true
  },
  {
      "id": 2,
      "uniteId": 1,
      "libelleUnite": " Unité 1",
      "codeUnite": "UH1",
      "code": "DAWA",
      "libelle": "Dawa",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 2,
      "typeHebergementLibelle": "Suite",
      "typeHebergementCode": "SUITE",
      "totaliteUnite": false
  },
  {
      "id": 1,
      "uniteId": 1,
      "libelleUnite": " Unité 1",
      "codeUnite": "UH1",
      "code": "RAIE",
      "libelle": "Raie",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 1,
      "typeHebergementLibelle": "Chambre",
      "typeHebergementCode": "CHAMBRE",
      "totaliteUnite": false
  }
])
const  [Unites2, setUnites2] = useState([
  {
      "id": 6,
      "uniteId": 2,
      "libelleUnite": " Unité 2",
      "codeUnite": "UH2",
      "code": "ARBRE",
      "libelle": "Arbre",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 3,
      "typeHebergementLibelle": "Villa",
      "typeHebergementCode": "VILLA",
      "totaliteUnite": true
  },
  {
      "id": 5,
      "uniteId": 2,
      "libelleUnite": " Unité 2",
      "codeUnite": "UH2",
      "code": "KAORI",
      "libelle": "Kaori",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 2,
      "typeHebergementLibelle": "Suite",
      "typeHebergementCode": "SUITE",
      "totaliteUnite": false
  },
  {
      "id": 4,
      "uniteId": 2,
      "libelleUnite": " Unité 2",
      "codeUnite": "UH2",
      "code": "NIAOULI",
      "libelle": "Niaouli",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 1,
      "typeHebergementLibelle": "Chambre",
      "typeHebergementCode": "CHAMBRE",
      "totaliteUnite": false
  }
])
const  [Unites3, setUnites3] = useState([
  {
      "id": 9,
      "uniteId": 3,
      "libelleUnite": " Unité 3",
      "codeUnite": "UH3",
      "code": "OISEAUX",
      "libelle": "Oiseaux",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 3,
      "typeHebergementLibelle": "Villa",
      "typeHebergementCode": "VILLA",
      "totaliteUnite": true
  },
  {
      "id": 8,
      "uniteId": 3,
      "libelleUnite": " Unité 3",
      "codeUnite": "UH3",
      "code": "NOTOU",
      "libelle": "Notou",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 2,
      "typeHebergementLibelle": "Suite",
      "typeHebergementCode": "SUITE",
      "totaliteUnite": false
  },
  {
      "id": 7,
      "uniteId": 3,
      "libelleUnite": " Unité 3",
      "codeUnite": "UH3",
      "code": "ROUSSETTE",
      "libelle": "Roussette",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 1,
      "typeHebergementLibelle": "Chambre",
      "typeHebergementCode": "CHAMBRE",
      "totaliteUnite": false
  }
])
const  [Unites4, setUnites4] = useState([
  {
      "id": 12,
      "uniteId": 4,
      "libelleUnite": " Unité 4",
      "codeUnite": "UH4",
      "code": "FLEURS",
      "libelle": "Fleurs",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 3,
      "typeHebergementLibelle": "Villa",
      "typeHebergementCode": "VILLA",
      "totaliteUnite": true
  },
  {
      "id": 11,
      "uniteId": 4,
      "libelleUnite": " Unité 4",
      "codeUnite": "UH4",
      "code": "POINSETTIA",
      "libelle": "Poinsettia",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 2,
      "typeHebergementLibelle": "Suite",
      "typeHebergementCode": "SUITE",
      "totaliteUnite": false
  },
  {
      "id": 10,
      "uniteId": 4,
      "libelleUnite": " Unité 4",
      "codeUnite": "UH4",
      "code": "FRANGIPANIER",
      "libelle": "Frangipanier",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 1,
      "typeHebergementLibelle": "Chambre",
      "typeHebergementCode": "CHAMBRE",
      "totaliteUnite": false
  }
])
const  [Unites5, setUnites5] = useState([
  {
      "id": 15,
      "uniteId": 5,
      "libelleUnite": " Unité 5",
      "codeUnite": "UH5",
      "code": "FRUITS",
      "libelle": "Fruits",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 3,
      "typeHebergementLibelle": "Villa",
      "typeHebergementCode": "VILLA",
      "totaliteUnite": true
  },
  {
      "id": 14,
      "uniteId": 5,
      "libelleUnite": " Unité 5",
      "codeUnite": "UH5",
      "code": "CARAMBOLE",
      "libelle": "Carambole",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 2,
      "typeHebergementLibelle": "Suite",
      "typeHebergementCode": "SUITE",
      "totaliteUnite": false
  },
  {
      "id": 13,
      "uniteId": 5,
      "libelleUnite": " Unité 5",
      "codeUnite": "UH5",
      "code": "BARBADINE",
      "libelle": "Barbadine",
      "dateDebutIndisponibilite": null,
      "dateFinIndisponibilite": null,
      "raisonIndisponibilite": null,
      "typeHebergementId": 1,
      "typeHebergementLibelle": "Chambre",
      "typeHebergementCode": "CHAMBRE",
      "totaliteUnite": false
  }
])
const  [Unites6, setUnites6] = useState([{
  "id": 18,
  "uniteId": 6,
  "libelleUnite": " Unité 6",
  "codeUnite": "UH6",
  "code": "COQUILLAGES",
  "libelle": "Coquillages",
  "dateDebutIndisponibilite": null,
  "dateFinIndisponibilite": null,
  "raisonIndisponibilite": null,
  "typeHebergementId": 3,
  "typeHebergementLibelle": "Villa",
  "typeHebergementCode": "VILLA",
  "totaliteUnite": true
},
{
  "id": 17,
  "uniteId": 6,
  "libelleUnite": " Unité 6",
  "codeUnite": "UH6",
  "code": "NAUTILE",
  "libelle": "Nautile",
  "dateDebutIndisponibilite": null,
  "dateFinIndisponibilite": null,
  "raisonIndisponibilite": null,
  "typeHebergementId": 2,
  "typeHebergementLibelle": "Suite",
  "typeHebergementCode": "SUITE",
  "totaliteUnite": false
},    {
  "id": 16,
  "uniteId": 6,
  "libelleUnite": " Unité 6",
  "codeUnite": "UH6",
  "code": "TROCAS",
  "libelle": "Trocas",
  "dateDebutIndisponibilite": null,
  "dateFinIndisponibilite": null,
  "raisonIndisponibilite": null,
  "typeHebergementId": 1,
  "typeHebergementLibelle": "Chambre",
  "typeHebergementCode": "CHAMBRE",
  "totaliteUnite": false
}])
const Unites = [Unites1, Unites2,Unites3,Unites4 , Unites5, Unites6 ]

// useEffect(() => {
// // const unite1 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH1"    )).reverse()
// //   setUnites1(unite1)
// // const unite2 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH2"    )).reverse()
// //   setUnites2(unite2)
// // const unite3 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH3"    )).reverse()
// //   setUnites3(unite3)
// // const unite4 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH4"    )).reverse()
// //   setUnites4(unite4)
// // const unite5 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH5"    )).reverse()
// //   setUnites5(unite5)
//  const unite6 = dataHebe.filter((hebergement =>  hebergement.codeUnite === "UH6"    )).reverse()
//   setUnites6(unite6)

// return 
  
// } ,[dataHebe])




    return (
  Unites
    );
};

export default FetchHebergement;