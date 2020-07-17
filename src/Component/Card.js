import React from 'react'
import './card.scss'

export default function Card({image}) {
  const tags = image.tags.split(',')
    return (
        <div className="card__container">
        <img
          src={image.webformatURL}
          alt="this is random photo"
          className="card__photo"
        />
        <div className="card__body">
          <div className="card__userName">Photo by {image.user}</div>
          <ul>
            <li>Views: {image.views}</li>
            <li>Downloads: {image.downloads}</li>
            <li>Likess: {image.likes}</li>
          </ul>
        </div>
        <div className="card__tags">
          {tags.map((tag, index)=>(
          <span className="card__tag" key={index}>#{tag}</span>

          ))}
        </div>
      </div>
    )
}
