export default function Carousel() {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src=""
          alt=""
          width="72"
          height="57"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
      {/* <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active ratio ratio-16x9">
            <img
              src="https://media.istockphoto.com/id/466336640/photo/basketball-arena.jpg?s=612x612&w=0&k=20&c=danGq0S3VD4-Eh2RY39YsMFTpn2saw_7YRgpS157Q1M="
              className="d-block w-100"
              width={900}
              height={500}
              alt="..."
            />
          </div>
          <div className="carousel-item ratio ratio-16x9">
            <img
              src="https://media.istockphoto.com/id/666119034/photo/pickleball-mixed-doubles-action.jpg?s=612x612&w=0&k=20&c=41m69ksuQERshQXCQzcuHGBDVzNfScNlWq7In1aQNsk="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item ratio ratio-16x9">
            <img
              src="https://media.istockphoto.com/id/182907822/photo/volleyball-in-an-empty-gym.jpg?s=612x612&w=0&k=20&c=_tgdljdnMGKiWP8vz-w1mlcobCSu8aT8Br4sPNZ6TC8="
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
}
