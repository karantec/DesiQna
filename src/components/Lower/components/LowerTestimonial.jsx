import { Link } from "react-router-dom";

const Testimonials = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r to-red-50 from-yellow-100 flex flex-col items-center justify-center py-5">
            <div className="w-full max-w-6xl mx-auto px-5 py-16 md:py-24 text-gray-800">
                <div className="text-center max-w-xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5 text-black font-sans">What Students <br />Are Saying</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* TestimonialCards */}
                    {testimonialData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        to="https://docs.google.com/document/d/1nFt_jEgy1X-UaKU2bu3OnC365ADCL-ls_cpXUMJrvx0/edit"
                        className="bg-orange-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded inline-block"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

const TestimonialCard = ({ name, content }) => {
    return (
        <div className="flex flex-col bg-white justify-between rounded-lg border border-gray-200 p-5 text-gray-800 font-light">
            <h6 className="font-bold text-sm uppercase text-black text-center ">{name}</h6>
            <p className="text-md leading-tight text-center">
                <span className="text-2xl font-sans font-bold text-black mr-1">"</span>
                {content}
                <span className="text-2xl font-sans font-bold text-black-500 ml-1">"</span>
            </p>
        </div>
    );
};
// Testimonial data
const testimonialData = [
    {
        name: "Akash Singhla",
        content: "Gave Sharechat OA. These are the questions. 3rd question was same DP question which you taught 2 days back. Because of that, I was able to pass all the test cases: Thanks a lot",
    },
    {
        name: "March Batch Student.",
        content: "Yes Sir,it gives me a new way of thinking before your lectures I am doing recursion and memonization now I can think in new way.",
    },
    {
        name: "Shashank",
        content: "Today I attended my first leetcode contest and was able to solve  3 questions .Thanks to awsm course",
    },
    {
        name: "Avjit Rana March Batch.",
        content: "No one on earth is doing that much effort for each and every student with this course price...Thanks sir for the efforts we will definitely get good results.",
    },
    {
        name: "Dec Pro Daily Batch.",
        content: "Just watched your DP sessions, and my God they are the best piece of coding content | ever laid my eyes on",
    },
    {
        name: "Nishant.",
        content: "just saw a recorded session from your hashing document bhaiya. You have used Range update trick there,, The question seems very difficult... but the way you explained was another level.. It felt like everything lies within visualization... If one could visualize a good approach then even the harder problems are pretty easy to solve.",
    },
    {
        name: "March Begineer",
        content: "Thank you so much Kumar k sir, only for you sir today I am able to solve the question of hackerrank sir. Sir, your 800hr course is the best course in the world. Last time I took a course from the big institution, I did not understand much but it's really sir, your course is very very good, I have understood it very well.",
    },
    {
        name: "Nishant.",
        content: "just saw a recorded session from your hashing document bhaiya. You have used Range update trick there,, The question seems very difficult... but the way you explained was another level.. It felt like everything lies within visualization... If one could visualize a good approach then even the harder problems are pretty easy to solve.",
    },
    {
        name: "FEB 2018 Batch.",
        content: "Hlo everyone, just completed kumar k sir's one to one session it was very useful and the roadmap he gave was very helpful and he is best in terms of mentoring. I have attended many online courses but no one cares about the student like kumar k sir.",
    },
];

export default Testimonials;