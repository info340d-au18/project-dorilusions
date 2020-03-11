import React, { Component } from 'react';
// import ObjectList from 'react-object-list'
import { CsvToHtmlTable } from 'react-csv-to-table';
import { Footer } from './Footer';
import { MDBDataTable } from 'mdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './w3.css';
import './App.css';

// import data using d3
//import * as d3 from 'd3';
import { data } from './data/MemberData';
import { songdata } from './data/SongData';
//import data from './data/members-list.csv';

export const MemberDataTable = () => {
    //let memberdata = d3.csv(data, function(data) { console.log(data); });
    return(
        <div>
            <div class="w3-container w3-content w3-center page-content top-margin" id="intro">
                <h2>MEMBER DATA</h2>
            </div>

            <div class="w3-container calendar">
                {/* <CsvToHtmlTable
                    data={memberdata}
                    csvDelimiter=","
                    tableClassName="table table-striped table-hover"
                />         */}
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                />
            </div>

            <Footer/>
        </div>


    )
}

export const SongDataTable = () => {
    return(
        <div>
            <div class="w3-container w3-content w3-center page-content top-margin" id="intro">
                <h2>SONG DATA</h2>
            </div>

            <div class="w3-container calendar">
                <CsvToHtmlTable
                    data={songdata}
                    csvDelimiter=","
                    tableClassName="table table-striped table-hover"
                />
            </div>

            <Footer/>
        </div>
    )
}

