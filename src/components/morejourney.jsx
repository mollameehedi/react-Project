export const MoreJourney = (props) => {
  return (
    <div id='morejourney' className='text-center'>
      <div className='container'>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => {
              let col;
              if (i === 2) {
                col = "col-12 col-sm-12 col-md-4"
              } else {
                col = "col-12 col-sm-6 col-md-4"
              }
              return (
                <div key={`${d.name}-${i}`} className={`${col} morejourney`}>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='morejourney-img' />
                    <div className='caption'>
                      <h4>{d.title}</h4>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              )
            })
            : 'loading'}
        </div>
      </div>
    </div>
  )
}