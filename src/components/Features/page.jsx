import React, { useEffect, useState } from "react";
import Feature from "./components/Feature";
import { Link } from "react-router-dom";
import "./Page.css";
import "animate.css";
import { DOMAIN } from "../../env/env";
import axios from "axios";

function Page() {
  const [selectedUser, setSelectedUser] = useState({
    attributes: {
      Title: "Tier-4 College to 40+ LPA",
      Content: "Pranav cracks off campus SDE Intern + Fulltime offer from Linkedin(40 LPA CTC) after 8 months of FAANG level DSA(OA + Interview) Training with us!",
      Student: "Pranav Kulkarni",
      Company: "Linkedin",
      imageLink: "https://res.cloudinary.com/dlxds69s7/image/upload/v1714758483/1712824265014_87edb8a769.jpg"
    }
  });
  const [activeIndex, setActiveIndex] = useState(null);
  const [animate, setAnimate] = useState(null);
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(`${DOMAIN}api/top-performing-students`);
      const { data } = response;
      setUserData(data.data);
    } catch (error) {
      setUserData([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = (user, index) => {
    setSelectedUser(user);
    setActiveIndex(index);
    setAnimate("animate__animated animate__slideInRight");
    setTimeout(() => {
      setAnimate(null);
    }, 1000);
  };

  return (
    <div id="topachiver" className="flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 pb-10">
      <div className={`${animate}`}>
        <Feature
          p={selectedUser.attributes.Title}
          h1={selectedUser.attributes.Content}
          student={selectedUser.attributes.Student}
          company={selectedUser.attributes.Company}
          img={selectedUser.attributes.imageLink}
        />
      </div>
      <div className="flex items-center mb-3 gap-5 justify-center flex-wrap">
        {userData.map((user, index) => (
          <button
          aria-label="users"
          role="button"
            key={index}
            onClick={() => handleImageClick(user, index)}
            className="image-button"
          >
            <img
              className={`relative z-10 inline-block h-10 w-10 rounded-full `}
              src={user.attributes.imageLink}
              alt=""
            />
          </button>
        ))}
      </div>
      <a
      aria-label="docs"
        href="https://docs.google.com/document/d/1O9ph3IoyLv_B6scRQSaMyemShoOgAtnWBGpiw-FZtTs/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="inline-flex flex-col items-center justify-center">
          <button role="button" className=" mt-4 text-red hover:before:bg-red border-2  rounded-lg border-orange-500  relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
            <Link to="/achiver">
            <span className="relative z-10 text-2xl">View More</span>
            </Link>
          </button>
        </div>
      </a>
    </div>
  );
}

export default Page;
