import React from 'react'
//import {Terminal as ReactTerminal} from 'terminal-in-react' 
import { ReactTerminal } from "react-terminal";
import { Navigate } from 'react-router-dom'

export default function Terminal() {
    const commands = {
      whoami: "ryan",
      cd: (directory) => `changed path to ${directory}`,
      pokemon: () => <Navigate to='/pokemon' replace={true}/>
    };

  return (
    <ReactTerminal
      commands={commands}
      themes={{
        my_custom_theme: {
          themeBGColor: "#272B36",
          themeToolbarColor: "#DBDBDB",
          themeColor: "#FFFEFC",
          themePromptColor: "#a917a8"
        }
      }}
      theme="my_custom_theme"
      welcomeMessage='This is a terminal!'
      errorMessage='Command not found.'
    />
  );
}
