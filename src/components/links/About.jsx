import React from 'react';
import { Link } from 'react-router-dom';

const aboutMe = `Self-taught Frontend Developer skilled in designing and developing modern user interfaces using HTML, CSS, JavaScript, React, Redux, Tailwind CSS, and Bootstrap. Experienced in data management with Firebase, and have completed several projects showcasing my ability to create smooth and responsive user experiences. You can explore my work by visiting `;

const personalInfo = [
  { label: 'Experiance', value: '3+ Years' },
  { label: 'Avability', value: '24/7' },
  { label: 'Age', value: '20' },
  { label: 'Language Used', value: 'HTML & JSX' },
  { label: 'Country', value: 'Egypt' },
  { label: 'Satisfied Clients', value: '+100' },
  { label: 'Phone', value: '+20-10-9718-2681' },
  { label: 'Degree', value: 'BIS' },
];

const skills = [
  { name: 'HTML', level: '95%' },
  { name: 'CSS', level: '75%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'Tailwind', level: '95%' },
  { name: 'React JS', level: '85%' },
];

const SkillBar = ({ name, level }) => (
  <div className="mt-5 w-full">
    <p className="text-sm text-[#80ed99] mb-1">{name}</p>
    <div className="relative h-2 w-full bg-[#212529] rounded-full">
      <div
        className="absolute h-full bg-[#80ed99] rounded-full top-0 left-0"
        style={{ width: level }}
      ></div>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="p-12 min-h-screen lg:ml-52">
      <h2 className="text-3xl font-bold text-[#80ed99] mb-10 text-center">About me</h2>
      <div className="flex flex-col gap-2">
        <p className="font-bold">
          I'm <span className="text-[#80ed99]">Muhammed</span>, A{' '}
          <span className="text-[#80ed99]">Front-End Developer</span>
        </p>
        <p className="text-sm text-gray-300">
          {aboutMe}
          <Link
            to="/projects"
            className="text-[#80ed99] inline-block duration-300 hover:scale-105"
          >
            my projects
          </Link>
          .
        </p>
      </div>

      <div className="w-full py-[2%] grid md:grid-cols-2 gap-6 mt-8">
        <div className="grid sm:grid-cols-2 gap-4">
          {personalInfo.map((info, index) => (
            <div key={index}>
              <p className="text-sm">
                <span className="text-[#80ed99] font-semibold">{info.label}</span>: {info.value}
              </p>
              <div className="w-[80%] h-[2px] bg-[#626a72] my-2 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="w-full">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
