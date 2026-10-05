# Folder Structure Guide

Rule: **Navbar ka har link = `src/pages/` me ek folder.**

| Navbar link | Route        | Folder                | Main file                                |
|-------------|--------------|-----------------------|------------------------------------------|
| Home        | `/`          | `src/pages/home/`     | `Home.jsx`                               |
| About       | `/about`     | `src/pages/about/`    | `About.jsx`                              |
| Projects    | `/projects`  | `src/pages/projects/` | `Projects.jsx`, `ProjectDetailsPage.jsx` |
| Services    | `/services`  | `src/pages/services/` | `Services.jsx`                           |
| Contact     | `/contact`   | `src/pages/contact/`  | `Contact.jsx`                            |

Har page folder ke andar `sections/` hai. Us page ke saare parts (Hero, Story, Form etc.) wahin milte hain.

## Other folders
- `src/app/` : App aur routes
- `src/components/common/` : chhote reusable parts (Button, Container...)
- `src/components/layout/` : Navbar, Footer, PageLayout
- `src/components/ui/` : cards (ProjectCard, ServiceCard, TeamCard)
- `src/data/` : static content (projects, services, team, navLinks)
- `src/config/` : site ka naam, phone, email, social links
- `src/hooks/`, `src/utils/`, `src/styles/`, `src/assets/`
- `public/` : images, icons, favicon

## Naya page kaise add kare (example: Blog)
1. `src/pages/blog/Blog.jsx` aur `src/pages/blog/sections/` banao
2. `src/app/AppRoutes.jsx` me route add karo
3. `src/data/navLinks.js` me link add karo
