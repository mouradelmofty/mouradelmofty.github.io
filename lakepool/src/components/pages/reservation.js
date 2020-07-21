import React, {Component} from 'react';

const handleSubmit = e => {
    e.preventDefault();
    alert("Your party has been booked!");
  };

class Reservation extends Component {
  render() {
    return (
      <div className="container-fluid">

      <h3>Book your party now!</h3>
      <br/><br/><br/><br/><br/>
      <form2>
      Number of guests:&nbsp;
      <select name="numGuests">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      &nbsp;&nbsp;

      Date:&nbsp;
      <input type="text" name="date" placeholder="MM/DD/YYYY" />
      <br /><br />

      Type of seats:&nbsp;
      <select name="tableType">
        <option value="sunBeds">Sun Beds</option>
        <option value="roundTable">Round Table</option>
        <option value="diningTable">Dining Table</option>
        <option value="loungeCouch">Lounge Sofas</option>
      </select>
      <br /><br />

      Name:&nbsp;
      <input type="text" name="name" />

      &nbsp;&nbsp;

      Email:&nbsp;
      <input type="text" name="email" placeholder="johndoe@placeholder.ca" />
      <br /><br />

      Arrival Time:&nbsp;
      <input type="text" name="arrival" placeholder="00:00" />

      &nbsp;&nbsp;

      Departure Time:&nbsp;
      <input type="text" name="arrival" placeholder="00:00" />
      <br /><br />
      </form2>

      <br /><br /><br /><br /><br /><br /><br /><br />

      <h3>Payment Information*</h3>
      <form3>

      Card Number:&nbsp;
        <input type="text" name="cardNum" placeholder="XXXX XXXX XXXX XXXX" />

      &nbsp;&nbsp;

      Expiration Date:&nbsp;
        <input type="text" name="expDate" placeholder="MM/YY" />

      &nbsp;&nbsp;

      CVV:&nbsp;
        <input type="text" name="CVV" placeholder="XXX" />
      <br />
      <p5>*Please note that not arriving to a reservation without cancellation will be subject to a $10 fee per guest.</p5>

      <br /><br /><br />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      </form3>

      </div>
    );
  }
}

export default Reservation;
