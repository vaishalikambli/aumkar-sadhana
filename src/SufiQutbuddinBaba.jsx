import React from "react";
import "./modules/_sufiscontribution.scss";

function SufiQutbuddinBaba() {
  return (
    <main className="vibhuti_sec">
      <div className="container sufis_group">
        <div className="row">
          <div className="col-12">
            <img
              src={require("../src/img/Qutbuddin_Baba.png")}
              alt="Qutbuddin Baba"
              title="Qutbuddin Baba"
              className="rounded img-fluid mr-5 mb-5 float-left"
            />
            <article>
              <h4 className="mb-3">Qutbuddin Baba</h4>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SufiQutbuddinBaba;
