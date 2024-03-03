// @/views/Admin/AdminButtons.tsx
import Link from 'next/link';
import Button from '@mui/material/Button';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { deleteRaiser } from '@/services/data-actions';

// to update information on existing collection
export function UpdateRaiserCard({ id }:{ id:number }) {
  return (
    <Link href={`/admin/collect/${id}/edit`} >
      <Button variant="contained" size="small" color="secondary" startIcon={<EditNoteRoundedIcon />} >
          Редагувати
      </Button>
    </Link>
  );
}

// to delete an existing collection
export function DeleteRaiser({ id }:{ id:number }) {
  return (
    <Link href={`/admin/collect/${id}/delete`} >
      <Button variant="contained" size="small" color="error" startIcon={<EditNoteRoundedIcon />} >
          Видалити
      </Button>
    </Link>
  );
}

// to create a new collection
export function CreateRaiserCard() {
  return (
    <Link href={'/admin/collect/create'} >
      <Button variant="contained" size="medium" color="info"
        sx={{ px:5, ml: 7 }} startIcon={<AddCircleTwoToneIcon />}
      >
          Створити Збір
      </Button>
    </Link>
  );
}
