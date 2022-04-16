import React from "react";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='intro-text'>
              <h1>
                {props.data ? props.data.title : 'Loading'}
                <span></span>
              </h1>
              <div className='row'>
              <div className="col-md-8 col-md-offset-2">
                  <p>{props.data ? props.data.heading0 : 'Loading'}</p>
                  <p>{props.data ? props.data.heading1 : 'Loading'}</p>
                  <p>{props.data ? props.data.heading2 : 'Loading'}</p>
                  <p>{props.data ? props.data.heading3 : 'Loading'}</p>
                  <p>{props.data ? props.data.heading4 : 'Loading'}</p>
                  <p>{props.data ? props.data.heading5 : 'Loading'}</p>
                </div>
                <div className="col-md-8 col-md-offset-2">
                  <a
                    href='#journey'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Know More
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
