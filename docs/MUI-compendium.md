# Material UI compendium

To support the **App Router**, the components and hooks from **Base UI** that need access to browser APIs are exported with the `"use client"` directive.

## MUI integration with Next.js [App Router](https://nextjs.org/docs/app)

Inside ``app/layout.tsx``, import the `AppRouterCacheProvider` and wrap all elements under the `<body>` with it:
```tsx
 // app/layout.tsx
  import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'; 

   export default function RootLayout(props) {
     const { children } = props;
     return (
       <html lang="en">
         <body>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
         </body>
       </html>
     );
   }
```

#### Default breakpoints
> _Each breakpoint (a key) matches with a fixed screen width (a value):_
- **xs**, extra-small: 0px
- **sm**, small: 600px
-  **md**, medium: 900px
- **lg**, large: 1200px
- **xl**, extra-large: 1536px

- - -

### [Material Icons](https://mui.com/material-ui/material-icons/)

2,100+ ready-to-use React Material Icons from the official website.\
``npm install @mui/icons-material``

Each Material icon also has a "theme":
+ **Filled** theme (default) is exported as @mui/icons-material/Delete,
+ **Outlined** theme is exported as @mui/icons-material/DeleteOutlined,
+ **Rounded** theme is exported as @mui/icons-material/DeleteRounded,
+ **Twotone** theme is exported as @mui/icons-material/DeleteTwoTone,
+ **Sharp** theme is exported as @mui/icons-material/DeleteSharp.

- - -

