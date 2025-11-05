import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <div className="App">
      <h1>Form Example</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          required
        />

        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Jane Doe"
          required
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="123 Example Street"
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          placeholder="Toronto"
        />

        <label htmlFor="province">Province</label>
        <input
          id="province"
          name="province"
          type="text"
          value={formData.province}
          onChange={handleChange}
          placeholder="Ontario"
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="A1A 1A1"
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <section className="summary">
          <h2>Submitted Information</h2>
          <dl>
            <dt>Email:</dt>
            <dd>{submittedData.email}</dd>

            <dt>Full Name:</dt>
            <dd>{submittedData.fullName}</dd>

            <dt>Address:</dt>
            <dd>{submittedData.address}</dd>

            <dt>City:</dt>
            <dd>{submittedData.city}</dd>

            <dt>Province:</dt>
            <dd>{submittedData.province}</dd>

            <dt>Postal Code:</dt>
            <dd>{submittedData.postalCode}</dd>
          </dl>
        </section>
      )}
    </div>
  );
}

export default App;