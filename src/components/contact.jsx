export const Contact = (props) => {
  return (
    <div id='contact' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Stalk us</h2>
        </div>
        <div className='contactContainer'>
          {props.data
            ? props.data.map((d, i) => {
              return (
                <div key={`${d.name}-${i}`} className='contact'>
                  <div className='thumbnail'>
                    {' '}
                    <a href={d.website} target="_blank" rel="noreferrer">
                      <img src={d.img} alt='...' className='contact-img' />
                    </a>
                  </div>
                </div>
              )
            })
            : 'loading'}
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Sharp Bunnies.
          </p>
        </div>
      </div>
    </div>
  );
}
