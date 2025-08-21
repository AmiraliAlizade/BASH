import "./CreateHouseForm.css";

function CreateHouseForm() {
  return (
    <div
      className="form-wrapper
    "
    >
      <form className="create-house-form">
        <div className="house-form-item">
          <label className="house-form-label"> Title </label>
          <input type="text" className="house-form-input" />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Size</label>
          <input type="text" className="house-form-input" />
        </div>

        <div className="house-form-item">
          <label className="house-form-label">Price</label>
          <input type="text" className="house-form-input" />
        </div>

        <div className="house-form-item">
          <label className="house-form-label">Made in</label>
          <input type="text" className="house-form-input" />
        </div>

        <div className="house-form-item">
          <label className="house-form-label">Address</label>
          <input type="text" className="house-form-input" />
        </div>

        <div className="house-form-item">
          <label className="house-form-label">Description</label>
          <input type="text" className="house-form-input" />
        </div>

        <div className="house-form-item">
          <label className="house-form-label">Number of bathrooms</label>
          <input type="text" className="house-form-input" />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Number of bedrooms</label>
          <input type="text" className="house-form-input" />
        </div>
      </form>
    </div>
  );
}

export default CreateHouseForm;
