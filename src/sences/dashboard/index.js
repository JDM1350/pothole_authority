import { Box, Button, IconButton, Select, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/Barchart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { mockDataInvoices } from "../../data/mockdata";
import { DataGrid } from "@mui/x-data-grid";
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoneIcon from '@mui/icons-material/Done';
import { useState ,useEffect } from "react";
import { MenuItem } from "react-pro-sidebar";

const Dashboard = () => {
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
          value={params.row.Status}
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
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Report Recevied "
            progress="0.75"
            increase=""
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Approved"
            progress="0.50"
            increase=""
            icon={
              <CheckBoxIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Working"
            progress="0.30"
            increase=""
            icon={
              <EngineeringIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Updated"
            progress="0.80"
            increase=""
            icon={
              <DoneIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Reports
            </Typography>
          </Box>
         
          
          <Box
             m="0 0 0 0"
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
          
       
      

     

      </Box>
    </Box>
  );
};

export default Dashboard;