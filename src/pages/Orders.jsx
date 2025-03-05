import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CoffeeCup from "../assets/coffee2.png";  
import { div } from "framer-motion/client";

const Cart = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios.get("https://backend-hackathon-bntm.onrender.com/api/orders/orders", {
                    headers: { "Authorization": token },
                });
                setOrders(data);
            } catch (err) {
                console.log("Error fetching orders");
            }
        };
        fetchOrders();
    }, []);

    const calculateTotal = () => {
        return orders.reduce((sum, order) => sum + (order.price * order.quantity), 0).toFixed(2);
    };

    const handleCheckout = () => {
        // Add your payment processing logic here
        alert("Redirecting to payment gateway...");
    };

    return (
        <div className="min-h-screen bg-[#2c1b18] text-[#e8d3b9] p-8 relative overflow-hidden">
            {/* Background Decoration */}
            <img
                src={CoffeeCup}
                alt="Coffee Cup"
                className="absolute -right-20 -top-20 w-96 opacity-10 animate-float"
            />

            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e09f3e] to-[#9c6644]">
                    Your Coffee Cart
                </h2>

                {orders.length === 0 ? (
                    <div className="">
                        <p className="text-xl text-[#e8d3b97f]">Your cart is empty. Time to brew something delicious!</p>
                       <span>Login to view Your Cart</span> <button className="cursor-pointer p-2 border m-5 my-7" onClick={()=>{
                            navigate('/login');
                        }}>Login</button>
                    </div>
                    
                ) : (
                    <div className="space-y-8">
                        {/* Order Cards */}
                        <div className="grid gap-6">
                            {orders.map((order, index) => (
                                <div key={index} className="bg-[#2c1b18]/90 backdrop-blur-sm p-6 rounded-xl border-2 border-[#e09f3e]/20 shadow-lg">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-[#e09f3e]">{order.product}</h3>
                                            <p className="text-[#e8d3b97f]">{order.description || "Freshly brewed coffee"}</p>
                                        </div>
                                        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                                            order.status === 'ordered' ? 'bg-[#e09f3e]/20 text-[#e09f3e]' :
                                            order.status === 'preparing' ? 'bg-[#9c6644]/20 text-[#9c6644]' :
                                            'bg-green-500/20 text-green-500'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="space-y-2">
                                            <p className="text-lg">Quantity: {order.quantity}</p>
                                            <p className="text-lg">Price: ${order.price.toFixed(2)}</p>
                                        </div>
                                        <p className="text-2xl font-bold text-[#e09f3e]">
                                            ${(order.price * order.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Checkout Section */}
                        <div className="sticky bottom-0 bg-[#2c1b18]/90 backdrop-blur-sm p-6 rounded-xl border-2 border-[#e09f3e]/20 shadow-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold">Total Items: {orders.length}</h3>
                                    <p className="text-3xl font-bold text-[#e09f3e] mt-2">
                                        Total: ${calculateTotal()}
                                    </p>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="bg-gradient-to-r from-[#e09f3e] to-[#9c6644] hover:from-[#9c6644] hover:to-[#e09f3e] text-[#2c1b18] py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 left-20 w-8 h-8 bg-[#e09f3e] rounded-full opacity-20 animate-float-delay-1"></div>
            <div className="absolute bottom-1/4 right-32 w-6 h-6 bg-[#9c6644] rounded-full opacity-20 animate-float-delay-2"></div>
        </div>
    );
};

export default Cart;