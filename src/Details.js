import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketball,
  faVolleyball,
  faFootball
} from "@fortawesome/free-solid-svg-icons";

export default function Details() {
  return (
    <>
      <div class="row">
        <h1 className="display-4 fw-normal text-body-emphasis">
          Court Rentals
        </h1>
        <p className="fs-5 text-body-secondary">
          Lock in court time online! Easily view availability and confirm your
          rental with payment. We’ll make sure your court is reserved for you so
          you don’t have to worry about waiting your turn, kicking people off
          your court, or feeling rushed to finish.
        </p>

        {/* <p className="fs-5 text-body-secondary">
          You have control over your rental online and the Wawaweewa app –
          cancel up to 2 hours before your start time to automatically receive a
          credit for another time. Bring as many or few friends as you’d like.
          It’s your time to use the court however you’d like.
        </p>
        <p className="fs-5 text-body-secondary">
          Choose from three locations in Chicago. Use the links below for more
          information about each location and to search for rental times just
          for those courts. Or use our schedule below to search for availability
          at all our courts
        </p> */}
        <div class="col-lg-4">
          <FontAwesomeIcon icon={faVolleyball} size={"7x"} />
          <h2 class="fw-normal">Volleyball</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <a class="btn btn-secondary" href="#">
              View facilities &raquo;
            </a>
          </p>
        </div>

        <div class="col-lg-4">
          <FontAwesomeIcon icon={faBasketball} size={"7x"} />

          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          {/* </svg> */}
          <h2 class="fw-normal">Basketball</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <a class="btn btn-secondary" href="#">
              View facilities &raquo;
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <FontAwesomeIcon icon={faFootball} size={"7x"} />
          <h2 class="fw-normal">Football</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <a class="btn btn-secondary" href="#">
              View facilities &raquo;
            </a>
          </p>
        </div>
        <hr class="featurette-divider" />
      </div>
    </>
  );
}
