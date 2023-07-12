import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'

export default function DateRange({ value, setValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} className='daterangemy'>
      <DemoContainer
        components={['DateRangePicker']}
        sx={{
          backgroundColor: 'white',
          padding: '5px 15px',
          borderTopLeftRadius: '30px',
          borderBottomLeftRadius: '30px',
          borderTopRightRadius: '30px',
          borderBottomRightRadius: '30px',
        }}
      >
        <DemoItem component='DateRangePicker'>
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}
