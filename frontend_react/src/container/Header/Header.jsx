import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";

import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app_header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🍜</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Welcome to</p>
              <h1 className="head-text">Pangs</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Chinese Food</p>
            <p className="p-text">Fast and Simple</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
