export const Testimonials = (props) => {
  return (
    <div id='lore' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Lore</h2>
          <p>
            This is how it all started...
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => {
              let col;
              if (props.data.length % 2 !== 0 && i === 0) {
                col = "col-12 col-md-4"
              } else {
                col = "col-12 col-sm-6 col-md-4"
              }
              return (
                <div key={`${d.name}-${i}`} className={`${col} testimonials`}>
                  <div className='thumbnail' style={{ border: "none" }}>
                    {' '}
                    <img src={d.img} alt='...' className='testimonials-img' />
                    <div className='caption'>
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
