import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logobmc from "../assets/logobmc.png";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        image: '',
        description: '',
        price: '',
        viewMenu: '',
        dataLocation: '',
        guests: 1
    });
    const [cartItems, setCartItems] = useState([]);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form data to cartItems
        addToCart(formData);
        // Reset form data or close modal as needed
        setFormData({
            image: '',
            description: '',
            price: '',
            viewMenu: '',
            dataLocation: '',
            guests: 1
        });
        setModalOpen(false); // Close modal after submission
    }

    const addToCart = (item) => {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logobmc} alt="icon" width="70" height="70" className="d-inline-block align-top" style={{ borderRadius: '10%' }} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link to="/" className="nav-link text-dark">Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/bookings" className="nav-link text-dark">Dashboard</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/how-it-works" className="nav-link text-dark">How it works</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/testimonials" className="nav-link text-dark">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={toggleModal} className='btn btn-primary' style={{ width: '100px', backgroundColor: '#BF4A27', borderRadius: "10px", border: "none" }}>Add Table</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            {modalOpen &&
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Table</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Upload Image</label>
                                        <input type="file" className="form-control" id="image" name="image" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea className="form-control" id="description" name="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="viewMenu" className="form-label">View Menu Button</label>
                                        <input type="text" className="form-control" id="viewMenu" name="viewMenu" value={formData.viewMenu} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dataLocation" className="form-label">Data and Location</label>
                                        <textarea className="form-control" id="dataLocation" name="dataLocation" rows="3" value={formData.dataLocation} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="guests" className="form-label">Number of Guests</label>
                                        <div className="input-group">
                                            <button className="btn btn-outline-secondary" type="button" onClick={() => setFormData(prevState => ({ ...prevState, guests: Math.max(1, formData.guests - 1) }))}>-</button>
                                            <input type="number" className="form-control" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
                                            <button className="btn btn-outline-secondary" type="button" onClick={() => setFormData(prevState => ({ ...prevState, guests: formData.guests + 1 }))}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }

            {/* Display Cart Items */}
            <div className="container mt-4">
                <h2>Cart Items</h2>
                {cartItems.length === 0 ? <p>No items in cart.</p> :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="col">
                                <div className="card shadow-sm">
                                    <img src={item.image} className="card-img-top" alt="Item Image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.description}</h5>
                                        <p className="card-text">
                                            Price: {item.price}<br />
                                            Data and Location: {item.dataLocation}<br />
                                            Guests: {item.guests}
                                        </p>
                                        <button className="btn btn-primary">View Menu</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default Nav;
