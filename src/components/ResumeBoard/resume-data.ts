export interface ResumeItem {
  title: string;
  institution: string;
  period: string;
  url: string;
  description: string | string[];
  tags: { name: string; url: string }[];
}

export interface Resume extends Array<ResumeItem> {}

export const education: Resume = [
  {
    title: "Electronic, Telecommunications and Computer Engineering Degree",
    institution: "Lisbon Higher Institute of Engineering",
    url: "https://www.isel.pt/",
    period: "2007 - 2013",
    description: [
      "<strong>Basic sciences:</strong> Mathematical Analysis, Linear Algebra and Analytical Geometry, Mathematics Applied to Telecommunications, Physics Applied to Electronics, Applied Electromagnetism, Signals and Systems;",
      "<strong>Electronics:</strong> Circuit Analysis, Electronics I and II, Programmable Analog and Digital Electronic Systems, Logic and Digital Systems, Instrumentation and Measures;",
      "<strong>Telecommunications:</strong> Fundamentals of Telecommunications, Terrestrial and Satellite Communications, Propagation and Radiation, Digital Communication Systems;",
      "<strong>Computer Engineering:</strong> Computers Architecture, Object Oriented Programming (Java), Programming in C / C ++, Operating Systems, Distributed Computing Systems, Databases (SQL), Computer Networks;",
      "<strong>Administration:</strong> Economics and Project Management, Management Systems.",
    ],
    tags: [
      {
        name: "Assembly",
        url: "https://en.wikipedia.org/wiki/Assembly_language",
      },
      {
        name: "C",
        url: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      {
        name: "C++",
        url: "https://en.wikipedia.org/wiki/C++",
      },
      { name: "Java", url: "https://www.java.com/" },
      { name: "Shell Script", url: "https://www.shellscript.sh/" },
      { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" },
      { name: "Matlab", url: "https://www.mathworks.com/" },
      {
        name: "Javascript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      { name: "UML", url: "https://www.uml.org/" },
      { name: "LaTeX", url: "https://www.latex-project.org/" },
      { name: "VHDL", url: "https://pt.wikipedia.org/wiki/VHDL" },
      {
        name: "Cisco RPL",
        url: "https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-0/routing/command/reference/rr40crs1book_chapter8.html",
      },
      { name: "PSpice", url: "https://www.pspice.com/" },
      { name: "Linux", url: "https://wikipedia.org/wiki/Linux" },
      { name: "VMWare", url: "https://www.vmware.com/" },
      { name: "VirtualBox", url: "https://www.virtualbox.org/" },
      { name: "Apache", url: "https://www.apache.org/" },
      { name: "Tomcat", url: "https://tomcat.apache.org/" },
      { name: "NoMachine", url: "https://www.nomachine.com/" },
    ],
  },
  {
    title: "Internship",
    institution: "Sotécnica S.A.",
    url: "https://www.sotecnica.pt/",
    period: "2005 (3 months)",
    description:
      "Medium and low voltage electrical networks infrastructure and switch panels install during the Lisbon Restelo Football Stadium renovation.",
    tags: [],
  },
  {
    title: "Electricity and Electronics Technological Course",
    institution: "Sebastião da Gama Secondary School",
    url: "https://aesgama.pt/",
    period: "2003 - 2006",
    description: [
      "<strong>General Formation:</strong> Portuguese, English, Philosophy, Physical Education;",
      "<strong>Scientific Formation:</strong> Mathematics A, Chemistry B, Physics A;",
      "<strong>Technological Formation:</strong> Electricity I and II, Digital Systems, Workshop and Laboratory Practices of Electricity and Electronics, Electrical Technologies;",
      "<strong>Integrated Technological Area:</strong> Technological Project, Internship.",
    ],
    tags: [
      {
        name: "Assembly",
        url: "https://en.wikipedia.org/wiki/Assembly_language",
      },
    ],
  },
];

export const experience: Resume = [
  {
    title: "Front-End Software Development Technical Lead",
    institution: "Bubble-Go",
    url: "https://bubble-go.ch/",
    period: "2020 - present",
    description: [
      "Developed and maintained enterprise single page static web applications (JAM Stack);",
      "Interviewed, onboarded and trained employees who have become significant contributors for the company;",
      "Participated in pre-sales strategy planning as well as creating and demonstrating POC solutions;",
      "Established and improved workflow processes on multiple projects;",
      "Used SCRUM with all it's ceremonies for agile development.",
    ],
    tags: [
      { name: "Electron", url: "https://www.electronjs.org/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "React", url: "https://reactjs.org/" },
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Gatsby", url: "https://www.gatsbyjs.com/" },
      { name: "Material UI", url: "https://mui.com/" },
      { name: "Nest", url: "https://nestjs.com/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Ansible", url: "https://www.ansible.com/" },
      { name: "Docker", url: "https://www.docker.com/" },
      { name: "OpenShift", url: "https://docs.openshift.com/" },
      { name: "Github", url: "https://github.com/" },
      { name: "Gitlab", url: "https://about.gitlab.com/" },
      { name: "Gitlab CI", url: "https://docs.gitlab.com/ee/ci/" },
      { name: "Bitbucket", url: "https://bitbucket.org/" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
      {
        name: "Confluence",
        url: "https://www.atlassian.com/software/confluence",
      },
    ],
  },
  {
    title: "Senior Front-End Software Developer",
    institution: "Bubble-Go",
    url: "https://bubble-go.ch/",
    period: "2017 - 2020",
    description: [
      "Developed and maintained enterprise single page web applications;",
      "Created training documents critical to the application of development best practices;",
      "Assigned tasks to team members according to their ability;",
      "Supervised the completion of sprints and daily duties;",
      "Encouraged team to work together and resolve interpersonal conflicts;",
      "Used SCRUM with all it's ceremonies for agile development.",
    ],
    tags: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "Ionic", url: "https://ionicframework.com/" },
      { name: "Angular", url: "https://angular.io/" },
      { name: "React", url: "https://reactjs.org/" },
      { name: "Prime", url: "https://www.primefaces.org/" },
      { name: "ExtJS", url: "https://www.sencha.com/" },
      { name: "Sass", url: "https://sass-lang.com/" },
      { name: "Stylus", url: "https://stylus-lang.com/" },
      { name: "Docker", url: "https://www.docker.com/" },
      {
        name: "Nexus",
        url: "https://www.sonatype.com/products/nexus-repository",
      },
      { name: "SonarQube", url: "https://www.sonarqube.org/" },

      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Rancher", url: "https://rancher.com/" },
      { name: "Jenkins", url: "https://www.jenkins.io/" },
      { name: "Gitlab", url: "https://about.gitlab.com/" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
      {
        name: "Confluence",
        url: "https://www.atlassian.com/software/confluence",
      },
    ],
  },
  {
    title: "Full Stack Software Developer",
    institution: "Cleverti",
    url: "https://www.cleverti.com/",
    period: "2015 - 2017",
    description: [
      "Developed enterprise web applications;",
      "Developed Content Management System solutions;",
      "Designed test cases and developed browser automated tests;",
      "Setup test environments VMs in CentOS, Debian and Ubuntu.",
    ],
    tags: [
      { name: "PHP", url: "https://www.php.net/" },
      { name: "Symfony", url: "https://symfony.com/" },
      { name: "CodeIgniter", url: "https://codeigniter.com/" },
      { name: "MySQL", url: "https://www.mysql.com/" },
      { name: "Angular", url: "https://angular.io/" },
      { name: "React", url: "https://reactjs.org/" },
      { name: "jQuery", url: "https://jquery.com/" },
      { name: "Sass", url: "https://sass-lang.com/" },
      { name: "Less", url: "https://lesscss.org/" },
      { name: "Foundation", url: "https://get.foundation/" },
      { name: "WordPress", url: "https://wordpress.org/" },
      { name: "eZ-Publish", url: "https://doc.ez.no/display/EZP/Architecture" },
      { name: "eZ-Platform", url: "https://developers.ibexa.co/ez-platform" },
      { name: "Selenium", url: "https://www.selenium.dev/" },
      { name: "Behat", url: "https://docs.behat.org/en/latest/" },
      { name: "Cucumber", url: "https://cucumber.io/" },
      { name: "TestLink", url: "https://testlink.org/" },
      { name: "Vagrant", url: "https://www.vagrantup.com/" },
      { name: "Github", url: "https://github.com/" },
      { name: "Gitlab", url: "https://about.gitlab.com/" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
    ],
  },
];
