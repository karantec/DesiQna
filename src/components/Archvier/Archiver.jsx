import React, { useState } from 'react';

const CardComponent = () => {
  // Sample data (replace this with your actual data)
  const data = [
    { imageSrc: 'https://dummyimage.com/720x400', subtitle: 'SUBTITLE 1', title: 'Card Title 1', content: 'Card content 1' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },

    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },

    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/720x400', subtitle: 'SUBTITLE 1', title: 'Card Title 1', content: 'Card content 1' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/720x400', subtitle: 'SUBTITLE 1', title: 'Card Title 1', content: 'Card content 1' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/720x400', subtitle: 'SUBTITLE 1', title: 'Card Title 1', content: 'Card content 1' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },
    { imageSrc: 'https://dummyimage.com/721x401', subtitle: 'SUBTITLE 2', title: 'Card Title 2', content: 'Card content 2' },


    // Add more data objects as needed
  ];

  const [cardsToShow, setCardsToShow] = useState(30);
  const [cards, setCards] = useState(data);

  const handleViewMore = () => {
    setCardsToShow(cards.length); // Show all cards
  };

  return (
    <section className="text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Top Selections</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.slice(0, cardsToShow).map((card, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={card.imageSrc} alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{card.subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{card.title}</h2>
                <p className="leading-relaxed text-base">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
        {cardsToShow < cards.length && (
        <div className='flex flex-col items-center justify-center'>

          <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleViewMore}>
            View More
          </button>
        </div>
        )}
      </div>
    </section>
  );
};

export default CardComponent;