import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Interface({ groupData }) {
    const lyricsCarouselSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  
    const imagesCarouselSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  
    const albumsCarouselSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  
    return (
      <div>
        <div className="presentation">
          <img src={groupData.logo} alt={groupData.name} />
          <h2>
            {groupData.provenance} - {groupData.Année_début} - {groupData.genre}
          </h2>
  
          {/* Carrousel d'extraits de paroles */}
          <Slider {...lyricsCarouselSettings}>
            {groupData.lyrics.map((lyrics, index) => (
              <div key={index}>
                <p>{lyrics}</p>
              </div>
            ))}
          </Slider>
        </div>
  
        <div className="description">
          <h1>Description</h1>
          {groupData.description}
          <Slider {...imagesCarouselSettings}>
            {groupData.images.map((images, index) => (
              <div key={index}>
                <img src={images} alt={`Image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
  
        <div className="albums">
          <Slider {...albumsCarouselSettings}>
            {groupData.albums.map((album, index) => (
              <div key={index}>
                <img src={album.image} alt={album.name} />
                <p>{album.name}</p>
                <p>{album.year}</p>
                <p>{album.names_tracks.join(', ')}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  
  export default Interface;

