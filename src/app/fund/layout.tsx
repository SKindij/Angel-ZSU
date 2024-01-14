// @/app/categories/layout.tsx
import Box from '@mui/material/Box';
// views (design) elements
import CategoriesBottomNavigation from '@/views/Fund/FundBottomNavigation';

export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box component="section" sx={{ mb: 6 }}>
        {/*  */}
        {children}
      </Box>
      <CategoriesBottomNavigation />
	  </Box>
  );
}