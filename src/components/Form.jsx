import "./Form.css";

function Form() {
  return (
    <form action="">
      <div class="input-group">
        <input type="number" placeholder="4" min="1" max="20" />
        <span class="input-label">person</span>
      </div>
      <input type="date" placeholder="12.25, 2020" />
      <input type="time" placeholder="11:00 AM" />
      <button type="submit" class="form-btn">
        BOOK A TABLE
      </button>
    </form>
  );
}

export default Form;
