import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewProduct = () => {
    const [data, changeData] = useState([
        {
            name: "Wireless Headphones",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAbxJg56uoWYQxMxXNM_CyOUQvcJ6YYok60flxyb_Sg&s=10",
            price: 2999
        },
        {
            name: "Smart Watch",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmp0urh_oV5g1rZZI_TYNwt55bs4mJpN_OOt9SnMUgQ&s=10",
            price: 4999
        },
        {
            name: "Bluetooth Speaker",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZ5nxA5amtgWyff1UYdKuvXowdWb8wIqaw4pXJCVRyQ&s=10",
            price: 1899
        },
        {
            name: "Gaming Mouse",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHf_7TNUk1FR2qs4nQTNmqqC5pCtP4iLRHD-NzlQdSA&s=10",
            price: 1299
        },
        {
            name: "Laptop Backpack",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnp4oIh1bygJ6hs5D5yGZ0V3SGgR_kSzB9zRe_JB-Tjg&s=10",
            price: 1799
        },
        {
            name: "USB-C Charger",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGzKRuiKfB-6Pz9VoXpQZHVWKneGXHZFoJqaLXS1Kzw&s=10",
            price: 999
        }
    ]);

    return (
        <div>
            <NavigationBar />

            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">

                            {data.map((value, index) => (
                                <div
                                    className="col-12 col-sm-6 col-md-6 col-lg-3"
                                    key={index}
                                >
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src={value.avatar}
                                            className="card-img-top"
                                            alt={value.name}
                                            height="200"
                                        />

                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">
                                                {value.name}
                                            </h5>

                                            <p className="card-text">
                                                <strong>Price:</strong> ₹{value.price}
                                            </p>

                                            <button className="btn btn-success mt-auto w-100">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct