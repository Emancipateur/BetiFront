import {
    format,

  } from "date-fns";

export const getPrice =  async (debut, fin) => {
   const debutFormat =  format(debut, 'dd/MM/yyyy')

   const finFormat =  format(fin, 'dd/MM/yyyy')


fetch('https://manava.abricode.fr/rest/manava_get_externe_grp.php', {
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
        'date_debut': debutFormat,
        'date_fin': finFormat,
        'nb_adultes': '2',
        'nb_enfants': '0',
        'condition_speciale': '0',
        'type': 'rech_hebs'
    })
});

}