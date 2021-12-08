import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
import smoking from '../../MainFigma/img/smoking.svg'
export default function Items({title, id}) {
    return (
        <Link to={`/blogs/${id}`} className="card">
          <img
            className="card-img-top"
            src={smoking}
            alt="card img"
            style={{ width: "100%", height: "300px" }}
          />
          <div className="card-body">
            <div className="card-info">
              <p className="card-date">18:26 11.01.2021</p>
              <span className="card-number">365</span>
            </div>
            <h4 className="card-title">"ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ....."</h4>
          </div>
         </Link> 
      );
}
