import React from 'react';
import {Component} from 'react';
import Faqs from './components/Faqs';
import TabItem from './components/TabItem';
import ProjectItem from './components/ProjectItem';
import Header from './components/Header';
import Comments from './components/Comments';
import CommentItem from './components/CommentItem';

import './App.css';

const faqsList = [
  {
    id: 0,
    questionText:
      'Q: What do you enjoy the most about being a frontend developer?',
    answerText:
      'A: I love turning creative ideas into interactive and visually appealing websites that users enjoy navigating.',
  },
  {
    id: 1,
    questionText: 'Q: Which frontend technologies do you use frequently?',
    answerText:
      'A: My toolkit includes HTML, CSS, and JavaScript, with a focus on frameworks like React for building dynamic user interfaces.',
  },
  {
    id: 2,
    questionText:
      'Q: How do you ensure your websites work well on all devices?',
    answerText:
      'A: I prioritize responsive design, testing across various devices, to ensure a seamless and consistent experience for users.',
  },
  {
    id: 3,
    questionText: 'Q: Can you share a project that you\'re proud of and why?',
    answerText:
      'A: One project I\'m proud of is a personal portfolio site where I experimented with modern design trends and showcased my skills in an engaging way.',
  },
];

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'REACTJS', displayText: 'Reactjs'},
];

const projectsList = [
  {
    link: 'https://tejaloginfrom.ccbp.tech/',
    projectId: 0,
    category: 'STATIC',
    imageURL:
      'https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg',
    title: 'Login Page',
    description:
      'A nice login page looks good and is easy to use. It uses colors, fonts, and pictures that go well together, making it look inviting. The way things are arranged on the page makes it easy for people to understand and use when they want to log in.',
  },
  {
    link: 'https://tejabookstorep.ccbp.tech/',
    projectId: 1,
    category: 'STATIC',
    imageURL:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Book Store Page',
    description:
      'Explore our Bookstore Page for an enriching journey into knowledge and captivating narratives. Immerse yourself in fascinating mythology stories and novels that promise both intrigue and wisdom, creating a haven for book lovers.',
  },
  {
    link: 'https://tejapodcastp.ccbp.tech/',
    projectId: 2,
    category: 'STATIC',
    imageURL:
      'https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg',
    title: 'Podcast Page',
    description:
      'Dive into our Podcast Page, a treasure trove of valuable knowledge and life insights shared by remarkable personalities. Immerse yourself in meaningful conversations enriching your understanding of life\'s essential',
  },
  {
    link: 'https://tejaironman.ccbp.tech/',
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL:
      'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg',
    title: 'Movie Page',
    description:
      'Unlock the movie\'s essence on our page with succinct plot insights and comprehensive details, guiding your cinematic journey seamlessly.',
  },
  {
    link: 'https://tejagfoodmunch.ccbp.tech/',
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description:
      'Food Much Website is a user-centric food tech website to browse the food items form home.',
  },
  {
    link: 'https://tejaminipro.ccbp.tech/',
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    link: 'https://tejatypetest.ccbp.tech/',
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.To improve typing skills',
  },
  {
    link: 'https://tejawikipedias.ccbp.tech/',
    projectId: 9,
    category: 'DYNAMIC',
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnxHR34Nv5RdKLlXsmh8zdpk2Ibn8qlS45mDLFuzz1fAbmRaWX4LcUcMzfnNco2LZGY4&usqp=CAU',
    title: 'Wikipedia Search',
    description:
      'Wikipedia is a free-content online encyclopedia written and maintained by a community of volunteers.',
  },
  {
    link: 'https://tejagtodoapp.ccbp.tech/',
    projectId: 10,
    category: 'DYNAMIC',
    imageURL:
      'https://img.freepik.com/premium-vector/list-planning-checklist-notepad-paper-daily-task-agreement-concept-illustration_270158-539.jpg?w=740',
    title: 'To Do List',
    description:
      'A to-do list is a simple tool to keep track of tasks you need to do. It helps you organize your day by listing what needs to be accomplished. Checking off completed tasks gives a satisfying sense of progress.',
  },

  {
    link: 'https://teja1history.ccbp.tech/',
    projectId: 11,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif',
    title: 'Browser History',
    description:
      'Access Google search results to review your browsing history, effortlessly delete specific entries, and easily search for past activities by application or website names.',
  },
  {
    link: 'https://tejamoney1.ccbp.tech/',
    projectId: 12,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif',
    title: 'Money Manager',
    description:
      'Money Manager is a powerful application that facilitates investment tracking, monitors financial gains and losses, and efficiently records expenditures.',
  },
  {
    link: 'https://tejaemojig.ccbp.tech/',
    projectId: 13,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif',
    title: 'Emoji Game',
    description:
      'Emoji Game:Click emojis to score points; win or lose based on unique choices. Beat records, reset the game with \'Play Again\' while maintaining the top score.',
  },
  {
    link: 'https://appointment11.ccbp.tech/',
    projectId: 14,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif',
    title: 'Appointments App',
    description:
      'The Appointments App is designed to help you create the perfect schedule, enabling efficient planning, time-saving for future events.',
  },
  {
    link: 'https://cpcommentsapp.ccbp.tech/',
    projectId: 15,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif',
    title: 'Comments Application',
    description:
      'The Comments Application serves as a platform for sharing public opinions, offering compliments, providing suggestions for improvement.',
  },

  {
    link: 'https://passwrdmngerdv.ccbp.tech/',
    projectId: 16,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif',
    title: 'Password Manager',
    description:
      'The Password Manager application ensures seamless password management, allowing you to securely store and retrieve passwords when needed.',
  },
];

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  };

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId});
  };

  getFilteredProjects = () => {
    const {activeTabId} = this.state;

    const filterdProjects = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    );

    return filterdProjects;
  };

  render() {
    const filterdProjects = this.getFilteredProjects();
    const {activeTabId} = this.state;

    return (
      <div className="app-container">
        <Header />
        <h1 className='headintop'>Portfolio</h1>
        <Comments />
        <h1 className="title">My Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>
        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={this.updateActiveTabId}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>
        <ul className="project-list-container">
          {filterdProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
        <div className="cardContainer">
          <div className="col-12 col-md-4">
            <div className="card-container p-3 mb-3">
              <img
                className="card-image"
                src="https://img.freepik.com/free-vector/student-boy-holding-empty-board-cartoon-sticker_1308-60415.jpg?w=2000"
                alt="Aboutmeimage"
              />
              <h1 className="card-heading">About Me</h1>
              <p className="card-description">
              👋 Hi, I'm Teja Gulagani, an aspiring frontend developer with a strong foundation in HTML, CSS, and JavaScript. Currently a student, I'm passionate about creating user-friendly interfaces and staying updated on the latest industry trends. A fast learner and team player, I bring a positive mindset and adaptability to collaborative projects. Eager to contribute my skills to innovative web development opportunities, I can be contacted at tejababu08@gmail.com. Let's code a brighter future together! 💻✨
              </p>
            </div>
          </div>
        </div>
        <CommentItem />
        <hr className="horizontalline" />
        <div className="QandAcontainer">
          <Faqs faqsList={faqsList} />
        </div>
      </div>
    );
  }
}

export default App;