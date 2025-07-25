import React from 'react'
import MyDndContext from './components/Context/MyDndContext'
import Drop from './components/Drop/Drop'

function Tasks() {
    return (
        <div>
            <MyDndContext  Drop={Drop} />
        </div>
    )
}

export default Tasks