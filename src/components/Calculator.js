import React, { useState, useEffect } from 'react'
import deliveryImg from '../assets/img/delivery.png'

function App() {

  // This function runs when the page first loads
  // const [data, setData] = useState([{}])
  // useEffect(() => {
  //   fetch("/list").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //     }
  //   )
  // }, [])

  // DISTANCE variable
  const [distance, setDistance] = useState("");
  const handleDistance = (event) => {
    event.preventDefault();
    setDistance(event.target.value)
  }

  // WEIGHT variable
  const [weight, setWeight] = useState("");
  const handleWeight = (event) => {
    event.preventDefault();
    setWeight(event.target.value)
  }

  // PRICE variable
  const [price, setPrice] = useState("");
  const handleClick = async () => {

    fetch('/calculator', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        distance: distance,
        weight: weight
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPrice("Delivery Charge: $" + data.toFixed(2))
      })
      .catch((err) => {
        console.log(err.message);
        setPrice("Enter a value")

      });

  }

  const closeModal = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    setPrice("")
  }


  return (
    <section className="calculator page-section bg-gradient text-white pb-1 pt-5" id="calculator" >
      <div className="container px-4 px-lg-5 text-center">
        <h2 className="mb-4">Delivery Cost Calculator</h2>
        <hr className="divider divider-light" />
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            {/* <div className="mb-2">
              <img className="img-fluid rounded mb-4" src={deliveryImg} alt="deliveryImg" />
            </div> */}

            {/* DISTANCE SELECT  */}
            <div className="form-floating mb-3">
              <select name="distance" className="form-select pt-1 pb-1 mb-3"
                value={distance} onChange={handleDistance}>
                <option defaultValue="0">Select a distance</option>
                <option value="10">10 km</option>
                <option value="20">20 km</option>
                <option value="30">30 km</option>
                <option value="40">40 km</option>
                <option value="50">50 km</option>
                <option value="100">100 km</option>
              </select>

              {/* WEIGHT SELECT */}
              <div className="form-floating mb-3">
                <select name="weight" className="form-select pt-1 pb-1 mb-3"
                  value={weight} onChange={handleWeight}>
                  <option defaultValue="0">Select a weight</option>
                  <option value="100">100 g</option>
                  <option value="200">200 g</option>
                  <option value="300">300 g</option>
                  <option value="400">400 g</option>
                  <option value="500">500 g</option>
                  <option value="1000">1000g</option>
                </select>

                {/* PRICE  */}

                <button className="btn btn-primary btn-xl" onClick={handleClick}>Calculate</button>

                {/* <!-- Modal --> */}
                {price ?
                  <div className="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    {/* <div class="modal-backdrop fade show "></div> */}
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header bg-primary">
                          <h5 className="modal-title text-white" id="exampleModalLabel">Delivery Cost</h5>
                          {/* <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button> */}
                        </div>
                        <div className="modal-body text-black pt-5 pb-5">
                          <div className="mb-2">
                            <img className="img-fluid rounded mb-4" src={deliveryImg} alt="deliveryImg" />
                          </div>
                          <h3>{price}</h3>
                        </div>
                        <div class="modal-footer">
                          <button type="button" className="btn btn-primary btn-l" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}>OK</button>
                        </div>
                      </div>
                    </div>

                  </div>


                  : null}

                {/* <div className="pt-4">
                  <div className="text-center text-uppercase text-white price">
                    &nbsp;{price}
                  </div>
                </div> */}


              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default App