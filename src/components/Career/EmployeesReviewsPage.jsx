/* eslint-disable jsx-a11y/img-redundant-alt */
// EmployeesReviewsPage.jsx

import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel({ employee, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column layout for xs (extra small) screens, row layout for md (medium) and larger screens
            alignItems: 'center',
            p: 3,
            padding: '2%',
            background: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Image on the left */}
          <img
            src={employee.picture}
            alt={`${employee.name}'s Picture`}
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              marginBottom: { xs: '10px', md: '0' }, // Add margin only for xs screens
              marginRight: { xs: '0', md: '10px' }, // Add margin only for md and larger screens
              borderRadius: '50%',
            }}
          />

          {/* Text on the right */}
          <div style={{ textAlign: 'center', flex: '1' }}>
            <Typography variant="h5" gutterBottom>
              {employee.name}
            </Typography>
            <Typography variant="body1" style={{ padding: '0 10px', maxWidth: '100%' }}>
              {employee.reviews}
            </Typography>
          </div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  employee: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function EmployeesReviewsPage({ employees }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % employees.length);
    }, 5000); // Change tab every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [employees.length]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'transparent', padding:"3%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {employees.map((employee, index) => (
             <Tab
             key={index}
             icon={<img src={employee.icon} alt={`${employee.name}'s Icon`} style={{ width: '10%', height: 'auto' }} />}
             {...a11yProps(index)}
           />
            ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {employees.map((employee, index) => (
          <TabPanel key={index} employee={employee} value={value} index={index} dir={theme.direction} />
        ))}
      </SwipeableViews>
    </Box>
  );
}
