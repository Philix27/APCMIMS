import React from "react";
import { motion } from "framer-motion";

export default function Form3({
  agent,
  stepIndex,
  agentParams,
  handlePrev,
  handleNext,
  handleChange,
}) {
  const styleHide = "hide";
  const styleShow = "show";
  return (
    <motion.div
      className={`sect step2 ${stepIndex === 2 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.7, delay: 1, type: "tween" }}
    >
      <form onSubmit={handleNext} className="form">
        <h2>
          Step 3<span> INEC Voter Reg.</span>
        </h2>
        <div className="input_box">
          <label htmlFor="form-reg-id" className="label">
            ID
          </label>
          <input
            type="text"
            id="form-reg-id"
            placeholder="Enter Voters Reg"
            name="polling_unit"
            required
            minLength={3}
            onChange={handleChange}
          />
        </div>
        <div className="input_box">
          <label htmlFor="occupation" className="label">
            Date Time
          </label>
          <input
            // type="text"
            type="date"
            id="datetime"
            placeholder="Date"
            name="datetime"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input_box">
          <label htmlFor="occupation" className="label">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            placeholder="Occupation"
            name="occupation"
            required
            minLength={3}
            onChange={handleChange}
          />
        </div>
        <div className="input_box">
          <label htmlFor="form-election-type">Marital Status</label>
          <select
            name="agentType"
            value={agent.agentType}
            id="form-election-type"
            required
            onChange={handleChange}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
        <div className="btnContainer">
          <div className=" buttons">
            <input
              type="submit"
              value="Go Back"
              onClick={handlePrev}
              className="btn"
            />
          </div>
          <div className="buttons">
            <input
              type="submit"
              value="Next"
              // onClick={handleNext}
              className="btn"
            />
          </div>
        </div>
      </form>
    </motion.div>
  );
}
