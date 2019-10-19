import React, { useState, useEffect, useRef } from "react";

export const AddGuestForm = props => {
  const nameInputEl = useRef(null);

  const initialFormState = {
    id: null,
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  };

  //data, and function, and initial state
  const [guest, setGuest] = useState(initialFormState);

  // generic handle input change
  const handleInputChanged = event => {
    const { name, value } = event.target;

    setGuest({ ...guest, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault(); // so we don't submit via POST
    console.log("Event!");
    props.addGuest(guest);
    setGuest(initialFormState);
  };

  const setInitialFocus = () => {
    nameInputEl.current.focus();
  };

  useEffect(() => {
    setInitialFocus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          ref={nameInputEl}
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

      <button className="btn btn-primary" type="submit">
        Add Guest
      </button>
    </form>
  );
};
