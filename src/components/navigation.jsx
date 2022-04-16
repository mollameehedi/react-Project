import { useEffect, useState } from "react";

const navData = [
  {
    link: '#Gallery',
    text: 'Gallery'
  },
  {
    link: '#journey',
    text: 'Journey'
  },
  {
    link: '#timeline',
    text: 'Roadmap'
  },
  {
    link: '#faq',
    text: 'FAQ'
  }
]

export const Navigation = (props) => {

  const [isMobile, setIsMobile] = useState(false)

  let screenSize = window.innerWidth
  console.log(screenSize);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Sharp Bunnies
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {
              navData.map(data => {
                return (
                  <li key={Math.random()}>
                    {
                      isMobile === true ? <a href={data.link} className='page-scroll' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'
                      >
                        {data.text}
                      </a> :
                        <a href={data.link} className='page-scroll'>
                          {data.text}
                        </a>
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
