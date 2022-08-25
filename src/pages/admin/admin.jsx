import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Checkbox from "@mui/material/Checkbox"
import "./admin.css";


function Admin() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, headerClassName: 'super-app-theme--header'},
        {
          field: 'user',
          headerName: 'User',
          width: 150,
          editable: true,
          headerClassName: 'super-app-theme--header',
        },
        {
          field: 'apiAlias',
          headerName: 'API Alias',
          width: 150,
          editable: true,
          headerClassName: 'super-app-theme--header',
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 110,
          editable: true,
          headerClassName: 'super-app-theme--header',
        },
        {
          field: 'plan',
          headerName: 'Plan',
          width: 160,
          headerClassName: 'super-app-theme--header',
        }
      ];

      const rows = [
        { id: 1, user: 'Snow', apiAlias: 'Jon', status: 'ENABLE', plan: 'BASIC' },
        { id: 2, user: 'Lannister', apiAlias: 'Cersei', status: 'DISABLE', plan: 'BASIC' },
        { id: 3, user: 'Lannister', apiAlias: 'Jaime', status: 'ENABLE', plan: 'INTERPRISE'},
        { id: 4, user: 'Stark', apiAlias: 'Arya', status:  'ENABLE', plan: 'BASIC' },
        { id: 5, user: 'Targaryen', apiAlias: 'Daenerys', status:  'ENABLE', plan: 'BASIC'},
        { id: 6, user: 'Melisandre', apiAlias: null, status: 'DISABLE', plan: 'INTERPRISE' },
        { id: 7, user: 'Clifford', apiAlias: 'Ferrara', status: 'ENABLE', plan: 'INTERPRISE'   },
        { id: 8, user: 'Frances', apiAlias: 'Rossini', status: 'DISABLE', plan: 'BASIC' },
        { id: 9, user: 'Roxie', apiAlias: 'Harvey', status:  'ENABLE' , plan: 'INTERPRISE' },
      ];

   return (
    <div className="admin-container">
        <Box sx={{
            height: 1000,
            width: '100%',
        }}
        >
        <DataGrid
            components={{BaseCheckbox: Checkbox}}
            sx={{color: "white","& .PrivateSwitchBase-input": {color: "white"}}}
            rows={rows}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            hideFooter={true}
        />
        </Box>
    </div>
   )
}

export default Admin;
