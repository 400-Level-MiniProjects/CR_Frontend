import React, { Component } from 'react'

import './tabledata.css'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { 'S/N': 1, 'Course Code': 'CSC 411', 'Course Title': 'Operating System II', 'Course Unit': 2 },
            { 'S/N': 2, 'Course Code': 'CSC 412', 'Course Title': 'Software Engineering', 'Course Unit': 3 },
            { 'S/N': 3, 'Course Code': 'CSC 413', 'Course Title': 'Organization of Programming Language', 'Course Unit': 2 },
            { 'S/N': 4, 'Course Code': 'CSC 414', 'Course Title': 'Artificial Intelligence', 'Course Unit': 3 },
            { 'S/N': 5, 'Course Code': 'CSC 415', 'Course Title': 'Mobile Application Development', 'Course Unit': 2 },
            { 'S/N': 6, 'Course Code': 'ENT 411', 'Course Title': 'Entrepreneuriaship Development', 'Course Unit': 1 },
            { 'S/N': 7, 'Course Code': 'CSC 419', 'Course Title': 'Sequential Programming', 'Course Unit': 2 }
         ],

      }
   }

    renderTableHeader() {
            let header = Object.keys(this.state.students[0])
            return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
            })
        }
    renderTableData() {
        return this.state.students.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val['S/N']}</td>
                <td>{val['Course Code']}</td>
                <td>{val['Course Title']}</td>
                <td>{val['Course Unit']}</td>
              </tr>
           )
           
        })
    }

    render() {
        return (
        <div class="flex justify-center">
            <table id='students'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
        )
    }
}

export default Table