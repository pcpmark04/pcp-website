import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { GiOpenFolder } from 'react-icons/gi'
import '../../css/HMOCss/MOA.modal.css'
import PAHMOC from '../../img/HMOImage/PAHMOC/16_PAHMOC_Acknowledgement_of_PCP_Batch_16_2023_06_14_2023.pdf'


export default function MOAModal({pahmocData, ...props}) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='MOA-header'
        >
            PAHMOC
        </Modal.Header>
        <Modal.Body className='MOA-modal-body'>
        {pahmocData.map((pahmocFile) => (
            <div className='moa-dl-forms-modal' key={pahmocFile.id}>
                <h3><GiOpenFolder/> {pahmocFile.title}</h3>
                <div className='moa-dl-btn'>
                    <a 
                        href={pahmocFile.viewFile} 
                        className='moa-btn from-top'
                    >
                        View
                    </a>
                    <a 
                        href={PAHMOC} 
                        download // Provide a suggested filename
                        className='moa-btn from-right'
                    >
                        Download
                    </a>
                </div>        
            </div>
        ))}
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='society-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  )
}
