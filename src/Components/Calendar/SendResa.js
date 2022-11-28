export const SendResa =  async () => {
    fetch('https://manava.abricode.fr/rest/manava_set_externe_grp.php?code_ext=zYRota6aQe8ILZQ42&type=ajoute_reservation_grp', {
      method: 'POST',
      headers: {
    
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      
   
      },
      body: new URLSearchParams({
          'code_ext': 'zYRota6aQe8ILZQ42',
          'langue': 'fr',
          'provenance': '1',
          'apercu': '0',
          'chambres': '',
          'nbpers_max': '0',
          'adulte_obli': '1',
          'date_debut': '30/12/2022',
          'date_fin': '30/12/2022',
          'nb_adultes': '2',
          'nb_enfants': '0',
          'condition_speciale': '0',
          'secure_key': 'f17a2c13249da1451ded715293e3ed89',
          'hebs[0][id]': '4',
          'hebs[0][id_lot]': '',
          'hebs[0][datedebut]': '31/12/2022',
          'hebs[0][datefin]': '31/12/2022',
          'hebs[0][nbpers]': '2',
          'hebs[0][nbenf]': '0',
          'regles_resa_params_values': '{"0":{}}',
          'nom': 'Chris Kevin',
          'adresse': '',
          'adresse_suite': '',
          'cp': '',
          'ville': '',
          'pays': 'FRANCE',
          'tel': '',
          'description': '',
          'a_i': 'test@gmail.com',
          'a_i2': 'test@gmail.com'
      })
  }).then((response ) => {
    if (response.status >= 200 && response.status <= 299){
        return response.json();
    } else {
        throw Error(response.statusText);
      }
    })
    .then((jsonResponse) => {
console.log(jsonResponse);
    }).catch((error) => {
      // Handle the error
      console.log(error);
    
    
  })
  
  }

