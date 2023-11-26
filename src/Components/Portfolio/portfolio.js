import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../theme";
import CenteredInfoCard from "../Reusable/CenteredInfoCard";
import TextElement from "../Reusable/Elements/TextElement";
import LinkElement from "../Reusable/Elements/LinkElement";
import CenteredHeader from "../Reusable/Elements/CenteredHeader";
import LeftInfoCard from "../Reusable/LeftInfoCard";

const PortfolioComponent = () => {
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper elevation={3} sx={{ pt: 2, px: 1, mb: 5 }}>
      <Card sx={isSmall ? { pb: 2, display: "block" } : { pb: 2, display: "flex" }}>
        <CardMedia
          component="img"
          height="300"
          sx={isSmall ? { width: "auto", mx: "auto" } : { width: "auto" }}
          image={require("../../images/me1.jpg")}
          alt="Anthony"
        />
        <Box sx={{ flexDirection: "column" }} display={isSmall ? "block" : "flex"}>
          <CardContent sx={{ flex: "1 0 auto", px: 1 }}>
            <Typography component="div" variant="h1">
              Anthony Merante
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Software Developer
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              I have been passionate about programming and software since a very young age, and I
              love working on development teams to create quality applications.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Aside from programming, I enjoy baking cheesecake and tiramisu, playing video games, and growing plants
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Divider />
      <CenteredInfoCard
        header="Education"
        list={[
          <TextElement content="Fanshawe College: Computer Programmer Analyst - September 2018-2021" />,
          <TextElement content="Cumulative GPA: 4.10 / 4.20" />,
          <TextElement content="President's Honor Roll" />,
          <TextElement content="Deans Honor Roll: Fall 2018, Winter 2019, Summer 2020, Fall 2020, Winter 2021, Fall 2021" />,
        ]}
      />
      <Divider />
      <Card sx={isMedium ? { display: "block" } : { display: "flex" }}>
        <CenteredInfoCard
          header={"Certifications"}
          grow={6}
          list={[
            <LinkElement
              content='LinkedIn "Python Developer" Certificate'
              link="https://ajmportfolio.interconnected.live/Certificates/LinkedInPythonDevCert.pdf"
            />,
            <LinkElement
              content='LinkedIn "C++ Developer" Certificate'
              link="https://ajmportfolio.interconnected.live/Certificates/LinkedinCppDevCert.pdf"
            />,
            <LinkElement
              content="HarvardX Data Science: R Basics"
              link="https://ajmportfolio.interconnected.live/Certificates/HarvardX%20PH125.1x%20Certificate%20_%20edX.pdf"
            />,
          ]}
        />
        <CenteredInfoCard
          header={"References"}
          grow={6}
          list={[
            <LinkElement content="(Professor) Janice Manning Reference Letter" link="" />,
            <LinkElement content="(Professor) Bill Pulling Reference Letter" link="" />,
            <LinkElement content="(Professor) Hany ElYamany Reference Letter" link="#" />,
          ]}
        />
      </Card>
      <Divider />
      <CenteredHeader content="Work Experience" />
      <Card sx={isMedium ? { display: "block" } : { display: "flex", flexWrap: "wrap" }}>
        <LeftInfoCard
          header={"Software Engineer"}
          subheader={"Toronto Dominion"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="In charge of leading and mentoring 2 junior developers through the development life-cycle and ensuring quality code and tests are produced" />,
            <TextElement content="Migrated deprecated fault tolerance system to a newer library across all mobile applications" />,
            <TextElement content="Successfully deployed several applications to development environments" />,
            <TextElement content="Ran vulnerability scans on mobile applications and mitigated risks in a timely manner" />,
          ]}
        />
        <LeftInfoCard
          header={"Application Developer"}
          subheader={"Atlas Apex Roofing"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="Created application components in an Agile environment utilizing a test-driven development approach" />,
            <TextElement content="Built a ASP.NET web application to host live raffles. It utilized Angular, PayPal API, and websockets written in C#" />,
            <TextElement content="Worked with Google Maps API to develop algorithms to calculate roof areas and divide them into many sections" />,
            <TextElement content="Maintained and created functionality for legacy applications" />,
          ]}
        />
        <LeftInfoCard
          header={"Computer Skills Teacher"}
          subheader={"AJM Tutoring (Freelance)"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="Instruct groups of up to 12 participants of varying levels of computer skills" />,
            <TextElement content="Tailor and deliver private lessons, based on individual skill levels and needs" />,
            <TextElement content="Used participant feedback to improve and expand lesson plans" />,
            <TextElement content="Create lectures and workshop materials to deliver to groups of adult learners, covering topics such as: Microsoft Excel, Word, and Search Engine Optimization" />,
          ]}
        />
        <LeftInfoCard
          header={"Inventory Manager"}
          subheader={"DLB Electric"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="Created and administered a database containing all company tools and all stock" />,
            <TextElement content="Managed the companies flow of resources" />,
            <TextElement content="Gathered and prepared resources ahead of time to ensure jobs have the correct resources" />,
            <TextElement content="Assisted with the setup of work machines, supporting employees with technical issues, and installing network cables" />,
          ]}
        />
      </Card>
      <Divider />
      <CenteredHeader content="Skills and Knowledge" />
      <Card sx={isMedium ? { display: "block" } : { display: "flex", flexWrap: "wrap" }}>
      <LeftInfoCard
          header={"Programming Languages"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="Java - I am proficient with Java in a enterprise level spring-boot web environment" />,
            <TextElement content="C# - I am proficient with C# in enterprise level ASP.NET web environments" />,
            <TextElement content="JavaScript - I have working experience with both JavaScript and many popular frameworks such as React, Angular, and Node" />,
            <TextElement content="Python - I have experience with modifying excel documents, web scraping, and many other libraries" />,
            <TextElement content="C++ - Intermediate level - experience with multi-threading, web socket communication, and other Windows API's" />,
          ]}
        />
          <LeftInfoCard
            header={"Development Software"}
            wth={isMedium ? "100%" : "50%"}
            list={[
              <TextElement content="Bitbucket - Experience with pull requests, creating and cloning repositories, and searching repositories for specific code" />,
              <TextElement content="Confluence - Experience creating and updating well documented articles" />,
              <TextElement content="Jira - Working experience with creating or updating tickets" />,
              <TextElement content="Veracode - Experience running a sandbox scans and reviewing any code or dependency vulnerabilities " />,
              <TextElement content="Teams Foundation Server - Experience with creating and reviewing pull requests" />,
            ]}
          />
        <LeftInfoCard
          header={"Frameworks"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="ASP.NET - Working experience in creating web, desktop, and console applications" />,
            <TextElement content="Springboot - Working experience creating controllers, services, and libraries." />,
            <TextElement content="Angular - Intermediate skill level" />,
            <TextElement content="Express - Experience creating a web servers, and applications that make use of web sockets" />,
            <TextElement content="React - Experience creating both web and mobile applications. This site was made in React! " />,
          ]}
        />
        <LeftInfoCard
          header={"Developer Tools"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="GIT - Proficient" />,
            <TextElement content="Postman - Experience sending requests, creating collections and environments" />,
            <TextElement content="SQL Server Management Studio - Intermediate skill level" />,
            <TextElement content="Maven - Proficient" />,
            <TextElement content="Android Device Manager - Experience setting up and running Android emulators" />,
          ]}
        />
      </Card>
    </Paper>  
  );
};

export default PortfolioComponent;
