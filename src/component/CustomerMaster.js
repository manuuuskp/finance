import React from "react";
import { customercolumn } from "../dataassist/customercolumn";
import Table from "./Table";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import mockdata from "../dataassist/mockdata.json";
import CustomerDialog from "./CustomerDialog";
import { makeStyles } from "@material-ui/core/styles";

const CustomerMaster = (props) => {
    const [open, setOpen] = React.useState(false);

    const openDialog = () => {
        setOpen(true);
    }

    const closeDialog = () => {
        setOpen(false);
    }

    const useStyles = makeStyles(theme => ({
        fab: {
            position: 'absolute',
            bottom: theme.spacing(8),
            right: theme.spacing(8),
            backgroundColor: '#616161'
          }
    }));

    const classes = useStyles();

    return ( 
        <>
        <Table column={customercolumn} griddata={mockdata}/>
        <Fab onClick={openDialog} className={classes.fab}><AddIcon style={{color:'#FF6400'}}/></Fab>
        <CustomerDialog open={open} close={closeDialog}/>
        </>
    );
}
 
export default CustomerMaster;