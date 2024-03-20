# Angel ZSU

_Volunteer Project for the Charitable Fund 'Angel of the Armed Forces of Ukraine.'_

### 📒 About
&emsp;This website - is a user-friendly platform designed to support our brave military personnel.\
&emsp;With an inviting layout and intuitive navigation, the site offers thematic pages, seamlessly integrated YouTube videos, and informative carousels.\
&emsp;Administrators can access a secure login form to manage fundraising content, empowering them to create, edit, and remove information pertinent to our cause.\
&emsp;Connect with us via social media through conveniently placed buttons, and join our mission to support Ukraine's armed forces.

- - -

### 🔩 Features
+ 🏎️ **Next.js** - Fast by default, with config optimized for performance (with **App Directory**).
+ 💅 **Material UI** - React component library that implements Google's Material Design.
+ ✨ **ESlint** and **Prettier** - For clean, consistent, and error-free code.
+ 💯 **Perfect Lighthouse score** - Because performance matters.

- - -

### 🧑‍💻 Try It Out
You can experience this web-app firsthand by visiting the link: 🌐 https://angelzsu.com/

- - -

### 📚 The project structure (architecture):

```go
📁 Angel-ZSU/
│
├─📁 docs/
│  ├─ MUI-compendium.md
│  ├─ npm-compendium.md
│  └─ PostgreSQL-tables.md
│
├─📁 public/
│  ├─📁 images/
│
├─📁 src/
│  │
│  ├─📁 app/
│  │  ├─📁 api/
│  │  │  └─📁 auth/
│  │  │     └─📁 [...nextauth]/
│  │  ├─📁 campaigns/
│  │  ├─📁 donate/
│  │  ├─📁 reports/
│  │  ├─📁 about/
│  │  ├─📁 contacts/
│  │  ├─📁 candidate/
│  │  ├─📁 auth/
│  │  │  ├─📁 signin/
│  │  │  └─📁 signup/
│  │  ├─📁 admin/
│  │  │  ├─📁 collect/
│  │  │  │  ├─📁 [id]/
│  │  │  │  └─📁 create/
│  │  │  └─ page.tsx
│  │  │
│  │  ├─ favicon.ico
│  │  ├─ opengraph-image.png
│  │  ├─ sitemap.xml
│  │  ├─ robots.txt
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  │
│  ├─📁 models/
│  │  ├─ types.ts
│  │  └─ interfaces.ts
│  │
│  ├─📁 views/
│  │  ├─📁 ThemeRegistry/
│  │  ├─📁 RootLayout/
│  │  ├─📁 Home/
│  │  ├─📁 CampaignsUI/
│  │  ├─📁 DonateUI/
│  │  ├─📁 CandidateUI/
│  │  ├─📁 AuthUI/
│  │  └─📁 Admin/
│  │
│  └─📁 services/
│     ├─ get-data.ts
│     ├─ fund-YouTube-data.ts
│     ├─ data-actions
│     └─ utils.ts
│
├─ package.json
├─ tsconfig.json
├─ next.config
├─ next-env.d
└─ README.md
```
