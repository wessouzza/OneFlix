import React from 'react';
import HeroSlide from '../components/hero-slider/HeroSlide';
import {Link} from 'react-router-dom';
import { OutLine } from '../components/button/Button';
import MovieList from '../components/movie-list/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className='container'>
        <div className='section mb-3'>
          <div className='section__header mb-2'>
            <h2>What's new</h2>
            <Link to='/movie'>
              <OutLine className='small'>Show more</OutLine> 
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>

        <div className='section mb-3'>
          <div className='section__header mb2'>
            <h2>Top rated</h2>
            <Link to='/movie'>
              <OutLine className='small'>Show more</OutLine> 
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        <div className='section mb-3'>
          <div className='section__header mb2'>
            <h2>TV shows</h2>
            <Link to='/tv'>
              <OutLine className='small'>Show more</OutLine> 
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>

        <div className='section mb-3'>
          <div className='section__header mb2'>
            <h2>Top rated TV</h2>
            <Link to='/tv'>
              <OutLine className='small'>Show more</OutLine> 
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.upcoming}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
