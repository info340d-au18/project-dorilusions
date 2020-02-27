$(document).ready(function () {
    //var data;
    // $.ajax({
    //     type: "GET",
    //     url: "data/members-list.csv",
    //     dataType: "text",
        // success: function (response) {
        //     data = $.csv.toArrays(response);
        //     generateHtmlTable(data);
        //     console.log("please work");
        // }
        // .then(fn)
    // });
    d3.csv("data/song-list.csv").then(function(response){
        generateHtmlTable(response);
        console.log("pleaaaaase work");
    })

    function generateHtmlTable(data) {
        var html = '<table  class="table table-condensed table-hover table-striped">';

        if (typeof (data[0]) === 'undefined') {
            return null;
        } else {
            $.each(data, function (index, row) {
                //bind header
                if (index == 0) {
                    html += '<thead>';
                    html += '<tr>';
                    $.each(row, function (index, colData) {
                        html += '<th>';
                        html += colData;
                        html += '</th>';
                    });
                    html += '</tr>';
                    html += '</thead>';
                    html += '<tbody>';
                } else {
                    html += '<tr>';
                    $.each(row, function (index, colData) {
                        html += '<td>';
                        html += colData;
                        html += '</td>';
                    });
                    html += '</tr>';
                }
            });
            html += '</tbody>';
            html += '</table>';

            $('#csv-display').append(html);
        }
    }
});