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

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length-1? 0 : currentSlide+1)
    }
    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0? images.length-1 : currentSlide -1)
    }
    
    if(loading) return <p>Loading...</p>
    if(errorMsg !== null) return <p>{errorMsg}</p>
    return (
        <div className='container'>
            <BsArrowLeftCircle onClick={handlePrevious} className='arrow arrow-left'/>
            {
                images && images.length?
                images.map((elem,index) => (
                    <img
                    key={elem.id}
                    alt='image'
                    src={elem.download_url}
                    className={currentSlide === index ? 'current-image' : 'current-image hide-current-image' }
                    />
                ))
                :null
            }
            <BsArrowRightCircle onClick={handleNext} className='arrow arrow-right'/>
            <span className='circle-indicators'>
                {
                    images && images.length ?
                    images.map((elem,index) => (
                        <button
                        key={index}
                        className={currentSlide == index ? 'current-indicator':'hide-current-indicator'}
                        onClick={() => setCurrentSlide(index)}>
                        
                        </button>
                    ))
                    :null
                }
            </span>
        </div>
    )
}

export default ImageSlider