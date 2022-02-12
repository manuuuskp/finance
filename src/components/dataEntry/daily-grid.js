import React, { useEffect, useState } from "react";
import "./daily-grid.css";

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import * as dailyEntryService from "../../service/dailyEntry";
import $ from 'jquery';

const DailyGrid = () => {

    let insert_ = new Map();

    let update_ = new Map();

    const getMonthColumns = () => {
        let now = new Date();
        let numberOfDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        let columns = [];
        for (let index = 1; index <= numberOfDays; index++) {
            columns.push({
                dataField: new Date(now.getFullYear(), now.getMonth(), index).getTime() + 'd',
                text: index.toString(),
                type: 'string',
                headerAlign: 'center',
                editable: true,
                style: { width: '100px' },
                formatter: (cell) => {
                    if (!cell) {
                        return 0;
                    }
                    return `${cell + ' RS'}`;
                }
            })
        }
        return columns;
    }
    const monthColums = getMonthColumns();

    const defaultData = () => {
        let defaultData = {};
        monthColums.forEach(data => { defaultData[data.dataField] = null });
        return defaultData;
    }

    const columns = [{
        dataField: 'loanId',
        text: 'Loan ID',
        type: 'string',
        headerAlign: 'left',
        editable: false,
        style: { width: '100px' },
    }, ...monthColums];

    const cellEdit = cellEditFactory({
        mode: 'click',
        blurToSave: true,
        afterSaveCell: (oldValue, newValue, row, column) => {
            if (oldValue == null || insert_.get(column.dataField)) {
                let insertData = {
                    loanId: row.loanId,
                    amount: newValue,
                    key: column.dataField,
                    created: new Date(),
                    updated: new Date(),
                }
                insert_.set(column.dataField, insertData);
            } else {
                let updateData = {
                    loanId: row.loanId,
                    amount: newValue,
                    key: column.dataField,
                    updated: new Date(),
                }
                update_.set(column.dataField, updateData);
            }
        },
    });


    const [transaction, setTransactions] = useState([]);
    const [monthToLoad, setMonth] = useState(new Date());

    useEffect(() => {
        dailyEntryService.getData(defaultData()).then(data => {
            setTransactions(data);
        })
    }, [])

    const saveTransactions = () => {
        let transactionData = { insert: [], update: [], delete: [] };
        insert_.forEach(insertData => { transactionData.insert.push(insertData) });
        update_.forEach(updateData => { transactionData.update.push(updateData) });
        dailyEntryService.bulkSave(transactionData);
    }


    return <div>
         <div className="input-group date" id="datepicker">
        <input type="date" className="form-control" id="date"/>
        <span className="input-group-append">
          <span className="input-group-text bg-light d-block">
            <i className="fa fa-calendar"></i>
          </span>
        </span>
      </div>
        <BootstrapTable id='daily-entry' keyField='id' data={transaction} columns={columns} bootstrap4={true} cellEdit={cellEdit} />
        <button type="button" className="btn btn-primary" onClick={saveTransactions}>Save</button>
    </div>
}

export default DailyGrid;

