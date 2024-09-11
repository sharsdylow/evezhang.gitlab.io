import self from "../img/self.png"
import project1 from "../img/project1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(252, 191, 101)", "rgb(62,210,239)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Eve",
    lastName: "Zhang",
    initials: "EZ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🐱',
            text: 'Cat lover'
        },
        {
            emoji: '🌎',
            text: 'Based in the Bay Area'
        },
        {
            emoji: "💼",
            text: "Looking for frontend/fullstack opportunities"
        },
        {
            emoji: "📧",
            text: "xuyinz13@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/calipine_/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/sharsdylow",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/xuyinzhang/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Eve. I'm a master student graduated from UC Irvine recently. " +
    "I studied computer engineering, and I have experience with software development for two years. " +
    "I enjoy spending time with my cats. " +
    "You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'node.js', 'python', 'SQL', 'CSS'],
            exposedTo: ['nodejs', 'typescript', 'kubernetes']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'concert',
            emoji: '🎫'
        },
        {
            label: 'hiking',
            emoji: '🏕️'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/sharsdylow/Calit2", // this should be a link to the **repository** of the project, where the code is hosted.
            image: project1,
            intro: "A React-based website for an industrial IoT system " +
            "featuring more than 40 sensor nodes to monitor the real-time status of semiconductor manufacturing machines, " +
            "enabling operators to track facilities’ states 24/7."
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
    ]
}