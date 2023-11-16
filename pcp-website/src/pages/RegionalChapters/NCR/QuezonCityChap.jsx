import React from 'react'
import '../../../components/css/ChapterCss/QcChap.css'

export default function QuezonCityChap({props}) {
  return (
    <div className='matapat-containter'>
      <h1>Quezon City Chapter</h1>
      <div className='matapat-content'>
        <div className='matapat-info'>
          <p><span>Office :</span> Rm. 445, 4th Flr. IM Department, Dr. Fe Del Mundo Medical Center, 11 Banawe Street, Brgy. Doña Josefa, Quezon City</p>
          <p><span>Secretariat :</span> Ms. Joy – 712-0845 loc 418 /  0905-3321125</p>
          <p><span>Email :</span>pcpqcchapter2010@gmail.com</p>
        </div>
        <div className='matapat-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians Quezon City Chapter</p>
          <p><span>Bank/Branch : </span> 		BPI, St. Lukes</p>
          <p><span>Account No. : </span> 003893 0734 92</p>
        </div>
        {props.map((officers) => (
        <div className='marikina-officers' key={officers.id}>
            <div className='marikina-main-table'>
              <h4>OFFICERS</h4>
              <table className='marikina-officer-table'>
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
                  <div className='qc-board'>
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
