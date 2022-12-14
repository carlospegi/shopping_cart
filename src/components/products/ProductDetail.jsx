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
                <div className=' m-2 text-sm md:text-lg flex justify-center pt-28 flex-col md:flex-row '>
                    <div className='md:w-[50%] flex flex-col  text-sm md:text-lg font-bold justify-center p-6 '>
                        <h2 className='text-xl mb-1' >{detail.title}</h2>
                        <p className='text-gray-600 mb-1'>$ {detail.price}</p>
                        <div className="">
                            <p className="text-green-400 mb-1">New</p>
                            <div className="flex mb-1  ">
                                <p className=' mb-1'>size</p>
                                <select className='ml-2 border-solid border-2 border-sky-500' placeholder='size'>
                                    <option className='text-sm' value="34">34</option>
                                    <option className='text-sm' value="35">35</option>
                                    <option className='text-sm' value="36">36</option>
                                    <option className='text-sm' value="37">37</option>
                                    <option className='text-sm' value="38">38</option>
                                    <option className='text-sm' value="39">39</option>
                                    <option className='text-sm' value="40">40</option>
                                    <option className='text-sm' value="41">41</option>
                                    <option className='text-sm' value="42">42</option>
                                </select>
                            </div>
                        </div>
                        <div className=''>

                            <button className='mt-3  w-[50%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addCart(detail.id)}>Add</button>
                        </div>
                    </div>

                    <div className='md:w-[60%] justify-center mb-5'>
                        {

                            url ? <img src={`${images}`} alt="img" /> : <img src={`${detail.image}`} alt="img" />

                        }
                        <div className='w-[90%] flex justify-center' >

                            <input className='w-[50%] ' type="range" min="1" max="36" value={url} onChange={handleInput} />
                        </div>
                    </div>
                </div>
            }
            <div className="mt-5">
                <p><b>Description: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos ipsa ex repudiandae nesciunt cumque voluptas vero ad ipsam, molestiae, distinctio non amet laboriosam. Neque laborum recusandae quaerat odit dolorum? <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nulla, numquam similique, adipisci itaque voluptatibus omnis natus inventore placeat aliquid blanditiis esse et distinctio corporis hic voluptatum, quas deleniti vel!</p>
            </div>


            <h2 className='related' >related products</h2>

            <div className="flex flex-col md:grid grid-cols-3 gap-1">

                {
                    products.map((item, index) => {
                        if ((item.category === detail.category) && index < 6) {
                            return <ProductItem
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
