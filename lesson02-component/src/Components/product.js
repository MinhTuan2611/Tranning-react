import React, { Component } from 'react';

class Product extends Component{
    render() {
        return (
           
           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <div className="thumbnail">
                   <img src="https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg" alt=""/>
                   <div className="caption">
                       <h3>Iphone X</h3>
                       <p>
                           1.500 USD 
                       </p>
                       <p>
                           <a className="btn btn-primary">Mua hàng</a>
                       </p>
                   </div>
               </div>
           </div>
        );
    }
}
export default Product;
