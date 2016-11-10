import React from 'react';
import FilterLink from '../containers/container_filter_link';

const Footer = () => {
  return (
      <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3 hero">
                <p>
                Show: 
                { ' ' }
                <FilterLink 
                    filter="SHOW_ALL"
                >
                    ALL
                </FilterLink>
                { ' ' }
                <FilterLink 
                    filter="SHOW_ACTIVE"
                >
                    ACTIVE
                </FilterLink>
                { ' ' }
                <FilterLink 
                    filter="SHOW_COMPLETED"
                >
                    COMPLETED
                </FilterLink>
                { ' ' }
                <FilterLink 
                    clear={true}
                >
                    CLEAR COMPLETED
                </FilterLink>
                { ' ' }
                <FilterLink 
                    count={true}
                />
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;