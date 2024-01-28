// @/views/Home/FundBlog.tsx
import Box from '@mui/material/Box';

import SectionHeader from '@/views/Common/SectionHeader';
import Award from '@/views/Home/blog/Award';

const FundBlog = () => {
  return (
    <Box id="fund-blog">
      <SectionHeader
        title="Набір подяк для фонду"
        description="Усі сертифікати - є символом визнання нашої спільної місії та
          доказом того, як разом ми здатні сприяти нашим захисникам"
      />
      {/* Додатковий вміст вашого розділу */}
      <Award />
    </Box>
  );
};
export default FundBlog;
