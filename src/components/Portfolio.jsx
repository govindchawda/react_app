import img2 from './venny vong1.jpg'
export const Portfolio = ()=>{
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className='text-center'><h1 className='alert alert-dark'>Portfolio</h1></div>
                    <div className="col-sm-12">
                        <div className='port'>
                         <img className='rounded' src={img2} alt=""/>
                         <img className='rounded' src={img2} alt=""/>
                         <img className='rounded' src={img2} alt=""/>
                         <img className='rounded' src={img2} alt=""/>
                         <img className='rounded' src={img2} alt=""/>
                         <img className='rounded' src={img2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// export default Portfolio;