import React from "react";
import { motion } from "framer-motion";

export default function Form4({
  agent,
  stepIndex,
  handleChange,
  handlePrev,
  handleNext,
}) {
  const styleHide = "hide";
  const styleShow = "show";
  return (
    <motion.div
      className={`sect step2 ${stepIndex === 3 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.7, delay: 1, type: "tween" }}
    >
      <form onSubmit={handleNext} className="form">
        <h2>Step 4</h2>
        <div className="input_box">
          <label htmlFor="form-image">Profile Image</label>
          <input
            type="file"
            id="form-image"
            name="image"
            value={agent.image}
            onChange={handleChange}
            accept="image/*"
          />
        </div>
      </form>
      <div className="btnContainer">
        <div className=" buttons">
          <input
            type="button"
            value="Go Back"
            onClick={handlePrev}
            className="btn"
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            value="Next"
            onClick={handleNext}
            className="btn"
          />
        </div>
      </div>
    </motion.div>
  );
}
