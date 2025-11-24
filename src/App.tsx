import './App.css'
import { Text, Icon, Button } from '../lib/main'
import { Pagination } from '@components/Pagination/Pagination'
import { useState } from 'react'
import { Modal } from '@components/Modal/Modal'
function App() {
  // testing MR in github
  const [currentPage, setCurrentPage] = useState(1)
  const [open, setOpen] = useState(false)
  return (
    <div className="c3">
      {/* <Button className="night" onClick={() => alert("hi chris")} /> */}
      <Text as="h1" p="8" color="mars-300">
        This is the text
      </Text>
      <Text as="h2" className="text-center font-bold text-mercury-300">
        This is the text asldfkjmasldfkj asldfkj asldfkj asldfkj asldfkj asldfkj
      </Text>
      <Text as="h3" className="text-left">
        This is the text
      </Text>

      <Text as="h5">This is the text</Text>
      <Text as="h6">This is the text</Text>
      <Icon icon="ChevronLeft" />
      <Pagination
        totalPages={20}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        totalPages={20}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeBgColor="aurora-300"
        activeTextColor="white"
        itemBgColor="aurora-100"
        color="aurora-300"
      />

      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Header showBorder={false} p="4" />
        <Modal.Body>
          <Text>Modal stuff</Text>
        </Modal.Body>
        <Modal.Footer justify="start">
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default App
