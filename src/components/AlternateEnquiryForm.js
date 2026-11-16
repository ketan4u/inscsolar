<section className="enquiry-form">
      <h2>Solar Enquiry</h2>
      <form>
        <div className="form-grid">
        <input type="text" name="fullName" placeholder="Name" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <input type="city" name="city" placeholder="City" required />
        <input type="pincode" name="pincode" placeholder="PIN Code"  />
        <input type="email" name="email" placeholder="Email Address"  />

        <select name="monthlybill" required>
          <option value="less1500" selected>
            Less than ₹1500
          </option>
          <option value="1500to2500" selected>
            ₹1500 - ₹2500
          </option>
          <option value="2500to400-" selected>
            ₹2500 - ₹4000
          </option>
          <option value="4000to8000" selected>
            ₹4000 - ₹8000
          </option>
          <option value="more8000" selected>
            More than ₹8000
          </option>
          <option value="none"  selected>
            Select Average Monthly Bill
          </option>
        </select>

        <select name="type" required>
          
          <option value="home"  selected>
            Home
          </option>
          <option value="commercial"  selected>
            Commercial
          </option>
          <option value="factory"  selected>
            Factory
          </option>
          <option value="none"  selected>
            Select Property Type
          </option>
        </select>
          
        </div>
        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </section>