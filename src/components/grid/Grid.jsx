import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import CardMovie from '../movie-card/CardMovie';
import './grid.scss';

const Grid = props => {
 
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotaPage] = useState(0);
    const {keyword} = useParams();

    useEffect(() =>{
        const getList = async () => {
            let response = null;

            if(keyword === undefined){
                const params = {}
                switch(props.category){
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params});    
                }
            }else {
                const params = {
                    query: keyword
                }
                response = tmdbApi.search(props.category, {params});
            }
            setItems(response.results);
            setTotaPage(response.total_pages);
        }
        getList();
    },[props.category, keyword]);

  return( 
    <div className='movie-grid'>
        {
            items.map((item, i) => <CardMovie category={props.category} item={item} key={i} />)
        }
    </div>
  );
}

export default Grid;
