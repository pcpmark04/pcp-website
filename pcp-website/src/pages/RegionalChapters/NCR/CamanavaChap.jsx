import React from 'react'
import '../../../components/css/ChapterCss/CamanavaChap.css'

export default function CamanavaChap({props}) {
  return (
    <div className='camanava-containter'>
      <h1>CAMANAVA CHAPTER</h1>
      <h3>( Caloocan, Malabon. Navatos, Valenzuela )</h3>
      <div className='camanava-content'>
        <div className='camanava-info'>
          <p><span>Office :</span> IM Department, MCU Hospital, Morning Breeze, Edsa, Caloocan</p>
          <p><span>Secretariat :</span> Ms. Monet / 09228569136; MCU-IM Dept. 8367-2031</p>
          <p><span>Email :</span> PCP_CAMANAVA@yahoo.com</p>
        </div>
        <div className='camanava-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> PCP CAMANAVA CHAPTER INC.</p>
          <p><span>Bank/Branch : </span> BDO Monumento</p>
          <p><span>Account No. : </span> 000600216365</p>
        </div>
        {props.map((officers) => (
          <div className='camanava-officers' key={officers.id}>
            <div className='camanava-main-table'>
              <h4>OFFICERS</h4>
              <table className='camanava-officer-table'>
                <tr>
                  <th>President : </th>
                  <td>{officers.president}</td>
                </tr>
                <tr>
                  <th>Vice President : </th>
                  <td>{officers.vicePresident}</td>
                </tr>
                <tr>
                  <th>Secretary : </th>
                  <td>{officers.secretary}</td>
                </tr>
                <tr>
                  <th>Treasurer : </th>
                  <td>{officers.treasurer}</td>
                </tr>
                <tr>
                  <th>Board of Trustees : </th>
                  <tbody>
                    <td>{officers.boardTrustees}</td>
                    <td>{officers.boardTrustees1}</td>
                  </tbody>
                </tr>
                <tr>
                  <th>Secretary: </th>
                  <td>{officers.secretary}</td>
                </tr>
                <tr>
                  <th>Immediate Past President :</th>
                  <td>{officers.pastPresident}</td>
                </tr>
              </table>
            </div>
          </div>
        ))}  
      </div>
    </div>
  )
}
