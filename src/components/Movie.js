import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="col-md-4 col-lg-3">
            <div className="card card-outline mb-3">
                <div className="card-body text-center">
                    <h5 className="font-raleway text-secondary font-weight-bold">{ movie.Title }</h5>
                    <div>
                        <img className="img-fluid border-radius-8"
                        alt={`The movie titled: ${movie.Title}`}
                        title={`${movie.Title}`}
                        src={poster}></img>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <h6 className="font-weight-bold">({movie.Year})</h6> 
                </div>
            </div>
        </div>
    )
};

export default Movie;