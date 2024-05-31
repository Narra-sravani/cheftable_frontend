import React from 'react';
import cheftable from "../assets/cheftable.jpg";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="container-fluid">
                <div className="row mb-5">
                    {/* First Half */}
                    <div className="col-lg-6 p-4" style={{ background: "#BF4A27", color: "white", overflowY: "auto" }}>
                        <div style={{ fontSize: "30px" }}>
                            UNLEASH YOUR CULINARY JOURNEY WITH BOOKMYCHEF<br />
                            <span style={{ fontSize: "20px", marginBottom: "px" }}>Ready to turn your love for cooking into some extra dough?</span>
                        </div>
                        <div className="card m-2" style={{ width: "30rem", height: "fit-content", borderRadius: "15px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="phone" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    {/* <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Service we provide" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Location" />
                                    </div> */}
                                      {/* <div className="mb-3">
      <label className="form-label m-0 p-1">Preferred Choice of Cuisine</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="veg"
          name="cuisine"
          value="veg"
        />
        <label className="form-check-label ml-3" htmlFor="veg">
          Veg
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="nonveg"
          name="cuisine"
          value="nonveg"
        />
        <label className="form-check-label" htmlFor="nonveg">
          Non-Veg
        </label>
      </div>
    </div> */}
                                    <div>
                                        <p>Note: ₹4800 per person excluding alcohol + GST. Alcohol will be available à la carte.</p>
                                    </div>
                                    {/* <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="privacyCheck" />
                                        <label className="form-check-label" style={{ color: "black" }} htmlFor="privacyCheck">
                                            By clicking on this, you have agreed to accept our Privacy Policy.
                                        </label>
                                    </div> */}
                                </form>
                                <button className='btn btn-primary' style={{ width: '90%', backgroundColor: '#BF4A27', borderRadius: "15px", border: "none" }}>Save</button>

                            </div>
                        </div>
                    </div>

                    {/* Second Half */}
                    <div className="col-lg-6 p-5" style={{ background: "#BF4A27", overflowY: "auto" }}>
                        <Link to="/chefTable" ><img src={cheftable} alt="Big Size Image" className="img-fluid" style={{ height: '100%', width: 'auto' }} /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;