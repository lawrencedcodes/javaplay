import React from 'react'

const tasks = [
    {
        id: 1,
        text:'Morning Routine',
        day: 'Thursday',
        reminder: false
    },
    {
        id: 2,
        text:'Code for 1 hr',
        day: 'Thursday',
        reminder: true 
    },
    {
        id: 3,
        text:'Prepare breakfast',
        day: 'Thursday',
        reminder: true 
    }
]
const Tasks = () => {
  return (
    <>
        {tasks.map((task) => (<h3>{task.text}</h3>))}
    </>
  )
}

export default Tasks