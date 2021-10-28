import React from 'react';
import Box from '@mui/material/Box';
import CoinListTable from '../../components/chart/CoinListTable';

function ChartPage() {
  return (
    <div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'repeat(8, calc(100vh / 10))',
          gridTemplateAreas: `"chartGrid main main main"
          "chartGrid main main main"
          "chartGrid main main main"
          ". main main main"
          ". main main main"
          ". main main main"
          ". main main main"
          ". main main main"`,
        }}
      >
        <Box sx={{ gridArea: 'chartGrid', bgcolor: 'info.main' }}>
          <CoinListTable />
        </Box>
        <Box
          sx={{
            gridArea: 'main',
            bgcolor: 'secondary.main',
          }}
        >
          Main
        </Box>
      </Box>
    </div>
  );
}

export default ChartPage;
