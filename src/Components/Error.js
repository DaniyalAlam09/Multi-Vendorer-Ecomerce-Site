import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div class="container bootstrap snippets bootdey mb-5 mt-5">
        <div class="row">
          <div class="col-md-12">
            <div class="pull-right" style={{ marginTop: "10px" }}>
              <div class="d-flex align-items-center justify-content-around text-center">
                <img
                  class="img-error "
                  src="https://bootdey.com/img/Content/fdfadfadsfadoh.png"
                />
                <div>
                  <h2>404 Not Found</h2>
                  <p>Requested page not found!</p>
                  <div class="error-actions">
                    <Link to="/" class="btn btn-primary  signin btn-lg sign-in">
                      Back Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
