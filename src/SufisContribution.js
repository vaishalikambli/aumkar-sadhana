import React from "react";

import "./modules/_sufiscontribution.scss";
import SufiPlaceholder from "./SufiPlaceholder";

function SufisContribution() {
  return (
    <main className="vibhuti_sec">
      <div className="container sufis_group">
        <div className="row">
          <SufiPlaceholder
            pageLink="/sufihajimalangbaba"
            sufiTitle="Shri Haji Malangbaba"
            sufiLocation="Kalyan, India"
            imgPath={require("../src/img/Shri_Haji_Malang_baba.jpeg")}
          ></SufiPlaceholder>
          <SufiPlaceholder
            pageLink="/sufimohammadjilanibaba"
            sufiTitle="Mohammad Jilanibaba"
            sufiLocation="Baghdad, Iraq"
            imgPath={require("../src/img/Mohammad_Jilani_Baba.png")}
          ></SufiPlaceholder>
          <SufiPlaceholder
            pageLink="/sufiajmersharif"
            sufiTitle="Ajmer Sharif Baba"
            sufiLocation="Ajmer, India"
            imgPath={require("../src/img/Ajmer_Sharif_Baba.png")}
          ></SufiPlaceholder>
          <SufiPlaceholder
            pageLink="/sufibandenawaz"
            sufiTitle="Khwaja Bande Nawaz Baba"
            sufiLocation="Gulbarga, India"
            imgPath={require("../src/img/Khwaja_Bande_Nawaz.png")}
          ></SufiPlaceholder>
          <SufiPlaceholder
            pageLink="/sufisalimchishti"
            sufiTitle="Salim Chishti Baba"
            sufiLocation="Fatehpur Sikri, India"
            imgPath={require("../src/img/Salim_Chishti.png")}
          ></SufiPlaceholder>
          <SufiPlaceholder
            pageLink="/sufiqutbuddinbaba"
            sufiTitle="Qutbuddin Baba"
            sufiLocation="Delhi, India"
            imgPath={require("../src/img/Qutbuddin_Baba.png")}
          ></SufiPlaceholder>
        </div>
      </div>
    </main>
  );
}

export default SufisContribution;
