import React from "react";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Nav from "./components/Nav";
import Data from "./components/Data";
import Full from "./components/Full";
import Carrier from "./components/Carrier";
import Cyber from "./components/Cyber";
import All from "./components/All";

function App() {
  const fullStackContent = [
    {
      image:
        "https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
    },
    {
      image:
        "https://media.licdn.com/dms/image/D5612AQG8dtGvMOsurw/article-cover_image-shrink_720_1280/0/1680236915251?e=2147483647&v=beta&t=n9UiSGnfwB4vi2vRWPIOSHymgIu4FCT-_0dwsA0VwJg",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "The Frontend Syllabus starts with programming basics, transitions to Java, covers data structures, and then delves into HTML, CSS, CSS frameworks, animations, Figma, and JavaScript. Learners also explore DOM manipulation, asynchronous JavaScript, and frontend frameworks like React.",
    },
    {
      image:
        "https://d2ms8rpfqc4h24.cloudfront.net/When_to_hire_full_stack_developer_1661527c98.jpg",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "Full stack developers rate their happiness above average. At CareerExplorer, we conduct an ongoing survey with millions of people and ask them how satisfied they are with their careers. As it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:800/1*iLa3E1yYHoYhOloCqQv36Q.png",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "The most popular full stack frameworks include Laravel, Ruby on Rails, and Express. js. If you're just starting, you might want to choose a framework that is relatively easy to learn, such as Laravel or Ruby on Rails. Alternatively, if you're looking for something more versatile or powerful, you might consider Express.",
    },
  ];
  const CarrierDev = [
    {
      image: "https://asc.army.mil/web/wp-content/uploads/2023/03/DACM_Career-Development-Model_700x395pixels-scaled.jpg",
      alt: "full-stack",
      title: "Career Development",
      description:
        "The four stages consist of establishment, advancement, maintenance and withdrawal. Each of the stages represents the age of a worker and the responsibilities and challenges that need to be addressed. Some workers repeat this model if they have a second career or midlife career change",
    },
    {
      image:
        "https://cla.umn.edu/sites/cla.umn.edu/files/career%20management%20model.png",
      alt: "full-stack",
      title: "Career Development",
      description:
        "These are: (1) theory of work-adjustment; (2) Holland's theory of vocational personalities in work environment; (3) the self-concept theory of career development formulated by Super and more recently by Savickas; (4) Gottfredson's theory of circumscription and compromise; and (5) social cognitive career theory.",
    },
    {
      image:
        "https://empxtrack.com/wp-content/uploads/2009/03/career-development.jpg",
      alt: "full-stack",
      title: "Career Development",
      description:
        "This being true, career management is an important life skill to develop and cultivate. According to Get Smart! About Modern Career Development, there are six stages of modern career development: Assessment, Investigation, Preparation, Commitment, Retention, and Transition.",
    },
    {
      image:
        "https://www.risely.me/wp-content/uploads/2023/08/Risely-Featured-Image-Deeksha-11.svg",
      alt: "full-stack",
      title: "Career Development",
      description:
        "The Big Five Model, also referred to as the Five-Factor Model, is a famous personality theory that describes personality as the play between five personality traits or factors. These factors or characteristics include openness to experience, conscientiousness, agreeableness, extraversion and neuroticism.",
    },
  ];
  const Cybersec = [
    {
      image:
        "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.",
    },
    {
      image:
        "https://www.cummins.com/sites/default/files/styles/newsroom_hero_image/public/images/newsroom_article/cybersecurity.jpg?itok=lb55sMTR",
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "TLet's delve into the salary ranges for cyber security professionals in Nigeria. According to PayScale, the average annual salary for a Cyber Security Analyst in Nigeria ranges from ₦2,400,000 to ₦6,500,000. Glassdoor reports a similar range, with an average of ₦4,000,000 per year.",
    },
    {
      image:
        "https://community.nasscom.in/sites/default/files/media/images/cybersecurity%20security%20infosec%20art%20getty.jpg",
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats. These professionals typically work in teams with other IT specialists, such as software developers or programmers.",
    },
    {
      image:
        "https://www.protocol.com/media-library/less-than-p-greater-than-cybersecurity-is-now-a-far-higher-priority-in-the-c-suite-and-board-level-than-it-used-to-be-given-the-intensifying-threat-landscape-less-than-p-greater-than.jpg?id=29928712",
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "The 3 major types of cyber security are network security, cloud security, and physical security. Your operating systems and network architecture make up your network security. It can include network protocols, firewalls, wireless access points, hosts, and servers.",
    },
  ];
  const DataScience = [
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      alt: "full-stack",
      title: "Data Science",
      description:
        "Data Science is more valuable than computer science. A Computer Scientist earns an annual salary of USD 100000 on average. A data scientist, on the other hand, earns more than USD 140000 per year. If you are a software developer or an experienced systems engineer, owning skillsets can instantly boost your salary.",
    },
    {
      image:
        "https://www.datapro.in/uploads/2d1ba0d260c4fc8de8917729d00cc574.jpeg",
      alt: "full-stack",
      title: "Data Science",
      description:
        "The highest salary of data scientists can go beyond USD 200,000 if you have the required skills. On average, a data scientist can make $126,694 per year. Generally, the range is $99,000 to $164,000.",
    },
    {
      image:
        "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/22804new-4.png",
      alt: "full-stack",
      title: "Data Science",
      description:
        "Data science is a broad career path that is undergoing developments and thus promises abundant opportunities in the future. Data science job roles are likely to get more specific, which in turn will lead to specializations in the field.",
    },
    {
      image:
        "https://www.discoverdatascience.org/wp-content/uploads/2023/01/data-science-education.jpg",
      alt: "full-stack",
      title: "Data Science",
      description:
        "Data Sciences uses AI (and its Machine Learning subset) to interpret historical data, recognize patterns, and make predictions. In this case, AI and Machine Learning help data scientists to gather data in the form of insights.",
    },
  ];
  const allCards = [
    ...fullStackContent,
    ...CarrierDev,
    ...Cybersec,
    ...DataScience,
  ];

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/all" element={<All allcard={allCards}/>} />
        <Route
          path="/full-stack"
          element={<Full content={fullStackContent} />}
        />
        <Route path="/data-science" element={<Data datas={DataScience} />} />
        <Route path="/cyber-security" element={<Cyber contents={Cybersec} />} />
        <Route
          path="/carrier-development"
          element={<Carrier data={CarrierDev} />}
        />
        <Route
          path="*"
          element={<Navigate to="/all"/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
