import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AgentsComp({ agentsList }) {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [agts, setAgents] = useState(agentsList.data);
  const [showModal, setShowModal] = useState(false);
  const [clickedAgent, setClickedAgent] = useState({});
  const router = useRouter();

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    // console.log(agentsList.data);
    tempList = agentsList.data.filter((agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(agts);
    setAgents(tempList);
  };

  const onDelete = (agent) => {
    Axios.delete(`https://rxedu-api.vercel.app/api/v1/member/${agent._id}`)
      .then((response) => {
        setIsSuccessful(true);
        alert("Deleted Successfully");

        // console.log("Successfully Deleted ");
        router.reload(window.location.pathname);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
        console.log("Opps an error ocured");
      });
  };

  function _showModal(agent) {
    console.log("agent");
    console.log(agent);
    setClickedAgent(agent);
    setShowModal(true);
  }
  return (
    <div className=" agentsList">
      {/* <div className="successDiv"> {isSuccessful && <AlertDeleted />}</div> */}
      {/* {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Hula Agen"
          children={<AgentModalContent agent={clickedAgent} />}
        />
      )} */}
      <div className="tableSection">
        <br />
        <br />
        <br />
        <br />
        <div className="input">
          <input
            type="search"
            placeholder="Search for an agent"
            onChange={onSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>State</th>
              <th>LGA</th>
              <th>Profile</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {agts.map((agent, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>

                <td onClick={() => _showModal(agent)}>
                  <img src={agent.image} alt={agent.name}></img>
                </td>
                <td>{agent.name}</td>
                <td>{agent.email}</td>
                <td>{agent.state}</td>
                <td>{agent.lga}</td>
                <td>
                  <Link href={`/admin/${agent._id}`}>
                    <ImProfile className="red icon" />
                  </Link>
                </td>
                <td>
                  <a onClick={() => onDelete(agent)}>
                    <AiFillDelete className="red icon" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
