// @/views/Admin/RaiserDeleteForm.tsx

import Link from 'next/link';
import {IFundRaising} from '@/models/interfaces';
// field elements for the form
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// put information to the database
import { deleteRaiser } from '@/services/data-actions';

// form for editing information about the raiser
export default function RaiserDeleteForm({ id }:{ id:number }) {
  // creates new function that will have same body but with a fixed value raiser.id
  // useful if you need to pass function with certain parameters to another place
  const deleteRaiserWithId = deleteRaiser.bind(null, id);
  return (
    <form action={deleteRaiserWithId}>
      {/* hidden field to pass id of drink to be updated */}
      <input type="hidden" name="id" value={id} />
      <Stack sx={{ width: 450, my:2, pl: 3 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* ----- administrator function buttons ----- */}
        <Link href="/admin">
          <Button type="button" variant="outlined" sx={{ px:5, ml: 3 }}>
            Відмінити дію
          </Button>
        </Link>
        <Button type="submit" variant="outlined" color="secondary">
          Підтвердити видалення
        </Button>
      </Stack>
    </form>
  );
}
