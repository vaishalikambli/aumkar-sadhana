import React from "react";
import "./modules/_sufiscontribution.scss";

function SufiSalimChishti() {
  return (
    <main className="vibhuti_sec">
      <div className="container sufis_group">
        <div className="row">
          <div className="col-12">
            <img
              src={require("../src/img/Salim_Chishti.png")}
              alt="Salim Chishti Baba"
              title="Salim Chishti Baba"
              className="rounded img-fluid mr-5 mb-5 float-left"
            />
            <article>
              <h4 className="mb-3">Salim Chishti Baba</h4>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SufiSalimChishti;
