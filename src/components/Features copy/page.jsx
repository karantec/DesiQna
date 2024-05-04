import React, { useEffect, useState } from "react";
import Feature from "./components/Feature";
import "./Page.css";
import "animate.css";
import { DOMAIN } from "../../env/env";
import axios from "axios";

function Page() {
  const [selectedUser, setSelectedUser] = useState({
    attributes: {
      Title: "Tier-3 College to World Rank-50",
      Content: "Student gets World Rank 50/25000 in LeetCode DSA Contest",
      Name: "Vinit Tekwani",
      Company: "https://www.linkedin.com/feed/update/urn:li:activity:7164647759717752832/",
      imageLink: "https://res.cloudinary.com/dlxds69s7/image/upload/v1714793777/1673364727709_c44162d307.jpg"
    }
  });
  const [activeIndex, setActiveIndex] = useState(null);
  const [animate, setAnimate] = useState(null);
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(`${DOMAIN}api/content-performing-students`);
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
          student={selectedUser.attributes.Name}
          company={selectedUser.attributes.Company}
          img={selectedUser.attributes.imageLink}
        />
      </div>
      <div className="flex items-center mb-3 gap-5 justify-center flex-wrap">
        {userData.map((user, index) => (
          <button
          aria-label="users"
            key={index}
            onClick={() => handleImageClick(user, index)}
            className="image-button"
          >
            <img
              className={`relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white hover:border-4 transition-all duration-500`}
              src={user.attributes.imageLink}
              alt=""
            />
          </button>
        ))}
      </div>
      <a
      aria-label="links"
        href="https://docs.google.com/document/d/1O9ph3IoyLv_B6scRQSaMyemShoOgAtnWBGpiw-FZtTs/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="inline-flex flex-col items-center justify-center">
          <button role="button" aria-label="more" className=" mt-4 text-red hover:before:bg-red border-2  rounded-lg border-orange-500  relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-2xl">View More</span>
          </button>
        </div>
      </a>
    </div>
  );
}

export default Page;
