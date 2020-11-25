import React from 'react'

const Card = (props) => {

    return (
        <>
            {props.username && (

                <div className="card">
                    {
                        props.image &&
                        <div className="card-image">

                            <img src={props.image} />

                        </div>
                    }

                    <div className="card-info">
                        
                        <div className="c-info">
                            <h2>{props.username}</h2>
                            <span>{props.following} Following - </span>
                            <span>{props.followers} Followers</span>
                            <span>{props.repos} repositories</span>
                        </div>

                        {props.link && <a href={props.link} target="_blank">Follow</a>}
                        
                    </div>

                    {props.error && <p>{props.error}</p>}

                </div>
            )}
        </>
    )
}

export default Card