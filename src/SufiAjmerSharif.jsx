import React from "react";
import "./modules/_sufiscontribution.scss";

function SufiAjmerSharif() {
  return (
    <main className="vibhuti_sec">
      <div className="container sufis_group">
        <div className="row">
          <div className="col-12">
            <img
              src={require("../src/img/Ajmer_Sharif_Baba.png")}
              alt="Ajmer Sharif Baba"
              title="Ajmer Sharif Baba"
              className="rounded img-fluid mr-5 mb-5 float-left"
            />
            <article>
              <h4 className="mb-3">Ajmer Sharif Baba</h4>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SufiAjmerSharif;
