import React,{Component} from "react"
import GeneralSettings from "../GeneralSettings/GeneralSettings"
import Quiz from "../Quiz/Quiz"
import Demo from "../Demo/Demo"
import Summary from "../Summary/Summary"


const steps = 
    [
      {name: 'General Settings', component: <GeneralSettings/>},
      {name: 'Quiz', component: <Quiz/>},
      {name: 'Demo', component:<Demo/>},
      {name: 'Summary', component: <Summary/>}
    ]

export { steps }