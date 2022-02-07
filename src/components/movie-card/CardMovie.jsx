import React from 'react';
import './cardMovie.scss';
import {Link} from 'react-router-dom';
import {category} from '../../api/tmdbApi';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';


const CardMovie = props => {

    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return( 
    <Link to={link}>
        <div className='movie-card' style={{backgroundImage: `url(${bg})`}}>
            <Button>
               <i className="fas fa-play-circle"></i>
            </Button>
        </div>
        <h3>{item.title || item.name}</h3>
    </Link>
  );
}

export default CardMovie;

 
    