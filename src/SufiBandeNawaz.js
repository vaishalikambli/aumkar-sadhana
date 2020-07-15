import React from "react";
import "./modules/_sufiscontribution.scss";

function SufiBandeNawaz() {
  return (
    <main className="vibhuti_sec">
      <div className="container sufis_group">
        <div className="row">
          <div className="col-12">
            <img
              src={require("../src/img/Khwaja_Bande_Nawaz.png")}
              alt="Khwaja Bande Nawaz"
              title="Khwaja Bande Nawaz"
              className="rounded img-fluid mr-5 mb-5 float-left"
            />
            <article>
              <h4 className="mb-3">Khwaja Bande Nawaz Baba</h4>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SufiBandeNawaz;
