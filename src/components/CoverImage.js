import React from 'react'
import '../styles/CoverImage.css'

class CoverImage extends React.Component {
  render() {
    return(
      <div className='cover-container col-lg-12'>
        <p className='cta-text center-text'>Exclusive art showings with local emerging artists</p>
        <p className='center-text'>Of course we'll serve wine.</p>
      </div>
    )
  }
}

export default CoverImage
