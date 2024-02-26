

import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockdata";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(mockDataInvoices);
/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pothole-fd03e-default-rtdb.firebaseio.com//mockdata.json"
        );
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
*/
  const handleChangeStatus = (id, status) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, Status: status } : row
    );
    setRows(updatedRows);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Reporter Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Severity",
      headerName: "Severity",
      flex: 1,
    },
    {
      field: "Location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Select
          value={params.status}
          onChange={(e) => handleChangeStatus(params.row.id, e.target.value)}
        >
          
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Working">Working</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Updated">Updated</MenuItem>
        </Select>
      ),
    },
    {
      field: "date",
      headerName: "Reported Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="ZONE REPORT" subtitle="List of Reports" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;

