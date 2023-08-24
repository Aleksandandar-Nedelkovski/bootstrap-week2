export default function Pricing() {
  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $50
                <small className="text-body-secondary fw-light">/hour</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>lorem</li>
                <li>ipsum</li>
                <li>lorem</li>
                <li>ipsum</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Register Today
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $70
                <small className="text-body-secondary fw-light">
                  /1.5 hours
                </small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>lorem</li>
                <li>ipsum</li>
                <li>lorem</li>
                <li>ipsum</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Register Today
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $90
                <small className="text-body-secondary fw-light">/2 hours</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>lorem</li>
                <li>ipsum</li>
                <li>lorem</li>
                <li>ipsum</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Register Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
