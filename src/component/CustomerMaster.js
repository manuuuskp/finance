import { customercolumn } from "../dataassist/customercolumn";
import Table from "./Table";
import mockdata from "../dataassist/mockdata.json";

const CustomerMaster = (props) => {
    return ( 
        <>
        <Table column={customercolumn} griddata={mockdata}/>
        </>
    );
}
 
export default CustomerMaster;