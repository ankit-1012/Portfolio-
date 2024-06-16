import project1Image1 from '../assets/project1/img1.png';
import project1Image2 from '../assets/project1/img2.png';
import project1Image3 from '../assets/project1/img3.png';
import project1Image4 from '../assets/project1/img4.png';
import project1Image5 from '../assets/project1/img5.png';
import project1Image6 from '../assets/project1/img6.png';
import project1Image7 from '../assets/project1/img7.png';
import project2Image1 from '../assets/project2/img1.png';
import project2Image2 from '../assets/project2/img2.png';
import project2Image3 from '../assets/project2/img3.png';
import project2Image4 from '../assets/project2/img4.png';
import project2Image5 from '../assets/project2/img5.png';
import project2Image6 from '../assets/project2/img6.png';
import project3Image1 from '../assets/project3/img1.png';
import project3Image2 from '../assets/project3/img2.png';
import project3Image3 from '../assets/project3/img3.png';

const myProjects = [
    {
        id: 1,
        title: "Hotel Booking App",
        description: " A MERN stack application that allows users to book and list homestays under various categories, Implemented JWT authentication for secure login functionality.Incorporated features such as wishlist management and tracking of previous bookings",
        images:[
            project1Image1,
            project1Image2,
            project1Image3,
            project1Image4,
            project1Image5,
            project1Image6,
            project1Image7,

        ],
    },
    {
        id: 2,
        title : "Sprint Analysis using CNN",
        description :"A real-time sprint analysis application for sprinters using the CNN Movenet lightning Model, trained on a multivariate regression model on data of 30 Olympians (sprinters) to predict optimal values for critical parameters such as stride length, arm angle, hip-knee angle, etc & Implemented a feedback system",
        images:[
            project2Image6,
            project2Image1,
            project2Image2,
            project2Image3,
            project2Image4,
            project2Image5,
        ],
    },
    {
        id: 3,
        title : "We-Chat",
        description :"A android chatting application similar to whatsapp which allows users to send text, images and PDFs. Implemented functionality such as login, logout, last seen, phone number based authentication. Added extra feature of friend request based chat initiation to enhance user privacy. Used firebase and Java to develop the application",
        images:[
            project3Image1,
            project3Image2,
            project3Image3,
            
        ],
    },
]

export default myProjects;