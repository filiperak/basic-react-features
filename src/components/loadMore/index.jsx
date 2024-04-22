import React, { useEffect, useState } from 'react'
import './styles.css'
const LoadMore = () => {
    const [loading,setLoading] = useState(false)
    const [products,setProducts] = useState([])
    const [count,setCount] = useState(0)
    const [disable,setDisable] = useState(false)

    async function fetchProducts() {
        try{
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0? 0: count * 20}`)
            const result = await res.json()
            if(result && result.products && result.products.length){
                setProducts((prevData => [...prevData,...result.products]))
                setLoading(false)
            }
        }catch(e)   {
            console.log(e);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    },[count])
    useEffect(() => {
        if( products && products.length === 100) setDisable(true)
    },[count])

    if(loading) return <p>Loading...</p>
  return (
    <div className='load-more-container'>
        <div className="product-container">
        {
            products && products.length?
            products.map(elem => (
                <div key={elem.id} className='product'>
                    <img src={elem.thumbnail}  />
                    <p>{elem.title}</p>
                </div>
            ))
            :<p>error</p>
        }
        </div>
        <div className='button-container'>
            <button disabled={disable} onClick={() => setCount(count + 1)}>load more</button>
            {disable && <p>no more products</p>}
        </div>
    </div>
  )
}

export default LoadMore