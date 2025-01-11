# Personal Portfolio Website Project

A portfolio website to showcase skills, projects, and experience, powered by **NestJS** (backend) and **ReactJS** (frontend). The site includes a customizable admin dashboard to manage content dynamically.

---

## Features

### **Frontend (ReactJS)**

#### Public Pages:

1. **Home Page:**

    - Introduction (name, tagline, or mission statement).
    - Profile image or banner.
    - Call-to-action buttons (e.g., “View Projects”, “Contact Me”).

2. **About Page:**

    - Detailed introduction (skills, background, achievements).
    - Timeline for professional journey or education.

3. **Projects Page:**

    - Showcase projects with:
        - Title, description, technologies used.
        - Image, live demo link, and GitHub repository link.

4. **Contact Page:**
    - Contact form (name, email, message) integrated with backend.
    - Links to social media profiles (e.g., LinkedIn, GitHub).

#### Admin Dashboard:

1. **Authentication:**
    - Admin login with JWT.
2. **Content Management:**
    - Add/Edit/Delete projects.
    - Update portfolio info (about, social links, contact email).
3. **Analytics (Optional):**
    - View visitor stats using tools like Google Analytics or custom analytics via backend.

---

### **Backend (NestJS)**

#### APIs to Support Frontend:

1. **Authentication:**

    - `POST /auth/login` – Admin login.
    - `POST /auth/logout` – Logout.
    - Use JWT for secure authentication.

2. **Projects:**

    - `GET /projects` – Fetch all projects (public).
    - `POST /projects` – Add a project (admin-only).
    - `PATCH /projects/:id` – Update a project (admin-only).
    - `DELETE /projects/:id` – Delete a project (admin-only).

3. **About Info:**

    - `GET /about` – Fetch about details (public).
    - `PATCH /about` – Update about details (admin-only).

4. **Contact Form:**

    - `POST /contact` – Submit a contact form.
    - Optionally, save messages to the database for future reference.

5. **File Upload:**
    - Support for image uploads (e.g., project screenshots, profile picture) using `@nestjs/platform-express` with local or cloud storage (AWS S3, Cloudinary).

---

### **Database Structure**

-   **User:** Admin user for authentication.
    -   Fields: `id`, `email`, `password`, `createdAt`, `updatedAt`.
-   **Project:**
    -   Fields: `id`, `title`, `description`, `technologies`, `imageURL`, `liveDemoURL`, `repoURL`, `createdAt`, `updatedAt`.
-   **About:**
    -   Fields: `id`, `content`, `createdAt`, `updatedAt`.
-   **Contact Messages:** (Optional)
    -   Fields: `id`, `name`, `email`, `message`, `createdAt`.

---

## **Frontend Implementation**

### **Technology Stack:**

-   **ReactJS** (with hooks and functional components).
-   **React Router** for navigation.
-   **Axios** for API calls.
-   **Material-UI** or **Tailwind CSS** for styling.

### **Pages Breakdown:**

1. **Home Page:**
    - Fetch intro details dynamically from backend (`/about` endpoint).
2. **Projects Page:**
    - Fetch project list (`/projects` endpoint).
    - Display project details in cards or a grid layout.
3. **Admin Dashboard:**
    - Login form for authentication.
    - Use protected routes for dashboard functionality.
    - Forms for adding/editing projects and updating about info.

---

## **Backend Implementation**

### **Technology Stack:**

-   **NestJS**:
    -   Modular structure (`auth`, `projects`, `about`, `contact` modules).
    -   Use `TypeORM` or `Prisma` for database interactions.
-   **Security:**
    -   JWT-based authentication.
    -   Input validation with `class-validator`.
-   **File Storage:**
    -   Use `Multer` for file uploads.
    -   Save images locally or to cloud storage.

### **Structure:**

-   **Auth Module:**
    -   Secure login for the admin.
-   **Projects Module:**
    -   CRUD for managing portfolio projects.
-   **About Module:**
    -   API to manage personal intro details.
-   **Contact Module:**
    -   Handle form submissions.

---

## **Optional Enhancements**

1. **Blog Section:**
    - Add a blog module to share articles.
2. **Dark Mode:**
    - Toggle light/dark mode using a context in React.
3. **Deployment:**
    - Use Docker for containerization.
    - Deploy backend to **Heroku** or **AWS**.
    - Deploy frontend to **Vercel** or **Netlify**.

---
