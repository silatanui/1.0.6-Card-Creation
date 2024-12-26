import React from 'react';
import './Card.css'

// Create data for the card in a json format
const cardData = [
    {
        title: 'John Doe',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_1.jpg',
        content: 'A software engineer with a passion for solving complex problems and creating efficient solutions.'
    },
    {
        title: 'Jane Smith',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_0.jpg',
        content: 'A graphic designer known for her creative approach and attention to detail in visual storytelling.'
    },
    {
        title: 'Michael Brown',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_3.jpg',
        content: 'A seasoned marketing strategist specializing in digital campaigns and brand growth.'
    },
    {
        title: 'Emily Davis',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_2.jpg',
        content: 'An experienced project manager who excels at team leadership and delivering results on time.'
    },
    {
        title: 'Chris Wilson',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_0.jpg',
        content: 'A data analyst with a knack for uncovering insights and making data-driven decisions.'
    },
    {
        title: 'Sophia Martinez',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_1.jpg',
        content: 'A talented software developer with expertise in front-end and back-end technologies.'
    },
    {
        title: 'David Lee',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_1.jpg',
        content: 'A UI/UX designer focused on creating user-friendly and engaging digital experiences.'
    },
    {
        title: 'Olivia Taylor',
        image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_1.jpg',
        content: 'A skilled content writer passionate about crafting compelling stories and marketing copy.'
    }
];



function Card(){
    return (
        // Loop through the data in CardData and display them in cards
        <section className='card-section'>
            {
                cardData.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.image} alt={card.title} />
                        <h2>{card.title}</h2>
                        <p>{card.content}</p>
                        {/* Add a button or link to view more details */}
                        <button>Read More</button>
                    </div>
                ))
            }
        </section>
       
    );
}

export default Card;