import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import styles from "./styles.css";
import { createAuth0Client } from '@auth0/auth0-spa-js';
let auth0Client = null;
function Button() {

    
    function displayAll() {
        fetch('/a').then(res => res.text()).then(res => alert(res));
    }

    function displayBrands() {
        fetch('/b').then(res => res.text()).then(res => alert(res));
    }

    function displayNames() {
        fetch('/c').then(res => res.text()).then(res => alert(res));
    }

    function displayRating() {
        fetch('/d').then(res => res.text()).then(res => alert(res));
    }

    function addToTable() {
        let name = prompt("what name is name");
        let brand = prompt("what barnd is brand");
        let rating = prompt("what rate is rating");
        let body = { name: name, brand: brand, rating: rating }

        fetch('/e', { method: 'POST', headers: { 'content-type': 'application/json' }, mode: 'cors', body: JSON.stringify(body) });
    }

    function deleteFromTable() {
        let name = prompt("name : ");
        let body = { name: name }
        fetch('/f', { method: 'DELETE', headers: { 'content-type': 'application/json' }, mode: 'cors', body: JSON.stringify(body) });
    }

    return (

        <div>
            <button class="button" onClick={displayAll}>
                <span>displayAll</span>
            </button>

            <button class="button2" onClick={displayBrands}>
                <span>displayBrands</span>
            </button>

            <button class="button2" onClick={displayNames}>
                <span>displayNames</span>
            </button>

            <button class="button2" onClick={displayRating}>
                <span>displayRating</span>
            </button>

            <button class="button2" onClick={addToTable}>
                <span>addToTable</span>
            </button>

            <button class="button2" onClick={deleteFromTable}>
                <span>deleteFromTable</span>
            </button>

            <div class="a">𝒟𝑒𝓋 𝒮𝒽𝒶𝓂𝒾𝒽𝑜𝓀𝑒</div>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Button />);


