# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:

1.  PreRequsite

    Install Node JS:

        Node.js 12 or 14 and above                          // To verify: npm --version

    Clone Project: 

        Git clone "alfatkg_auto" in Local machine

                
             
# Build and Test
TODO: Describe and show how to build your code and run the tests. 
    
1.	Installation process
    Install Cypress via npm:

        cd /your/project/path

        npm install       // This will install Cypress locally as a dev dependency for your project.
    

2.	Test Runner
    To open Cypress Test Runner:

        If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin.

        Now you can open Cypress from your project root one of the following ways:

        The long way with the full path

            ./node_modules/.bin/cypress open

       Or by using npx                            // note: npx is included with npm > v5.2 or can be installed separately.

            npx cypress open     

3.  Test Execution in CLI
    To Run in Command Line:

       1. Create a report Folder under / cypress/reports
       2. npm run test                              // will all the test cases inside the integration folder 

4.  Execution Reports
    
    Reports are Generated in the below folder:
        **cypress\reports\mochareports\report.html

