// @/views/Admin/AdminButtons.tsx
import Link from 'next/link';
import Button from '@mui/material/Button';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { deleteInvoice } from '@/services/data-actions';

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
export function DeleteRaiserCard() {
  return (
    <Button variant="contained" size="small" color="error" startIcon={<DeleteOutlineRoundedIcon />} >
        Видалити
    </Button>
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
