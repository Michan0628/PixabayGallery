import React from 'react'

export default function Card() {
    return (
        <div className="card__container">
        <img
          src="http://source.unsplash.com/random"
          alt="this is random photo"
          className="card__photo"
        />
        <div className="card__body">
          <div className="card__userName">Photo by John Doe</div>
          <ul>
            <li>Views: 4000</li>
            <li>Downloads: 4000</li>
            <li>Likess: 4000</li>
          </ul>
        </div>
        <div className="card__tags">
          <span className="card__tag">#Flower</span>
          <span className="card__tag">#Flower</span>
          <span className="card__tag">#Flower</span>
        </div>
      </div>
    )
}
