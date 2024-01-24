// @/views/Common/SocialLinks.tsx
import * as React from 'react';
import { SvgIcon } from '@mui/material';
import Link from 'next/link';
// MUI components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// Social Media Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

interface SocialLink {
  name:string;
  href:string;
  color:string;
  icon:typeof SvgIcon;
}
const socialMediaLinks:SocialLink[] = [
  { name: 'Telegram', href: 'https://t.me/angel_zsu', color: '#1DA1F2', icon: <TelegramIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/angel_zsu?igsh=OGVmMjZkZmE2dDA3', color: '#E1306C', icon: <InstagramIcon /> },
  { name: 'Facebook', href: 'https://www.facebook.com/groups/1383290902438768/?ref=share', color: 'blue', icon: <FacebookIcon /> }
];

const SocialLinkButton:React.FC<{ link:SocialLink }> = ({ link }) => (
  <Link href={link.href} rel="noopener noreferrer" target="_blank" passHref>
    <IconButton color="inherit" size='medium' 
      sx={{ 
        marginRight: 2,
        '&:hover': { backgroundColor: 'secondary.main'}
      }}
    >
      <link.icon sx={{ color: link.color }} />
    </IconButton>
  </Link>
);

const HeaderSocialLinks = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {socialMediaLinks.map(({ name, href, color, icon }, index) => (
            <Link key={name} href={href} rel="noopener noreferrer" target="_blank" passHref>
              <IconButton color="inherit" size='medium' 
			    sx={{ 
				  marginRight:2,
				  '&:hover': { backgroundColor: 'secondary.main'}
				}}
			  >
                {React.cloneElement(icon, { sx: { color } })}
              </IconButton>
            </Link>
        ))}
    </Box>
  );
};

const FooterSocialLinks = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {socialMediaLinks.map(({ name, href, color, icon }, index) => (
            <Link key={name} href={href} rel="noopener noreferrer" target="_blank" passHref>
              <IconButton color="inherit" size='medium' 
			    sx={{ 
				  marginRight:2,
				  '&:hover': { backgroundColor: 'secondary.main'}
				}}
			  >
                {React.cloneElement(icon, { sx: { color } })}
              </IconButton>
            </Link>
        ))}
    </Box>
  );
};

export { HeaderSocialLinks, FooterSocialLinks };