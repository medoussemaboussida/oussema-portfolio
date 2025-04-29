import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaJenkins,
  FaCss3,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiMysql,
  SiOracle,SiJavascript 
} from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiAngular, SiSpringboot, SiDotnet, SiExpress } from "react-icons/si";
import { SiSymfony } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation, MdJavascript } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { SiVagrant, SiSonarqube } from "react-icons/si";
import { CiMobile1 } from "react-icons/ci";
import { SiFramework } from "react-icons/si";
import { FaJava,FaHtml5,FaCss3Alt  } from "react-icons/fa";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Development languages",
      color: "text-blue-400",
      skills: [
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#f9b42a]" /> },
        { name: "Javascript", icon: <SiJavascript className="w-4 h-4 text-[#ffee30]" /> },
        { name: "Typescript", icon: <SiTypescript className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Html", icon: <FaHtml5 className="w-4 h-4 text-[#ff6e34]" /> },
        { name: "CSS", icon: <FaCss3 className="w-4 h-4 text-[#2dc0e9]" /> },
       
      ],
    },
    {
      icon: SiFramework,
      title: "Frameworks & Libraries",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Angular",
          icon: <SiAngular className="w-4 h-4 text-[#DD0031]" />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="w-4 h-4 text-[#6DB33F]" />,
        },
        {
          name: ".NET",
          icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-4 h-4 text-white" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        { name: "Symfony", icon: <SiSymfony className="w-4 h-4 text-black" /> },
      ],
    },
    {
      icon: CiMobile1,
      title: "Mobile Development",
      color: "text-blue-400",
      skills: [
        {
          name: "Flutter",
          icon: <SiFlutter className="w-4 h-4 text-[#02569B]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-green-400",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
        },
        {
          name: "Oracle",
          icon: <SiOracle className="w-4 h-4 text-[#F80000]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        {
          name: "Jenkins",
          icon: <FaJenkins className="w-4 h-4 text-[#D24939]" />,
        },
        {
          name: "Vagrant",
          icon: <SiVagrant className="w-4 h-4 text-[#1563FF]" />,
        },
        {
          name: "Nexus",
          icon: <SiSonarqube className="w-4 h-4 text-[#00BFB3]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
