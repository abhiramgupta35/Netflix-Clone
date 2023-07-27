import React from 'react'
import "./RowPost.css"
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/constants'
import Youtube from 'react-youtube'


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            setMovies(response.data.results)
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const handleMovie = (id) => {
        console.log()
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('Array empty')
            }
        })

    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <div>
                        <img onClick={() =>handleMovie(obj.id) } className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="Poster" />
                        <h4>{obj.title}</h4>
                    </div>
                )}
            </div>
            { urlId && <Youtube opts={opts} videoId={urlId.key} />}

        </div>
    )
}

export default RowPost