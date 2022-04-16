import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='Gallery' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Gallery</h2>
          <p>
            Sharp Bunnies is a collection of 1000s of programmatically generated unique images with over 200+ attributes. You mint the Sharp Bunny and King Osgood will give the Lucky Egg for every Sharp Bunny you mint! Here is some of the art work.
          </p>
        </div>
        <div className="">
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div>  <Image smallImage={d.smallImage} /> 
                </div>
              ))
              : 'Loading...'}

          </div>
        </div>
      </div>
    </div>
  )
}
