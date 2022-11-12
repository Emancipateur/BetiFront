import React from 'react';
import NavBar from '../Components/Navigation2';


        
    if (Screen.width <= 1024) {
document.location = "./mobile";
}





const IndexMobile = () => {

    
    return (
        <>
        <NavBar/>
        <div>
            <h1>Page mobile </h1>
            <p>En attente de contenu</p>
        </div>
        </>
    );
};

export default IndexMobile;