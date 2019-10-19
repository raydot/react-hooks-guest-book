import React, { useState } from "react";

export const AddGuestForm = props => {
  const initialFormState = {
    id: null,
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  };

  const [guest, setGuest] = useState(initialFormState);

  // generic handle input change
  const handleInputChanged = event => {
    const { name, value } = event.target;

    setGuest({ ...guest, [name]: value });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleInputChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Street</label>
        <input type="text" name="street" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="name">City</label>
        <input type="text" name="city" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="name">State</label>
        <input type="text" name="state" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Zip</label>
        <input type="text" name="zip" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Phone</label>
        <input type="text" name="phone" className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Add Guest
      </button>
    </form>
  );
};
