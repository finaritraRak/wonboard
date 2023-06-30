import useFetch from './useFetch'
import GallerryList from './GallerryList'
import Spinners from './Spinners'
import Modal from './Modal'
import SearchGallery from './SearchGallery'

const Gallery = () => {
  const { isPanding, data: gallery, error } = useFetch('http://localhost:8000/gallery/')

  return (
    <div className='container-sm mt-5'>
      {isPanding && <div className='loading'><Spinners /></div>}
      {error && <div>{error}</div>}
      {gallery && <SearchGallery gallery={gallery} />}
      {gallery && <GallerryList gallery={gallery} title='Gallery' />}
      {gallery && <Modal gallery={gallery} />}
    </div>
  )
}

export default Gallery
