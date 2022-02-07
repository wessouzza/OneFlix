import React, {useState, useEffect} from 'react';
import Proptypes from 'prop-types';
import './movieList.scss';
import {SwiperSlide, Swiper} from 'swiper/react';
import {Link} from 'react-router-dom';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';
import tmdbApi, {category} from '../../api/tmdbApi';
import CardMovie from '../../components/movie-card/CardMovie';

const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if(props.type !== 'similar'){
                switch(props.category){
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                        default:
                            response = await tmdbApi.getTvList(props.type, {params});
                }
            } else{
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }    
        getList();
    }, []);
 
  return( 
        <div className='movie-list'>
            <Swiper grabCursor={true}
                    slidesPerView={ 'auto'}
                    spaceBetween={10}>
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <CardMovie item={item} category={props.category} />
                        </SwiperSlide>
                    ))
                }           
            </Swiper>
         </div>
  );    
}
MovieList.propTypes = {
    category: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired
}

export default MovieList;
