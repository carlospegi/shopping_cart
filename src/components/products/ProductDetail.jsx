import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider'
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem'

const ProductDetail = () => {
    const [detail, setDetail] = useState([])
    const params = useParams()
    const context = useContext(DataContext)
    const [products] = context.products
    const addCart = context.addCart
    const [url, setUrl] = useState(0)
    const [images, setImages] = useState('01')


    const handleInput = (e) => {

        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)
    }

    useEffect(() => {

        products.forEach(item => {
            if (item.id === parseInt(params.id)) {
                setDetail(item)

            }
        })

    }, [params, products]);


    useEffect(() => {
        const values = `${detail.img1}${url}${detail.img2}`
        setImages(values)
    }, [url, params.id]);


    if (detail.length < 1) { return null }
    return (
        <>
            {
                <div className='detail'>
                    <h2>{detail.title}</h2>
                    <p className='price'>$ {detail.price}</p>
                    <div className="grid">
                        <p className="new">New</p>
                        <div className="size">
                            <select placeholder='size'>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                            </select>
                            <p>size</p>
                        </div>
                    <button onClick={() => addCart(detail.id)}>Add</button>
                    </div>

                    {

                        url ? <img className='shoe' src={`${images}`} alt="img" /> : <img className='shoe' src={`${detail.image}`} alt="img" />

                    }
                    <input type="range" min="1" max="36" value={url} onChange={handleInput} />
                    <div className="description">
                        <p><b>Description: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos ipsa ex repudiandae nesciunt cumque voluptas vero ad ipsam, molestiae, distinctio non amet laboriosam. Neque laborum recusandae quaerat odit dolorum? <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nulla, numquam similique, adipisci itaque voluptatibus omnis natus inventore placeat aliquid blanditiis esse et distinctio corporis hic voluptatum, quas deleniti vel!</p>
                    </div>
                </div>
            }


            <h2 className='related' >related products</h2>

            <div className="products">

                {
                    products.map( (item, index) => { 
                        if((item.category === detail.category) && index < 6){
                            return   < ProductItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            count={item.cantidad}
                        />
                        }
                  
                })
                }
            </div>
        </>
    )
}

export default ProductDetail
