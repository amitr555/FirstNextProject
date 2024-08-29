import React from 'react'

const Container2 = () => {
  return (
       <div className="second-container">
           <h2>Book your Dream Car Now! </h2>
          {
    <p>
      Rent a car online now from one of our worldwide locations. With over
      <br /> 20 years’ experience in luxury car and customer services, all we
      need
      <br />
      is your ID and you can book any car.
    </p>
};

        <div className="pl">
         <input type="text"className="placeholder" style={{ width: '20%', marginLeft: '1220px' }}></input>

        <input type="text"className="placeholder" style={{ marginLeft: '660px', width: '20%' }}></input>
        <input type="text"className="placeholder" style={{width: '20%'}}></input>
        <button className="bo">Book</button>
        </div> 
    </div>
  );
};

export default Container2;
