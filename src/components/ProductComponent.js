import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => {
        const { id, price, title, category, image } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                    <div className="ui small fluid  image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price" style={{display: 'flex', alignItems: 'center'}}>$ {price}
                            {Number(price) < 20 ? <div class="ui red horizontal label" style={{marginLeft: '20px'}}>On Sale</div>: ''}
                        
                        </div>
                        <div className="meta">{category}</div>
                    </div>
                    </div>
                </div>
                </Link>
            </div>        
        );
    })

    return (
        <>
            { renderList }
        </>
    )
}

export default ProductComponent
