import React, { useState, useEffect } from "react";
import { GuestList } from "./components/GuestList/GuestList";
import { AddGuestForm } from "./components/AddGuestForm/AddGuestForm";
import { EditGuestForm } from "./components/EditGuestForm/EditGuestForm";

export const App = () => {
  const initialFormState = {
    id: null,
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  };
  // guests = state object, setGuests = function to call object, parens = default value.
  const [guests, setGuests] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentGuest, setCurrentGuest] = useState(initialFormState);

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

  const addGuest = guest => {
    guest.id = guests.length + 1; // not the greatest way, but ok for this
    // start with current list and add a new one:
    setGuests([...guests, guest]);
  };

  const deleteGuest = id => {
    setGuests(guests.filter(guest => guest.id !== id));
  };

  const editGuest = guest => {
    setEditing(true);

    setCurrentGuest({
      id: guest.id,
      name: guest.name,
      street: guest.street,
      city: guest.city,
      state: guest.state,
      zip: guest.zip,
      phone: guest.phone
    });
  };

  const updateGuest = (id, updatedGuest) => {
    setEditing(false);

    //write them all, except for the one you just changed
    setGuests(guests.map(guest => (guest.id === id ? updatedGuest : guest)));
  };

  return (
    <div className="container">
      <h1>Please Sign My Guestbook</h1>

      <div className="row">
        <div className="col">
          {editing ? (
            <div>
              <h2>Edit Guest</h2>
              <EditGuestForm
                editing={editing}
                setEditing={setEditing}
                currentGuest={currentGuest}
                updateGuest={updateGuest}
              />
            </div>
          ) : (
            <div>
              <h2>Sign In</h2>
              <AddGuestForm addGuest={addGuest} />
            </div>
          )}
        </div>
        <div className="col">
          <h2>Guests</h2>
          <GuestList
            deleteGuest={deleteGuest}
            editGuest={editGuest}
            guests={guests}
          />
        </div>
      </div>
    </div>
  );
};
