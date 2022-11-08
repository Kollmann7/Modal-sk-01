import React from "react";
import { useState } from "react";
import {storiesOf } from '@storybook/react'
import {Modal} from '../components/Modal/Modal'

const stories = storiesOf('App test', module)

stories.add('App', () =>{
  const [isOpen, setIsOpen] = useState(false)
  return(
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)} modalClassName={'red'}>
          Employee Created!
        </Modal>
      </div>
    </>
  )
})