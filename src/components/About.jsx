export const  About = (props)=>{
    return(
       <>
        <div class="container mb-5">
            <div className="row">
                <div className="text-center"><h1 className="alert alert-danger">About US</h1></div>
                <div className="col-sm-6">
                    <img className="img-thumbnail venny"  src="./venny vong.jpg" alt="" />
                </div>
                <div className="col-sm-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi vero vitae hic doloribus aperiam  <h1>{props.snm}</h1> autem deleniti, quam, quos laboriosam assumenda nisi eaque fugit voluptatibus vel doloremque expedita tenetur placeat. Doloribus, possimus! Maiores explicabo sint ea itaque, quasi suscipit eligendi illo dolor voluptates amet labore! Cum et quia illo, similique soluta iusto maxime, qui, iste possimus consectetur alias ab! Debitis nemo maiores enim <h1>{props.vnm}</h1> aspernatur necessitatibus ea consequuntur quae alias delectus soluta impedit, fugit natus nihil quo provident officiis unde obcaecati nisi eaque atque aperiam? Et totam doloribus vero ducimus omnis quidem autem ipsum suscipit facilis blanditiis. Doloribus, officia at soluta consequuntur voluptatibus accusamus aut omnis animi voluptate a voluptates libero corporis delectus quos repellendus magnam facilis provident ratione sit, rerum unde? Facilis est, voluptas consequatur voluptatem officia quisquam ea eos amet natus quibusdam blanditiis aperiam recusandae beatae? Officiis ducimus quia dolorem sequi! Nulla vitae facilis dolor ea impedit reprehenderit illo.</p>
                </div>
            </div>
        </div>
       </>
    )
}