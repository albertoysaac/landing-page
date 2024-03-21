import React from "react";

function Jumbotron() {
  return (
    <div className="card j-card">
      <div className="card-body d-flex flex-column justify-content-between j-content">
        <h5 className="card-title j-title">A Warm Welcome!</h5>
        <p className="card-text j-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolor repellendus explicabo ipsum, nostrum ut similique, magni esse
          eius unde quo, nemo quaerat tempore quasi numquam vitae tempora optio
          dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          suscipit accusamus eum repudiandae labore vitae numquam deserunt ipsa
          minus, dolorem saepe repellendus qui veniam sapiente, esse quibusdam,
          facere architecto officiis?
        </p>
        <div className="btn-container">
          <a href="#" className="btn btn-primary j-button">
            Call to action
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
