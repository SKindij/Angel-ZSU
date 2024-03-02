// @/views/Admin/RaiserCreateForm.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import {IFundRaising} from '@/models/interfaces';
// field elements for the form
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// put information to the database
import { createRaiser } from '@/services/data-actions';

interface RaiserCreateFormProps {
  raisingTypes:string[];
}
// form for editing information about the raiser
export default function RaiserCreateForm({ raisingTypes }:RaiserCreateFormProps) {
  // to control the value of the radio buttons
  const [value, setValue] = useState('true');
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <form action={createRaiser}>
      {/* hidden field to pass id of drink to be updated */}
      <Stack sx={{ width: 300, my:2 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Divider>базові дані щодо збору</Divider>
        {/* Форма для зміни статусу збору */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Оберіть статус:</FormLabel>
          <RadioGroup row
            aria-label="raiser-status" name="isActual"
            value={value} onChange={handleChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="Актуальний" />
            <FormControlLabel value="false" control={<Radio />} label="Закритий" />
          </RadioGroup>
        </FormControl>
        {/* Поле для зміни категорії збору */}
        <FormControl required size="small">
          <InputLabel id="variation-label">категорія збору</InputLabel>
          <Select name="variation"
            labelId="variation-label" id="variation"
          >
            <MenuItem value="" disabled><em>категорії збору</em></MenuItem>
            {raisingTypes.map( (type, index) => (
              <MenuItem key={index} value={type}>{type}</MenuItem>
            ) )}
          </Select>
          <FormHelperText>* required</FormHelperText>
        </FormControl>

        <Divider>мета та інформація щодо збору</Divider>
        <TextField type="text" color="secondary" size="small"
          id="purpose" name="purpose"
          label="* назва збору"
          placeholder="введіть текст"
        />
        <TextField type="text" color="secondary" size="small"
          id="info" name="info"
          label="* інформація про збір"
          placeholder="введіть текст"
        />

        <Divider>яку суму потрібно зібрати?</Divider>
        <TextField type="number" size="small"
          id="value" name="value"
          label="value"
          placeholder="ГРН"
        />

        <Divider>посилання на YouTube</Divider>
        <TextField type="text" color="secondary" size="small"
          id="requestVideo" name="requestVideo"
          label="* url на відео запит"
          placeholder="введіть посилання"
        />
        <TextField type="text" color="secondary" size="small"
          id="reportVideo" name="reportVideo"
          label="* url на відео звіт"
          placeholder="введіть посилання"
        />

        <Divider>посилання на монобанку</Divider>
        <TextField type="text" color="secondary" size="small"
          id="monobanka" name="monobanka"
          label="* url на монобанку"
          placeholder="введіть посилання"
        />

        {/* ----- administrator function buttons ----- */}
        <Link href="/admin">
          <Button variant="outlined">Відмінити</Button>
        </Link>
        <Button type="submit" variant="outlined" color="secondary">
          Зберегти
        </Button>
      </Stack>
    </form>
  );
}









