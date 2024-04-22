import React, { useEffect, useState } from 'react'
import './styles.css'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const ImageSlider = ({url,limit= 5,page = 1}) => {

    const [images,setImages] = useState([])
    const [currentSlide,setCurrentSlide] = useState(0);
    const [errorMsg,setErrorMsg] = useState(null);
    const [loading,setLoading] = useState(false)

    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json();

            if(data){
                setImages(data)
                setLoading(false)
            }

        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if(url !== ''){
            fetchImages(url);
        }
    },[url])
    console.log(images);
    
    if(loading) return <p>Loading...</p>
    if(errorMsg !== null) return <p>{errorMsg}</p>
    return (
        <div className='container'>
            <BsArrowLeftCircle className='arrow arrow-left'/>
            {
                images && images.length?
                images.map(elem => (
                    <img
                    key={elem.id}
                    alt='image'
                    src={elem.download_url}
                    className='current-image'
                    />
                ))
                :null
            }
            <BsArrowRightCircle className='arrow arrow-right'/>
            <span className='circle-indicators'>
                {
                    images && images.length ?
                    images.map((elem,index) => (
                        <button
                        key={index}
                        className='current-indicator'>

                        </button>
                    ))
                    :null
                }
            </span>
        </div>
    )
}

export default ImageSlider