// @/app/admin/collect/[id]/delete/page.tsx
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import RaiserDeleteForm from '@/views/Admin/RaiserDeleteForm';

type Props = {
  params:{ // only property that is an object
    id:string;
  };
};

export default async function CollectDeletePage({params}:Props) {
  const id = params.id;
  return (
    <Container sx={{ p: 2, mb: 3 }}>

      <Typography variant="h4" component="h2" color="coral">
        Ви дійсно бажаєте видалити картку існуючого збору??
      </Typography>

      <RaiserDeleteForm id={Number(id)}/>
    </Container>
  );
}