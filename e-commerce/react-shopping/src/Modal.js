import React, { useState } from 'react'
import styled from 'styled-components';

function Modal({children}) {

    const [showModal,setShowModal] = useState(false);

    const ModalBackground = styled.div`
     position: fixed;
     background: grey;
     margin: 1% auto;
     z-index :1;
     height :100%;
     overflow: auto;


    `

    const ModalBody =  styled.div`
      width: 80%;
      background: white;
      padding: 20px;
      margin:  auto;
      bottom: 20px;

    `

  return (
    <>
     <button onClick={() =>setShowModal(true)}> Show Modal</button>
    {showModal  && 
    <ModalBackground>
        <ModalBody>
        <button onClick={() =>setShowModal(false)}> Hide Modal</button>
            {children}
        </ModalBody>
    </ModalBackground>


    }
    </>
  )
}

export default Modal