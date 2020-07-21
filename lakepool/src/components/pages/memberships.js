import React, {Component} from 'react';

const handleSubmit = e => {
    e.preventDefault();
    alert("Membership created!");
  };

class Memberships extends Component {
  render() {
    return (
      <div className="container-fluid">
      <br /><br />
        <h5>Create a membership</h5>
        <form4>

          <label>
            Email:
              <input type="text" name="email" placeholder="johndoe@provider.ca" />
          </label>
          &nbsp;
          <label>
          Password:
            <input type="password" name="password" />
          </label>
          &nbsp;<br />
          <label>
          First Name:
            <input type="fName" name="fName" />
          </label>
          &nbsp;
          <label>
          Last Name:
            <input type="lName" name="lName" />
          </label>
          &nbsp; <br />
          <label>
          Membership Type:&nbsp;
            <select name="membType">
              <option value="oneMonth">One Month - $59.99</option>
              <option value="threeMonths">Three Months - $150</option>
              <option value="oneYear">One Year - $600</option>
            </select>
          </label>
          <br /><br />
          <p6>Memberships grant the guest unlimited entry to the premises, use of the pool, clean towels, and access to the changing rooms for the duration selected only.</p6>

          <br /><br /><br /><br />
          <h3>Payment Information</h3>

          Card Number:&nbsp;
            <input type="text" name="cardNum" placeholder="XXXX XXXX XXXX XXXX" />

          &nbsp;&nbsp;

          Expiration Date:&nbsp;
            <input type="text" name="expDate" placeholder="MM/YY" />

          &nbsp;&nbsp;

          CVV:&nbsp;
            <input type="text" name="CVV" placeholder="XXX" />
          <br /><br /><br />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form4>



      </div>
    );
  }
}

export default Memberships;
