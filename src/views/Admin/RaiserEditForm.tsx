// @/views/Admin/RaiserEditForm.tsx
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
import { updateRaiser } from '@/services/data-actions';
interface RaiserEditFormProps {
  raiser:IFundRaising;
  raisingTypes:string[];
}
// form for editing information about the raiser
export default function RaiserEditForm({ raiser, raisingTypes }:RaiserEditFormProps) {
  // creates new function that will have same body but with a fixed value raiser.id
  // useful if you need to pass function with certain parameters to another place
  const updateRaiserWithId = updateRaiser.bind(null, raiser.id);
  // to control the value of the radio buttons
  const [value, setValue] = useState(raiser.is_actual.toString());
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <form action={updateRaiserWithId}>
      {/* hidden field to pass id of drink to be updated */}
      <input type="hidden" name="id" value={raiser.id} />
      <Stack sx={{ width: 450, my:2, pl: 3 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Divider>БАЗОВІ ДАНІ ЩОДО ЗБОРУ</Divider>
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
          <InputLabel id="variation-label">різновид збору</InputLabel>
          <Select name="variation"
            labelId="variation-label" id="variation"
            defaultValue={raiser.variation}
          >
            <MenuItem value="" disabled><em>категорії збору</em></MenuItem>
            {raisingTypes.map( (type, index) => (
              <MenuItem key={index} value={type}>{type}</MenuItem>
            ) )}
          </Select>
          <FormHelperText>* оберіть один із варіантів</FormHelperText>
        </FormControl>
        <Divider>МЕТА ЗБОРУ та КОРОТКИЙ ОПИС</Divider>
        <TextField type="text" color="secondary" size="small"
          id="purpose" name="purpose"
          label="* редагування мети збору"
          defaultValue={raiser.purpose}
        />
        <TextField type="text" multiline color="secondary"
          id="info" name="info"
          label="* зміна інформації щодо збору"
          defaultValue={raiser.info}
        />

        <Divider>Яку суму потрібно зібрати?</Divider>
        <TextField type="number" size="small"
          id="value" name="value"
          label="value"
          defaultValue={raiser.value}
        />
        <Divider>Посилання на YouTube</Divider>
        <TextField type="text" color="secondary" size="small"
          id="requestVideo" name="requestVideo"
          label="* посилання на відео запит"
          defaultValue={raiser.request_video_url}
        />
        <TextField type="text" color="secondary" size="small"
          id="reportVideo" name="reportVideo"
          label="* посилання на відео звіт"
          defaultValue={raiser.report_video_url}
        />
        <Divider>Посилання на Монобанку</Divider>
        <TextField type="text" color="secondary" size="small"
          id="monobanka" name="monobanka"
          label="* посилання на монобанку"
          defaultValue={raiser.monobanka}
        />
        {/* ----- administrator function buttons ----- */}
        <Link href="/admin">
          <Button type="button" variant="outlined" sx={{ px:5, ml: 3 }}>
            Відмінити
          </Button>
        </Link>
        <Button type="submit" variant="outlined" color="secondary">
          Зберегти
        </Button>
      </Stack>
    </form>
  );
}
