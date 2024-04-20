import { useState } from 'react';
import { data } from "./data/data";
import Feature from './components/Feature';

function Page() {
  const [selectedUser, setSelectedUser] = useState(data.user1);

  const handleButtonClick = (userData) => {
    setSelectedUser(userData);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-red-500">
      <Feature
        p={selectedUser.p}
        h1={selectedUser.h1}
        details={selectedUser.details}
        student={selectedUser.student}
        company={selectedUser.company}
        img={selectedUser.img}
      />
      <div className='flex items-center gap-5 flex-wrap'>
        {Object.values(data).map((user, index) => (
          <button key={index} onClick={() => handleButtonClick(user)}>
            <img
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src={user.img}
              alt={user.company}
            />
          </button>
        ))}
      </div>
      <a href="https://docs.google.com/document/d/1bvvpGAFqsa0TpSKprdQH36OlVbLYgBiFrrbqhHU9NPg/edit">
        <button className="bg-red-500 text-white py-2 px-4 rounded-md font-semibold text-center mt-5">View More</button>
      </a>
    </div>
  );
}

export default Page;
