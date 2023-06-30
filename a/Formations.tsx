import useFetch from './useFetch'
import FormationList from './FormationList'
import Spinners from './Spinners'
import Modal from './Modal'
import SearchFormations from './SearchFormations'

const Formations = () => {
  const { isPanding, data: formations, error } = useFetch('http://localhost:8000/formations/')

  return (
    <div className='container-sm mt-5'>
      {isPanding && <div className='loading'><Spinners /></div>}
      {error && <div>{error}</div>}
      {formations && <SearchFormations formations={formations} />}
      {formations && <FormationList formations={formations} title='formations' />}
      {formations && <Modal formations={formations} />}
    </div>
  )
}

export default Formations
