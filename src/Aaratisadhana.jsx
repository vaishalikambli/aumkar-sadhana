import React from "react";

import '../node_modules/bootstrap-table/dist/bootstrap-table';
import "./modules/_aaratisadhana.scss";

function AaratiSadhana() {
  return (
    <main className="vibhuti_sec">
      <div className="container sufis_group">
        <div className="container-lg">
          <table
            data-toggle="table"
            data-search="true" 
            data-pagination="true" 
            data-page-list="[10, 25, 50, 100, all]"
          >
            <thead>
              <tr className="tr-class-1">
                <th data-field="name" rowSpan="2" data-valign="middle">
                  Aarati Name
                </th>
                <th colSpan="2">Detail</th>
              </tr>
              <tr className="">
                <th>Singer</th>
                <th>Play/Pause</th>
              </tr>
            </thead>
            <tbody>
              <tr
                id="tr-id-1"
                className="tr-class-1"
                data-title="bootstrap table"
                data-object='{"key": "value"}'
              >
                <td id="td-id-1" className="td-class-1" data-title="">
                  Aarati Saibaba
                </td>
                <td data-value="526">8827</td>
                <td data-value="526">8827</td>
              </tr>
              <tr
                id="tr-id-1"
                className="tr-class-1"
                data-title="bootstrap table"
                data-object='{"key": "value"}'
              >
                <td id="td-id-1" className="td-class-1" data-title="">
                  Aarati Saibaba
                </td>
                <td data-value="526">8827</td>
                <td data-value="526">8827</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default AaratiSadhana;
