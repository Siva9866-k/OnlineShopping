    import React from 'react'
    import "./Home.css"

    function Home() {

      return (

        <div className='home-container'>

          <div className='left'>

            <h1>
              ONLINE <br />
              SHOPPING
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed diam nonummy nibh euismod tincidunt.
            </p>

            <button>
              SEE MORE
            </button>

          </div>

          <div className='right'>

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800"
              alt="fashion"
            />

          </div>

        </div>

      )
    }

    export default Home