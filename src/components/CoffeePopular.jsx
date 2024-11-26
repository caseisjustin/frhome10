import React from "react";
import "./CoffeePopular.scss"
import BagOfCoffee from "../assets/Rectangle 2.png"

const PopularCof = () => {

    return (
        <>
            <section className="popular_prdcs">
                <div className="container">
                    <div className="popular_prdcs_wrp">
                        <div className="poplr_prdc_desc">
                            <h5>Popular Product</h5>
                            <h4>Coffee popular Product</h4>
                        </div>
                        <div className="pplr_prd_card_wrp">
                            <div className="pplr_prd_cards">
                                <div className="pplr_prd_card">
                                    <img src={BagOfCoffee} alt="PHOTO" />
                                    <h5>COFFEE * * * * *</h5>
                                    <b>BRAZIL COFFEE GRED</b>
                                    <p>PRICE - $220.00/ $360</p>
                                    <button>Add to Cart</button>
                                </div>
                                <div className="pplr_prd_card">
                                    <img src={BagOfCoffee} alt="PHOTO" />
                                    <h5>COFFEE * * * * *</h5>
                                    <b>BRAZIL COFFEE GRED</b>
                                    <p>PRICE - $220.00/ $360</p>
                                    <button>Add to Cart</button>
                                </div>
                                <div className="pplr_prd_card">
                                    <img src={BagOfCoffee} alt="PHOTO" />
                                    <h5>COFFEE * * * * *</h5>
                                    <b>BRAZIL COFFEE GRED</b>
                                    <p>PRICE - $220.00/ $360</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                            <div className="pplr_prd_btn">
                                <button>
                                    VIEW ALL PRODUCT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularCof