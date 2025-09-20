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
              I've been passionate about programming from a young age and enjoy building high-quality applications as part of collaborative development teams.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Outside of programming, I enjoy collecting and studying rocks, playing video games, practicing calligraphy, and making jewelry.
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
                <TextElement content="Led multiple backend projects enhancing functionality for thousands of customers." />,
                <TextElement content="Primary contact and subject-matter expert for high-traffic microservices." />,
                <TextElement content="Developed APIs and introduced caching, reducing load and enhancing reliability." />,
                <TextElement content="Modernized backend by upgrading JDK, Spring Boot, and core libraries." />,
                <TextElement content="Mentored two junior developers and onboarded new team members." />,
                <TextElement content="Collaborated with cross-functional teams, ensuring smooth project delivery." />,
                <TextElement content="Diagnosed and resolved production incidents, minimizing downtime." />,
                <TextElement content="Recognized with the Legendary Award (top 3% of employees) for impactful projects, mentoring, and exemplifying company values." />,
            ]}
        />
        <LeftInfoCard
          header={"Software Engineer I "}
          subheader={"Toronto Dominion"}
          wth={isMedium ? "100%" : "50%"}
          list={[
            <TextElement content="Developed and maintained RESTful APIs for 10 high-traffic microservices, ensuring reliable and scalable service delivery." />,
            <TextElement content="Contributed to feature design, shaping technical solutions adopted in production." />,  
            <TextElement content="Wrote comprehensive unit tests, increasing code quality and minimizing defects." />,  
            <TextElement content="Maintained service security by resolving vulnerabilities, enhancing system reliability." />,  
            <TextElement content="Maintained service security by resolving vulnerabilities, enhancing system reliability." />,  
            <TextElement content="Deployed 100+ applications to production, ensuring stable operations." />,  
            <TextElement content="Developed an internal monitoring application, boosting team efficiency and visibility." />,  
            <TextElement content="Recognized with two awards for contributions to applications and team performance." />,  
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
            <TextElement content="Rebuilt and modernized a legacy web application with full-stack architecture." />,
            <TextElement content="Integrated external APIs including Google Maps and PayPal." />,
            <TextElement content="Developed SQL procedures and scripts to support application features." />,
            <TextElement content="Implemented a real-time reservation system using WebSockets." />,
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
            <TextElement content="Java - Proficient with 4+ years in a large enterprise environment" />,
            <TextElement content="C# - ~1 year in small enterprise projects  " />,
            <TextElement content="JavaScript - Previous experience with frameworks such as React and Angular" />,
            <TextElement content="Python - past experience with scripting and data manipulation" />,
            <TextElement content="C++ - educational experience" />,
          ]}
        />
        <LeftInfoCard
            header={"Programming Libraries"}
            wth={isMedium ? "100%" : "50%"}
            list={[
                <TextElement content="JUnit & Mockito - Enterprise experience with TDD; Created hundreds of reusable and accurate test scenarios" />,
                <TextElement content="Resilience4J - Migrated enterprise services from Hystrix, implementing fault tolerance and circuit breakers" />,
                <TextElement content="OpenAPI / Swagger - Implemented and configured OpenAPI Standard 3 for APIs" />,
                <TextElement content="Jackson / JSON / XML / YAML - Experience with serialization, deserialization, and data handling in APIs" />,
                <TextElement content="Lombok - Used to simplify Java objects and reduce boilerplate in Spring Boot projects" />,
            ]}
        />
        <LeftInfoCard
            header={"Frameworks"}
            wth={isMedium ? "100%" : "50%"}
            list={[
                <TextElement content="Spring Boot - Enterprise experience creating controllers, services, and reusable libraries" />,
                <TextElement content="React - Developed web and mobile applications; this site is built with React" />,
                <TextElement content="ASP.NET - Previous experience in web, desktop, and console applications (educational/older projects)" />,
                <TextElement content="Angular - Intermediate experience building front-end applications" />,
                <TextElement content="Express - Experience building web servers and real-time applications using WebSockets (past projects)" />,
            ]}
        />
        <LeftInfoCard
            header={"Tools"}
            wth={isMedium ? "100%" : "50%"}
            list={[
                <TextElement content="Bitbucket & GitHub - Experience with pull requests, cloning repositories, and searching code" />,
                <TextElement content="Datadog, Splunk & Dynatrace - Enterprise experience creating queries and dashboards to monitor applications" />,
                <TextElement content="Jira - Experience creating and updating tickets for project tracking" />,
                <TextElement content="Veracode - Experience running sandbox scans and reviewing code/dependency vulnerabilities" />,
                <TextElement content="Redis - Experience using in-memory data store for caching and improving application performance" />,
            ]}
        />
        
      </Card>
    </Paper>  
  );
};

export default PortfolioComponent;
