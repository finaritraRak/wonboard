import React, { useState } from 'react'



const SearchFormations = ({ formations }: any) => {

    const [searchTerm, setSearchTerm]: any = useState('')
    const [title, setTitle]: any = useState('')
    const [modal, setModal] = useState(false);
    const [bigImage, setBigImage]: any = useState('');
    const [image, setImage]: any = useState('');

    const toggleModal = (e: any, image: any) => {

        setModal(!modal);
        console.log(e.src, image.title)
        setBigImage(e.src)
        setImage(image)

    };

    return (
        <div>
            <div className='title-search-photographer'>
                <input type="text" placeholder=' Search formateur...' onChange={(e) => { setSearchTerm(e.target.value); setTitle(e.target.value) }} />
                <div className='title-gallery'>
                    {searchTerm && <h1 className='serchingTitle'> {`${title}'s`} Formations</h1>}
                    {!searchTerm && <h1> Formations</h1>}
                    <div><img src="images/gallery.png" alt="" /></div>
                </div>
            </div>

            <div className='gallery-list' >
                {formations && formations.filter((image: any) => {
                    if (searchTerm === '') {
                        return formations
                    } else if (image.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return image
                    }
                }).map((formations: any) => (
                    <div className='gallery-list'>
                        <div key={formations.id} className='gallery-preview'>
                            <p onClick={(e) => toggleModal(e.target, formations)}>
                                <img src={formations.image} alt="img" />
                            </p>
                            <p><b>Title:</b> {formations.title}</p>
                            <p><b>Photo by:</b> {formations.author}</p>
                            <p><b>Description:</b> {formations.body}</p>
                        </div>
                    </div>
                ))}

                {modal && bigImage && formations &&
                    (<div className="modal">
                        <div className="modal-content"></div>
                        <div onClick={(e) => toggleModal(e.target, formations)} className="overlay">
                            <div className="modal-content" >
                                <h2>{formations.title} / {formations.author}</h2>
                            
                                {<a href={bigImage} target="_blank" ><p className='hover-text'>Open full size</p> <p><img src={bigImage} alt="img" /></p></a>}
                                <button className="close-modal" onClick={(e) => toggleModal(e.target, formations)}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default SearchFormations