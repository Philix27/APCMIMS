import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { data } from "../../constants/all";
import { agentParams } from "../../constants/agentparams";
import { storage } from "../../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Form1 from "../../comps/member/step1";
import Form2 from "../../comps/member/step2";
import Form3 from "../../comps/member/step3";
import Form4 from "../../comps/member/step4";
import Form5 from "../../comps/member/step5";
import Form6 from "../../comps/member/step6";
import { AlertSuccessful } from "../../comps/member/alert";
import { Circles } from "react-loader-spinner";
import { resolve } from "path";
import { rejects } from "assert";

export default function AddAgentsPage({ title }) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    statecode: "",
    img: "",
    userType: "",
  });

  const [previewImage, setPreviewimage] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [agentTypeList, setAgentTypeList] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [localGov, setLocalGov] = useState([]);
  const [wards, setWards] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  //! Show TextForm
  const [showSenatorialDistrict, setShowSenatorialDistrict] = useState(false);
  const [showFedConst, setFedCosnt] = useState(false);
  const [showStateConst, setStateConst] = useState(false);
  const [senatorial_district, setSenatorial_district] = useState([]);

  //! Next Buttons
  const [showNext1, setShowNext1] = useState(false);
  const [showNext2, setShowNext2] = useState(false);
  //! Agent
  const [agent, setAgent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alternatePhone: 0,
    address: "",
    state: "",
    lga: "",
    ward: "",
    nin: "",
    votersRegNo: "",
    occupation: "",
    dateOfBirth: "",
    maritalStatus: "",
    image: "",
    status: "NEW",
    isApproved: false,
    registrationDate: new Date(),
  });

  function postAgent(agent) {
    Axios.post("https://rxedu-api.vercel.app/api/v1/member", agent)
      .then((response) => {
        // setIsSuccessful(true);
        console.log("Successfully Sent to: ");
        // alert("Successfully Added");

        setTimeout(() => {
          setIsSuccessful(false);
          router.push("/thanks");
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
        console.log("Opps an error ocured");
        router.reload(window.location.pathname);
      });
  }

  const handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name == "state") {
      setWards([]);
      setLocalGov([]);
      agent.lga = "";
      agent.ward = "";
      const selectedState = data.states.filter((_val) => _val.state == value);

      setLocalGov(selectedState[0].lga);
    } else if (name == "lga") {
      const selectedLocalGov = localGov.filter((_val) => _val.name == value);
      setWards(selectedLocalGov[0].wards);
    } else if (name == "image") {
      const _file = e.target.files[0];
      if (_file) {
        if (_file.size < 1000000) {
          setProfileImage(_file);
          handleConversion(_file);
          console.log("Hurray! we have a file");
          // console.log(_file);
        } else {
          // value = null;
          // setProfileImage(null);
          alert("Image is above 1MB");
        }
      } else {
        console.log("no file yet");
      }
    }

    setAgent({ ...agent, [name]: value });
    console.log(agent);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (stepIndex <= 4) {
      setStepIndex(stepIndex + 1);
    }
  };

  async function uploadImageToFb() {
    console.log("Inside Upload");
    if (profileImage == null) {
      alert("Select an image");
      return;
    } else {
      console.log("Started Upload");
      const imageRef = ref(storage, `apcaims/${profileImage.name + v4()}`);
      uploadBytes(imageRef, profileImage).then((res) => {
        getDownloadURL(res.ref).then((url) => {
          console.log(`Valid Url: ${url}`);
          agent.image = url;
          postAgent(agent);
        });
      });
    }
  }

  const handleSubmit = async (e) => {
    if (
      agent.firstName &&
      agent.lastName &&
      agent.email &&
      agent.address &&
      agent.phone &&
      agent.state &&
      agent.lga &&
      agent.ward &&
      agent.votersRegNo &&
      agent.occupation &&
      agent.dateOfBirth &&
      agent.nin &&
      agent.maritalStatus
    ) {
      e.preventDefault();
      agent.maritalStatus.toUpperCase();
      console.log("Before Upload");
      setStepIndex(5);
      uploadImageToFb();
    } else {
      console.log("Something is missing");
    }
  };
  const handleConversion = useCallback(async (_file) => {
    const base64 = await convertToBase64(_file);
    setPreviewimage(base64);
    console.log(base64);
  });
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("Please select an image");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <div className="addAgent">
      <div className="section formsPage">
        <Form1
          agent={agent}
          stepIndex={stepIndex}
          handleChange={handleChange}
          data={data}
          localGov={localGov}
          handleNext={handleNext}
          wards={wards}
          showNext1={showNext1}
        />
        <Form2
          agent={agent}
          stepIndex={stepIndex}
          handleChange={handleChange}
          data={data}
          localGov={localGov}
          userState={user.statecode}
          wards={wards}
          handlePrev={handlePrev}
          handleNext={handleNext}
          showNext2={showNext2}
        />
        <Form3
          agent={agent}
          stepIndex={stepIndex}
          agentParams={agentParams}
          showSenatorialDistrict={showSenatorialDistrict}
          handleChange={handleChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          senatorial_district={senatorial_district}
          showFedConst={showFedConst}
          showStateConst={showStateConst}
          agentTypeList={agentTypeList}
        />
        <Form4
          agent={agent}
          stepIndex={stepIndex}
          handleSubmit={handleSubmit}
          agentParams={agentParams}
          handleChange={handleChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
        <Form5
          agent={agent}
          stepIndex={stepIndex}
          handleSubmit={handleSubmit}
          agentParams={agentParams}
          handleChange={handleChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          profileImage={previewImage}
          setPreviewimage={setPreviewimage}
        />
        <Form6
          agent={agent}
          stepIndex={stepIndex}
          handleSubmit={handleSubmit}
          agentParams={agentParams}
          handleChange={handleChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}
