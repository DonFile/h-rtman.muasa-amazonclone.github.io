import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://allstarsdigital.in/wp-content/uploads/2020/09/drive-sales-to-amazon-1024x546.jpg' alt='' />
        <div className='home_row'>
          <Product title='The lean startup' price={29.99} image='https://d.newsweek.com/en/full/1826766/prime-day-2021-amazon-device-deals.jpg'rating={5} />
          <Product title='Analog Quart watch' price={100} image='https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/66735201-02c9-48dd-9dfd-2a182ffb4112/a973b249-2a39-476f-a6e4-48c98268b913/media._SL480_.jpeg' rating={5} />
          <Product title='Gaming Mouse' price={20}  image='https://assets.reedpopcdn.com/g502x_f9QuuM8.jpeg/BROK/thumbnail/1200x1200/quality/100/g502x_f9QuuM8.jpeg' rating={5} />
         
          {/* product */}
        </div>
        <div className='home_row'>
          <Product title='Wireless Earbuds' price={34.54} image='https://m.media-amazon.com/images/I/71exNLc-CnL._AC_SY450_.jpg'rating={5}/>
          <Product title={'Apple iphone 11'} price={327.00} image='https://m.media-amazon.com/images/I/31nPEE8KfxL._AC_.jpg' rating={4}/>
          <Product title={'Apple MacBook Air'} price={877.99} image=' https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg' rating={4} />
          <Product title={'Office chair'} price={ 300} image={'https://snpi.dell.com/snp/images/products/large/en-us~AB790464_v1/AB790464_v1.jpg'} rating={5} />
        </div>
        <div className='home_row'>
          {/* product */}
          <Product title={'HP 15.6'} price={324.00} image='https://m.media-amazon.com/images/I/31Rlc8qeGiL._AC_.jpg' rating={4} />
          <Product title={ 'Home sofa'} price={46} image={'https://ak1.ostkcdn.com/images/products/is/images/direct/67c24056d18ad187e23f8f753c21871c5aa7ecc9/Privacy-Screen-Free-Standing-Net.jpg'} rating={4} />
          <Product title={'Desktops'} price={45} image='https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80' rating={5} />
          <Product title={'Workstation'} price={ 60} image={'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80'} rating={ 4} />
        </div>
        <div className='home_row'>
          <Product title={''} price={50} image={'https://i.pinimg.com/originals/de/84/00/de840058f7d113bb8f014b8782c77183.jpg'} rating={3} />
          <Product title={'Wooden Room Divider'} image={'https://ak1.ostkcdn.com/images/products/is/images/direct/7d00033183ab9a397ca610f02b7156d18b91d8d1/Black-Wood-Eclectic-Room-Divider-Screen-72-x-60-x-1.jpg'} rating={5} />
          <Product title={'Laptops'} price={20} image={'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80'} rating={5} />
          <Product title={''} price={100} image={'https://media.istockphoto.com/id/1270924392/photo/sports-nutrition-supplements-and-chemistry-for-bodybuilding-in-gym-whey-protein-casein-bcaa.jpg?s=612x612&w=0&k=20&c=A5-71KBkd0Xzs0vihaf2DK5P7RNRO83Wq2TB7xwbiZ4='} rating={4} />
        </div>
        <div className='home_row'>
          <Product title={'Cameras'} price={ '100'} image={'https://images.ctfassets.net/3s5io6mnxfqz/2JAEcP3ciDKVQTUHIgDY61/17bf9162dda3bb7d566c5f7953f9526c/AdobeStock_275914630.jpeg'} rating={5} />
          <Product title={'Cameras'} price={150} image={'https://ii1.pepperfry.com/media/catalog/product/t/r/800x880/transformer-gc03-high-back--gaming-chair-in-blue-colour-by-cellbell-transformer-gc03-high-back--gami-7iqkgj.jpg'} rating={5} />
          <Product title={'Cameras'} price={200} image={'https://cdn.autonomous.ai/static/upload/images/common/upload/20201015/desk-setup-for-developers-and-programmers_2c04f31cd72.jpg'} rating={5} />
          <Product title={'Cameras'} price={100} image={ 'https://pix10.agoda.net/hotelImages/7542452/0/7fea6eec516a5e6e9c296490218e9a3f.jpg?ca=8&ce=1&s=1024x768'} rating={ 5} />
        </div>
      </div>
    </div>
  )
}

export default Home