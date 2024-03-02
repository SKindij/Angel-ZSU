// @/app/admin/collect/[id]/edit/page.tsx
import { notFound } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// view form
import RaiserEditForm from '@/views/Admin/RaiserEditForm';
// get information from the database
import { fetchFundRaiserById, fetchRaiserTypes } from '@/services/get-data';

type Props = {
  params:{ // only property that is an object
    id:string;
  };
};

export default async function CollectEditPage({params}:Props) {
  const id = params.id;
  // get data of a specific collect and necessary lists of data
  const [raiser, raisingTypes] = await Promise.all([
    fetchFundRaiserById(Number(id)),
    fetchRaiserTypes(),
  ]);

  if (!raiser) {
    notFound();
  }

  return (
    <Container>
      {/* зміна інформації про збір */}
      <Typography variant="h2">
        Редагування картки існуючого збору.
      </Typography>
      <RaiserEditForm
        raiser={raiser}
        raisingTypes={raisingTypes}
	    />
    </Container>
  );
}