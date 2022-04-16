export const Journey = (props) => {
  return (
    <div id='journey' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Your Journey</h2>
          <p>
            This is just the beginning. There is so much more to come.
          </p>
        </div>
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
                <div key={`${d.name}-${i}`} className={`${col} journey offset-3`}>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='journey-img' />
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