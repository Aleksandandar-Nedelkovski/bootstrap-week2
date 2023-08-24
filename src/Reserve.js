import DateAndTimePicker from "./DateAndTimePicker";

export default function Reserve() {
  return (
    <>
      <div>
        <br />
        <div data-bs-theme="dark">
          <h1>Reserve Today</h1>
          <DateAndTimePicker />
        </div>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Open this select menu</option>
          <option value="1">Basketball</option>
          <option value="2">Pickleball</option>
          <option value="3">Volleyball</option>
        </select>
      </div>
      <p>
        Additional Information The court rental is a flat rate no matter how
        many people are with your group. Please make sure your group is
        respectful of games taking place on the other courts at this location.
        There may be rentals or other games immediately before or after yours on
        the court you are renting, so please respect the time frame for your
        rental. Pick up after yourselves and make sure you leave with all of
        your belongings. We are not responsible for lost items. What’s included
        in your rental Your rental guarantees your time on the court. Nets are
        included at the court. A Grab A Game and/or Chicago Sport and Social
        Club representative will ensure your court is accessible at your rental
        time and the net is set up. You may bring your own racket/paddle and
        balls. Paddles are available for rent for $10 per court (up to 4
        paddles). Balls available to borrow. Cancellations Due to Weather If we
        feel the courts are unplayable due to rain or water on the courts, we
        will cancel the reservation and your Grab A Game account will be
        credited for the rental. The will apply automatically the next time you
        book a rental at the same location for the same duration. To adjust the
        duration or location or to receive a full refund, please contact the
        Grab A Game office: 312-850-8167 M-F 9am-5pm or email
        info@grabagame.com.
      </p>
      <Reserve />
      <h5>Location-Based Filters</h5>
      <h5>Featured Courts</h5>
      <h5>Booking Options</h5>
      <h5>User Reviews and Ratings</h5>
      <h5>Court Details</h5>
      <h5>Availability Calendar</h5>
      <h5>Search Filters</h5>
    </>
  );
}
