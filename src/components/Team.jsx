export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>
            The crazy ones who dared to dream.
          </p>
        </div>
        <div className=''>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-sm-6 col-md-3 team'>
                <div className='thumbnail'>
                  {' '}
                  <img src={d.img} alt='...' className='team-img' />
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
