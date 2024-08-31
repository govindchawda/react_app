import img2 from './vennyvong3.jpg'
import img5 from './venny vong1.jpg'
export const Home = () =>{
    return(
       <>
        <div className="container mt-5">
            <div className="row">
            <div className="text-center"><h1 className="alert alert-info">Servics</h1></div>
                <div className="col-sm-4">
                    <div className="card p-3 text-center">
                        <img className="rounded" src={img5} alt="" />
                        <h1>venny vong</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam laudantium labore voluptatem earum nostrum consequuntur asperiores dignissimos autem itaque, placeat incidunt cupiditate laboriosam tempora odio maiores atque ratione eos porro.</p>
                       <p><a className="alert alert-info" href="">read more</a></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card p-3 text-center">
                        <img className="rounded" src={img2} alt="" />
                        <h1>venny vong</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam laudantium labore voluptatem earum nostrum consequuntur asperiores dignissimos autem itaque, placeat incidunt cupiditate laboriosam tempora odio maiores atque ratione eos porro.</p>
                       <p> <a className="alert alert-info" href="">read more</a></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card p-3 text-center">
                        <img className="rounded" src={img2} alt="" />
                        <h1>venny vong</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam laudantium labore voluptatem earum nostrum consequuntur asperiores dignissimos autem itaque, placeat incidunt cupiditate laboriosam tempora odio maiores atque ratione eos porro.</p>
                       <p> <a className="alert alert-info" href="">read more</a></p>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}