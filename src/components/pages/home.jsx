import React from 'react'
import TaskDetails from './taskDetails'
import NoteDetails from './notesDetails'
export default function home() {
  return (
    <div className="content">
    <h3 className="welcomeHeading">Welcome John</h3>
    <NoteDetails/>
    <TaskDetails/>
    </div>
  )
}
