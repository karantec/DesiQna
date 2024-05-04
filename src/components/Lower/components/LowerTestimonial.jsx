import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import {DOMAIN} from "../../../env/env";

const Testimonials = () => {

    const [userData,setUserData]  = useState([]);
    async function fetchUserData(){
        try {
            const response  =  await axios.get(`${DOMAIN}api/testimonials`);
            const {data} =  await response;
            setUserData(data.data)

        } catch (error) {
            setUserData([])
        }
    }


    useEffect(()=>{
        fetchUserData()
    },[])
    return (
        <div className="min-h-screen bg-gradient-to-r to-red-50 from-yellow-100 flex flex-col items-center justify-center py-5">
            <div className="w-full max-w-6xl mx-auto px-5 py-16 md:py-24 text-gray-800">
                <div className="text-center max-w-xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5 text-black font-sans">What Students <br />Are Saying</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* TestimonialCards */}
                    {userData.map((testimonial, index) => (
                        <TestimonialCard key={index} name={testimonial.attributes.Name} profile={testimonial.attributes.Link} content={testimonial.attributes.Content}  />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        to="https://docs.google.com/document/d/1nFt_jEgy1X-UaKU2bu3OnC365ADCL-ls_cpXUMJrvx0/edit" 
                        target="_blank" rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded inline-block"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

import { FaLinkedin } from 'react-icons/fa';

const TestimonialCard = ({ name, content,profile }) => {
    return (
        <div className="flex flex-col bg-white justify-between rounded-lg border border-gray-200 p-5 text-gray-800 font-light">
            <div className="flex  justify-center items-center ">
                <span className="font-bold text-sm uppercase text-black text-center mb-1 ">{name}</span>
                <a aria-label="profile" href={profile} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FaLinkedin className="text-blue-500 mr-1 text-center ml-3" />
                </a>
            </div>
            <p className="text-md leading-tight h-48 text-center">
                <span className="text-2xl font-sans font-bold text-black mr-1">"</span>
                {content}
                <span className="text-2xl font-sans font-bold text-black-500 ml-1">"</span>
            </p>
        </div>
    );
};




export default Testimonials;
