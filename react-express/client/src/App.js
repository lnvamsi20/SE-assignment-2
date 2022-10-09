import React from 'react'
import { Container } from 'react-bootstrap'
import AddNumbers from './components/AddNumbers'
import EditableCard from './components/EditableCard'
import NavBar from './components/NavBar'
import News from './components/News'


export default function App() {
  return (
    <>
      <NavBar />
      <Container className='py-5'>
        <EditableCard />
        <News />
        <AddNumbers />
      </Container>
    </>
  )
}
