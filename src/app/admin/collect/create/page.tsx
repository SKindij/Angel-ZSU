// @/app/admin/collect/create/page.tsx
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// view form
import RaiserCreateForm from '@/views/Admin/RaiserCreateForm';
// get information from the database
import { fetchRaiserTypes } from '@/services/get-data';

export default async function CollectCreatePage() {

  // get necessary lists of data
  const raisingTypes = await fetchRaiserTypes();


  return (
    <Container>
      {/* зміна інформації про збір */}
      <Typography variant="h4" component="h2" color="coral">
        Створення картки нового збору.
      </Typography>
      <RaiserCreateForm
        raisingTypes={raisingTypes}
	    />
    </Container>
  );
}