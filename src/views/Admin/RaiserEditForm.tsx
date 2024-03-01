// @/views/Admin/RaiserEditForm.tsx
'use client';
import Link from 'next/link';
import {IFundRaising} from '@/models/interfaces';
// field elements for the form
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
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

  return (
    <form action={updateRaiserWithId}>
      {/* hidden field to pass id of drink to be updated */}
      <input type="hidden" name="id" value={raiser.id} />
      <Stack sx={{ width: 300 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Divider>базові дані щодо збору</Divider>
        <FormControl required size="small">
          <InputLabel id="country-label">актуальність збору</InputLabel>
          <Select name="actual"
            labelId="actual-label" id="actual"
            defaultValue={raiser.is_actual}
          >
            <MenuItem value="" disabled><em>категорія збору</em></MenuItem>
            {raisingTypes.map( (type, index) => (
              <MenuItem key={index} value={type}>{type}</MenuItem>
            ) )}
          </Select>
          <FormHelperText>* required</FormHelperText>
        </FormControl>

        <Divider>мета та інформація щодо збору</Divider>
        <TextField type="text" color="secondary" size="small"
          id="purpose" name="purpose"
          label="* введіть назву збору"
          placeholder="на що збираємо?"
          defaultValue={raiser.purpose}
          helperText="* edit raiser title"
        />
        <TextField type="text" color="secondary" size="small"
          id="info" name="info"
          label="Напишіть щось про цей збір"
          defaultValue={raiser.info}
        />

        <Divider>скільки вам потрібно зібрати?</Divider>
        <TextField type="number" size="small"
          id="value" name="value"
          label="value"
          placeholder="ГРН"
          defaultValue={raiser.value}
        />

        <Divider>посилання на різні ресурси</Divider>




        {/* ----- administrator function buttons ----- */}
        <Link href="/admin">
          <Button variant="outlined">Відмінити</Button>
        </Link>
        <Button type="submit" variant="outlined" color="secondary">Зберегти</Button>
      </Stack>
    </form>
  );
}









