import React from "react";
import {
  Card,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "../../theme";
import LeftImgCard from "../Reusable/LeftImgCard";

const CodeComponent = () => {
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper elevation={3} sx={{ pt: 2, px: 2, mb: 5 }}>
      <Card sx={isMedium ? { display: "block" } : { display: "flex", flexWrap: "wrap" }}>
          <LeftImgCard wth="50%" img="ChatApp.png" header="ChatApp (JavaScript, React)" desc="A chatting application that runs off a node.js server with a React Front-End (School Project)&#10; 
          &#10;This application uses a socket driven server to notify users off any new messages or events, and tracks what users are on and what room they are in. This is a PWA (Progressive Web Application) and is designed to be run on a mobile device.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="floorMe.jpg" header="Floor Me (C#, Windows Forms)" desc="A management application for a flooring company&#10; 
          This application was made to the client specifications. It allows the user to add and keep track of every room on a job, keeps track of all materials and generates estimates and other job-related documents.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="infoCasestudy.jpg" header="Online RAM Shop (ASP.NET 3.0)" desc="A Full-Stack Website project that uses ASP.Net 3.0, C#, and Vue (School Project)
          &#10;&#10;This web application allows a user to Register an account, Log in, and create fake orders.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="BakeMate.jpg" header="BakeMate (Android, Java, Kotlin)" desc="A mobile baking companion app that assists the user with common baking problems such as unit conversions (grams to imperial), multiple timers, and a shopping list.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="stk.jpg" header="" list={[ <Typography variant={"subtitle1"} align="left">A Python program that utilizes tkinter, and several other modules to accomplish different tasks.</Typography>,
            <Typography variant={"subtitle1"} align="left">- Stock Tools App: Creates a GUI watchlist with real-time information retrieved from an API. Stores all the stocks you would like to watch in one place.</Typography>,
            <Typography variant={"subtitle1"} align="left">- Stock Tools Data: Fetch all stock information available on the TSX and stores it in an excel spreadsheet</Typography>,
            <Typography variant={"subtitle1"} align="left">- Stock Tools Watchlist: Another watchlist application that has no GUI</Typography>]}>
          </LeftImgCard>
          <LeftImgCard wth="50%" img="SEO Parser.png" header="Search Engine Optimization Parser (Python)" desc="A Python application that will fetch the HTML from the inputted website, and parse the document to find potential errors, missing tags, or sections to be improved. In its current stage, it checks for basic <meta> tags, basic OpenGraph tags, keywords, missing alt tags, number of headings and more.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="dsap2.png" header="Breast Cancer Diagnosis (C++)" desc="A program that takes in inputted information about a patient's tumor cells (on a very small scale) and runs them through a decision tree that I created in order to find out if the tumor is benign or malignant. It then takes in the risk factors of each patient and creates an adjacency matrix to display the common edges between each factor for both malignant and benign tumors. All input is obtained through Excel spreadsheets.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="dsap1.png" header="Triage System (C++)" desc="This was a class project that involved creating my own List, Map, and Queue classes to be used in a mock hospital triage system. The user can enter basic information about the user along with their illnesses and injuries. It will then calculate the patient’s priority score and enter them into the queue.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="emphd.png" header="Employee Helpdesk (SQL, C#, HTML, jQuery)" desc="A web-based helpdesk that allows the user to view all employees and utalize REST API to add, update, and delete employees in the existing database. It also allows the use to create a Call which will be used to assign a technician to help another employee with a technical problem (e.g Hard Drive Failure). It also utilizes Itext7 to create PDF's with the data.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="pyodbc.png" header="Python to SQL" desc="Utilizing the pyodbc and matplotlib python libraries, I run queries, retrieve information, and make graphs to display the information. This was a project for me to learn the basics of the two libraries and get familiar with how to use them.">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="cpp.png" header="Date Calculator (C++)" desc="One of the 2 projects for my object oriented C++ class in my third semester. it is a date calculator that is capable of converting dates (with or without time) from one format to another (e.g. Gregorian date to Hebrew date).">
          </LeftImgCard>
          <LeftImgCard wth="50%" img="r2h.png" header="Return to Honor Website (HTML & CSS)" desc="My final website project for my web design course in my second semester. This is a website designed for a World of Warcraft guild and highlights their achievements as well as displays all their members. It provides basic information (and even Lorem ipsum as filler) to showcase the design and responsiveness of the website.">
          </LeftImgCard>
      </Card>
    </Paper>
    );
};

export default CodeComponent;
