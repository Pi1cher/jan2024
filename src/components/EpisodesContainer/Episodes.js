import {useEffect, useState} from "react";

import css from "./Episodes.module.css"
import {episodeService} from "../../services/episodeService";
import {Episode} from "./Episode";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});



    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })
    }, [query.get('page')])

    const prev = () => {
      setQuery(prev => {
          prev.set('page', (+prev.get('page') -1).toString())
          return prev
      })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
          return prev
        })
    }


    return (
        <div className={css.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} chapter={episode}/>)}
            <div className={css.PrevNext}>
                <button disabled={!prevNext.prev} onClick={prev}>Prev</button>
                <button disabled={!prevNext.next} onClick={next}>Next</button>
            </div>
        </div>
    );
};

export {Episodes};