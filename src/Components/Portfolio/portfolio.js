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
          image={require("../../resources/images/me1.jpg")}
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
              Outside of Software Development I enjoy playing video games, practicing caligraphy, learning about finance, and growing peppers.
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Divider />
      <CenteredInfoCard
        header="Education"
        list={[
          <TextElement content="Fanshawe College: Computer Programmer Analyst - September 2018-2021" />,
          <TextElement content="Cumulative GPA: 4.10" />,
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
              link="certifications/CertificateOfCompletion_Become A Python Developer.pdf"
              isPdf={true}
            />,
            <LinkElement
              content='LinkedIn "C++ Developer" Certificate'
              link="certifications/LinkedinCppDevCert.pdf"
              isPdf={true}
            />,
            <LinkElement
              content="HarvardX Data Science: R Basics"
              link="certifications/HarvardX PH125.1x Certificate _ edX.pdf"
              isPdf={true}
            />,
          ]}
        />
        <CenteredInfoCard
          header={"References"}
          grow={6}
          list={[
            <LinkElement content="(Professor) Janice Manning Reference Letter" link="references/JaniceManningReferenceLetter.pdf" isPdf={true}/>,
            <LinkElement content="(Professor) Bill Pulling Reference Letter" link="references/BillPullingReferenceLetter.pdf" isPdf={true}/>,
            <LinkElement content="(Professor) Hany ElYamany Reference Letter" link="references/HanyElYamanyReferenceLetter.pdf" isPdf={true}/>,
          ]}
        />
      </Card>
      <Divider />
      <CenteredHeader content="Work Experience" />
      <Card sx={isMedium ? { display: "block" } : { display: "flex", flexWrap: "wrap" }}>
      <LeftInfoCard
          header={"Software Engineer II"}
          subheader={"Toronto Dominion"}
          wth={isMedium ? "100%" : "50%"}
          list={[
              <TextElement content="Design and develop backend features and architecture leveraging Spring Boot" />,
              <TextElement content="Lead projects throughout the development lifecycle, from concept to delivery" />,
              <TextElement content="Support two junior developers, mentoring them throughout project work" />,
              <TextElement content="Investigate production incidents and implement hotfixes to remediate issues" />,
          ]}
      />  
      <LeftInfoCard
          header={"Software Engineer I"}
          subheader={"Toronto Dominion"}
          wth={isMedium ? "100%" : "50%"}
          list={[
              <TextElement content="Developed and maintained RESTful APIs for ten high-traffic microservices" />,
              <TextElement content="Contributed to feature design and authored comprehensive documentation" />,  
              <TextElement content="Wrote comprehensive unit tests to ensure high quality of code" />,
              <TextElement content="Maintained service security by identifying and resolving vulnerabilities" />,
              <TextElement content="Deployed applications to production and monitored traffic to ensure stability" />,
              <TextElement content="Developed an application to monitor development environments, resulting in a boost in team efficiency and productivity" />,
              <TextElement content="Recognized with two awards for contributions to the team and applications" /> 
          ]}
        />
        <LeftInfoCard
          header={"Application Developer"}
          subheader={"Atlas Apex Roofing"}
          wth={isMedium ? "100%" : "50%"}
          list={[
              <TextElement content="Rebuilt a legacy web application, modernizing its full-stack architecture" />,
              <TextElement content="Integrated PayPal payment system to process transactions and verify orders" />,
              <TextElement content="Developed SQL scripts and stored procedures to support application functionality" />,
              <TextElement content="Implemented a real-time item reservation system using WebSockets" />,
              <TextElement content="Maintained a legacy web application, addressing issues and improving functionality" />,
              <TextElement content="Leveraged Google Maps API and geometry libraries for construction planning" />,
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
            <TextElement content="Java - Proficient with 3+ years in a large enterprise environment" />,
            <TextElement content="C# - Skilled with roughly a year in a small enterprise environment" />,
            <TextElement content="JavaScript - A mix of work and educational experience mainly with frameworks such as React and Angular" />,
            <TextElement content="Python - I have experience with modifying excel documents, web scraping, and many other libraries" />,
            <TextElement content="C++ - Intermediate level - educational experience with multi-threading, web socket communication, and other Windows APIs" />,
          ]}
        />
        <LeftInfoCard
          header={"Programming Libraries"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="JUnit - Enterprise experience with Test Driven Development creating hundreds of reusable and accurate test scenarios" />,
            <TextElement content="Resilience4J - Enterprise experience migrating from Hystrix" />,
            <TextElement content="OpenApi / Swagger - Experience implementing and configuring OpenApi Standard 3" />,
            <TextElement content="Paypal - Experience creating sandbox accounts and implementing services to handle transactions" />,
            <TextElement content="Google Maps Api - Experience requesting locations and performing mathematical calculations in order to mark and outline buildings accurately" />,
          ]}
        />
        <LeftInfoCard
          header={"Frameworks"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="Spring Boot - Working experience creating controllers, services, and libraries." />,
            <TextElement content="ASP.NET - Working experience in creating web, desktop, and console applications" />,
            <TextElement content="Angular - Working experience at a Intermediate skill level" />,
            <TextElement content="Express - Experience creating a web servers, and applications that make use of web sockets" />,
            <TextElement content="React - Experience creating both web and mobile applications. This site was made in React! " />,
          ]}
        />
          <LeftInfoCard
            header={"Development Software"}
            wth={isMedium ? "100%" : "50%"}
            list={[
              <TextElement content="Jira - Working experience with creating or updating tickets" />,
              <TextElement content="Datadog & Splunk - Enterprise experience creating search queries and dashboards to monitor applications" />,
              <TextElement content="Bitbucket - Experience with pull requests, creating and cloning repositories, and searching repositories for specific code" />,
              <TextElement content="Confluence - Experience creating and updating well documented articles" />,
              <TextElement content="Veracode - Experience running a sandbox scans and reviewing any code or dependency vulnerabilities " />,
            ]}
          />
        
      </Card>
    </Paper>  
  );
};

export default PortfolioComponent;
