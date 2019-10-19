import React, { useState, useEffect } from "react";
import { GuestList } from "./components/GuestList/GuestList";
import { AddGuestForm } from "./components/AddGuestForm/AddGuestForm";

export const App = () => {
  // guests = state object, setGuests = function to call object, parens = default value.
  const [guests, setGuests] = useState([]);

  // takes function triggered by component lifecycle events
  // components are rerendered everytime state is updated!
  useEffect(() => {
    setGuests([
      {
        id: 1,
        name: "Bob Schwab",
        street: "122 N. Lou",
        city: "Pandowdy",
        state: "MD",
        zip: "12345",
        phone: "222-222-2222"
      }
    ]);

    //alert("Yoo hoo!");
    // Brackets hold what to watch, in this case nothing.
  }, []);

  return (
    <div className="container">
      <h1>Please Sign My Guestbook</h1>

      <div className="row">
        <div className="col">
          <h2>Sign In</h2>
          <AddGuestForm />
        </div>
        <div className="col">
          <h2>Guests</h2>
          <GuestList guests={guests} />
        </div>
      </div>
    </div>
  );
};
