import React, { useState, useEffect } from "react";

export const EditGuestForm = props => {
  //data, and function, and initial state
  const [guest, setGuest] = useState(props.currentGuest);

  // generic handle input changed
  const handleInputChanged = event => {
    const { name, value } = event.target;

    setGuest({ ...guest, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault(); // so we don't submit via POST
    console.log("EVENT!");
    props.updateGuest(guest);
  };

  useEffect(() => {
    setGuest(props.currentGuest);
    //array of dependencies
  }, [props]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          name="name"
          value={guest.name}
          className="form-control"
          onChange={handleInputChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Street</label>
        <input
          required
          type="text"
          name="street"
          value={guest.street}
          className="form-control"
          onChange={handleInputChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">City</label>
        <input
          required
          type="text"
          name="city"
          value={guest.city}
          className="form-control"
          onChange={handleInputChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">State</label>
        <input
          required
          type="text"
          name="state"
          value={guest.state}
          className="form-control"
          onChange={handleInputChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Zip</label>
        <input
          required
          type="text"
          name="zip"
          value={guest.zip}
          className="form-control"
          onChange={handleInputChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Phone</label>
        <input
          required
          type="text"
          name="phone"
          value={guest.phone}
          className="form-control"
          onChange={handleInputChanged}
        />
      </div>

      <button className="btn btn-primary mr-2" type="submit">
        Update Guest
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
};
