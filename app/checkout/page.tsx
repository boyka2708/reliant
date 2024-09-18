import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-blue-500 text-center text-4xl underline">Checkout</h1>
      <h1 className="text-blue-500 text-3xl mt-5">Billing Details</h1>
      <hr/>
      <button className="mt-4">Use Saved Details From Last Checkout?</button>
      <form className="space-y-8 mx-3 my-7">
        <div className="flex sm:flex-row sm:justify-between">
          <label>First Name *</label>
          <input type="text" className="border rounded-sm" />

          <label>Last Name *</label>
          <input type="text" className="border rounded-sm" />
        </div>

        <div className="flex flex-col">
          <label>Company Name (Optional)</label>
          <input type="text" className="border rounded-sm" />
        </div>

        <div>
          <label>Street Address *</label>
          <input type="text" className="border rounded-sm" />
        </div>

        <div>
          <label>Town/City *</label>
          <input type="text" className="border rounded-sm" />
        </div>

        <div>
          <label>State *</label>
          <select className="border rounded-sm" name="state" id="state">
            <option value="" disabled selected>
              Choose State
            </option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CT">Chhattisgarh</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TS">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="CH">Chandigarh</option>
            <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="LD">Lakshadweep</option>
            <option value="PY">Puducherry</option>
          </select>
        </div>

        <div>
          <label>PIN Code *</label>
          <input className="border rounded-sm" type="tel"/>
        </div>

        <div>
          <label>Phone *</label>
          <input className="border rounded-sm" type="tel"/>
        </div>

        <div>
          <label>Email Address *</label>
          <input className="border rounded-sm" type="email"/>
        </div>

        <div>
          <label>Order Instructions (Optional)</label>
          <input type="text" className="border h-10"/>
        </div>
      </form>
    </div>
  );
}

export default page;
