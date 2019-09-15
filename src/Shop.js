import React, {useState, useEffect}  from 'react';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
        console.log(data);

    };

    return (
        <div>
            <h1> this is shop page</h1>
        </div>
    );
}

export default Shop;
