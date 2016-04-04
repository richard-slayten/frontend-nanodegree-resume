/*
resumeBuilder.js
java script file for creating the data objects used to data fill the resume.
Inside the objects ther are also a display function that adds the data to the resume.
The google map is also added in this script.
*/

// the bio data structure

 var bio = {
	name: 'Richard Slayten',
	role: 'Web Developer',
	contacts: {
    mobile: '555-555-5555',
	  email: 'someone@here.net',
	  github: 'http://githuburl.com',
	  twitter: 'twitter info',
	  location: 'Greenwood, Indiana' 
  },
	welcomeMessage: 'Hello , welcome to my resume page.',
	skills: [
    'web delvelopment mock ups',
    'Jquery and javascript',
    'important things that people need'
  ],
	biopic: 'images/fry.jpg',
  display: function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(val) {
       $("#skills").append(HTMLskills.replace("%data%",val));
    });
    $("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
  }
}

// the education data structure

var education = {
	schools: [
    {
      name: 'Indiana Unuversity',
      location: 'Bloomington, Indiana',
      degree: 'BS',
      majors:['Computer Science','Computer Technology'],
      dates: 'Aug 2003- May 2007',
      url: 'www.IUcomputers.com'
    },{
      name: 'El Paso University',
      location: 'Austin, Texas',
      degree: 'MS',
      majors:['Data mining'],
      dates: 'Aug 2007- May 2010',
      url: 'www.texasdegree.com'
    }
  ],
	onlineCourses: [
    {
      title: 'Intro to Computer Programming',
      school: 'Udacity',
      date: 'March 2015- September 2015',
      url: 'www.udacity.com'
    },{
	    title: 'Front end web developer',
      school: 'Udacity',
      date: 'March 2016- present',
      url: 'www.udacity.com'
    }
  ], 
  display: function() {
    education.schools.forEach(function(val) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%",val.name) +
        HTMLschoolDegree.replace("%data%",val.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%",val.dates));
      val.majors.forEach(function(val2) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",val2));
      });
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",val.location));
    });
    education.onlineCourses.forEach(function(val, index) {
      if(index < 1) {
        $("#education").append(HTMLonlineClasses);
      }
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",val.title) +
        HTMLonlineSchool.replace("%data%",val.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%",val.date));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%",val.url));
    });
  }
}

// the work data structure

var work = {
  jobs: [
    {
      employer: 'Virtual Concepts',
      title: 'Web designer',
      location: 'Los Angelas, California',
      dates: '2010 - 2012',
      description: 'designed web sites for real estate business customers'
    },{
      employer: 'Walt Disney',
      title: 'Developer',
      location: 'Orlando, Florida',
      dates: '2012 - 2014',
      description: 'Develop and maintain disney apps'
    },{
      employer: 'AT&T',
      title: 'network support',
      location: 'Atlanta, Georgia',
      dates: '2014 - present',
      description: 'Support and developed mobility applications'
    }
  ],
  display: function() {
    work.jobs.forEach(function(val) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",val.employer) +
        HTMLworkTitle.replace("%data%",val.title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%",val.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%",val.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%",val.description));
    });
  }
}

// the project data structure

var projects = {
  projects: [
    {
      title:'Mobility SDR',
      dates: '2015 - 2016',
      description: 'An app that monitors Service disruption issues and notifies appropriate personnel on outages and statuses of disruptions',
      images:['images/197x148.gif','images/197x148_no2.gif']
    }, {
      title:'TCRS',
      dates: '2016 - present',
      description: 'delvelop and maintain a tracking system for provisioning orders.',
      images:['images/197x148.gif','images/197x148_no2.gif']
    }
  ],
  display: function() {
    projects.projects.forEach(function(val) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",val.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%",val.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",val.description));    
      val.images.forEach(function(val2) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%",val2));
      });
    });
  }
}

//run the display functions for all the data objects to display info on the resume.

bio.display();
education.display();
work.display();
projects.display();

// add the google map that looks at all the locations and maps them

$("#mapDiv").append(googleMap);