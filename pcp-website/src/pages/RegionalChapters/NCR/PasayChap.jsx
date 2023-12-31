import React from 'react'


export default function PasayChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>PASAY CHAPTERR</h1>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span> San Juan De Dios Hospital, Roxas Blvd., Pasay City</p>
          <p><span>Secretariat :</span> Ms. Melanie – 8319731 /  0999-8046397 / +639452045899</p>
          <p><span>Email :</span> pcppasay2010@yahoo.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians - Pasay City Chapter, Inc.</p>
          <p><span>Bank/Branch : </span> ChinaBank Pasay Roxas Blvd</p>
          <p><span>Account No. : </span> 202-079651-2</p>
        </div>
        {props.map((officers) => (
          <div className='chapters-officers' key={officers.id}>
            <div className='chapters-main-table'>
              <h4>OFFICERS</h4>
              <table className='chapters-officer-table'>
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
                  <div className='chapters-board'>
                    <td>{officers.boardTrustees}</td>
                    <td>{officers.boardTrustees1}</td>
                    <td>{officers.boardTrustees2}</td>
                  </div>
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
