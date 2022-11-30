import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import stage1Report from '../pdfs/Stage1.pdf';
import stage2Report from '../pdfs/Stage2.pdf'
import stage3Report from '../pdfs/Stage3.pdf'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/ipmG17">Home</Link>
        </li>
        <li>
            <Link target={stage1Report}> Stage 1 Report</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;