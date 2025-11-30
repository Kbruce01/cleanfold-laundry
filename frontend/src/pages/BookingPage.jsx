export default function BookingPage() {
  return (
    <div>
      <h1>Book Your Service</h1>
      <form>
        <label>Your Name:</label>
        <input type="text" />
        
        <label>Phone Number:</label>
        <input type="text" />
        
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}