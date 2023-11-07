import React from "react";


const albumsData = [
    {
        name : "Signs of Life",
        image : "./images/signs_of_lifes.jpg",
        year : 2005,
        nbtracks : 12,
        names_tracks : ["Lift", "Overboard", "Late Goodbye", "Don't Mess With Me", "3 AM", "Stay", "Seek You Out", "Shallow", "Everything Fades", "Someone Special", "Illusion & Dream", "Sleep"],
    },
]

    function poets() {
        return (
            <div className="album-container">
                {albumsData.map((music, index) => (
                <div key={index}>
                    <h1>Poets of The Fall</h1>
                    <h3>Nombre albums : 9</h3>
                    <img src={music.image}/>
                    <p className="album_name">Album : {music.name}</p>
                    <p>Year : {music.year}</p>
                    <p>Nombre de pistes : {music.nbtracks}</p>
                    <p>Pistes : {music.names_tracks.join(", ")}</p>
                </div>
            ))}
            </div>
        );
    }
    

export default poets;