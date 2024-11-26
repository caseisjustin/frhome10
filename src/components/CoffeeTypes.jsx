import React from "react";
import "./CoffeeTypes.scss"
import coffe1 from "../assets/Rectangle 4.png"
import coffe2 from "../assets/Rectangle 4-1.png"
import coffe3 from "../assets/Rectangle 4-2.png"


const CoffeeTypes = () => {

    return (
        <>
            <section className="cfe_tps">
                <div className="container">
                    <div className="cfe_tps_wrp">
                        <div className="cfe_tps_item">
                            <h4>
                                <span>01</span> Best Coffee Flavour
                            </h4>
                                <img src={coffe1} alt="COFFEE" />
                        </div>
                        <div className="cfe_tps_item">
                            <h4>
                                <span>02</span> Place to get last
                            </h4>
                                <img src={coffe2} alt="COFFEE" />
                        </div>
                        <div className="cfe_tps_item">
                            <h4>
                                <span>03</span> Proper roesting
                            </h4>
                                <img src={coffe3} alt="COFFEE" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoffeeTypes