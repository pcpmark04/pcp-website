import React from 'react'

export default function PamunlasChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>PAMUNLAS CHAPTER</h1>
      <h3>( Parañaque, Muntinlupa, Las Piñas )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span>  Medical Center Muntinlupa Inc. Department of Medicine, 38 National Road Putatan, Muntinlupa City</p>
          <p><span>Contact Number :</span> 0956-588-48-92/ 862 01-62 Local 142</p>
          <p><span>Email :</span>pamunlas@yahoo.com, pamunlas@gmail.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> 	Philippine College of Physicians Pamunlas Chapter, Inc</p>
          <p><span>Bank/Branch : </span> 	Union Bank - Muntinlupa</p>
          <p><span>Account No. : </span> 	00-036001316-8</p>
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
                    <td>{officers.boardTrustees3}</td>
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
