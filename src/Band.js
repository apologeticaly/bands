import React from 'react'
import './band.css'
import data from './metal.json';
import Like from './Like';

function Band() {


    var bands = data.map(function (data) {
        if (data.split === '-') {
            return (
                <div className="band"> 
                    <h2>{data.band_name}</h2>
                    <p>Formed: {data.formed} | Country: {data.origin} | Fans: {data.fans}</p>
        
                    <Like />
                </div>
                )
        }

        else {
            return (
                <div className="band"> 
                    <h2>{data.band_name}</h2>
                    <p>Formed: {data.formed} | Country: {data.origin} | Fans: {data.fans}</p>
                    <p className="split">Split: {data.split}</p>
                </div> 
            )
        }

    });

    return bands
}

export default Band