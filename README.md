# Ryan's Blog

Welcome to **Ryan's Blog**, a personal blog application built with [Next.js](https://nextjs.org/) and [Prisma](https://www.prisma.io/) backed by PostgreSQL for data storage. This blog serves as a platform where I write about all things software-related. It's designed with a clean, user-friendly interface for a smooth reading experience.

## Table of contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)

<img src="/public/ryansblog.png" alt="app" />

## Features

- **Static & Dynamic Rendering**: Takes full advantage of Next.js's hybrid rendering approach. Some pages are statically generated for fast loading, while others are dynamically rendered as needed.
- **HTML-based Blog Posts**: Each blog post is written in HTML and stored both in the codebase and in a PostgreSQL database via Prisma.
- **Scroll-based Pagination**: As the user scrolls down the page, new blog posts are dynamically fetched and rendered, allowing for a seamless reading experience without overwhelming users with too much content at once.
- **Clean, Comfortable Design**: The UI is designed with simplicity and ease of reading in mind, allowing users to focus on the content without distractions.
- **Software-Focused Content**: All blog posts center around software development, engineering practices, and related topics.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) for the React framework.
- **Backend**: [Prisma](https://www.prisma.io/) ORM connected to a PostgreSQL database for managing blog posts and other data.
- **Database**: PostgreSQL for structured data storage.
- **Deployment**: The blog is hosted using a platform that supports Next.js, such as Vercel.

## Installation

To run the project locally:

1. Clone the repository:

   ```
   git clone https://github.com/RyanLarge13/Ryans-Blog.git
   cd ryans-blog
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file at the root of the project and add your PostgreSQL connection string and other environment variables:

   ```
   DATABASE_URL=your-postgres-connection-string
   ```

4. Set up Prisma and migrate the database:

   ```
   npx prisma migrate dev
   ```

5. Run the development server:

   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the blog.

## Usage

Once the app is running, users can:

- Browse blog posts on the home page.
- Scroll to load additional posts using scroll-based pagination.
- Click on a post title to read the full blog post.

## Contributions

Contributions are welcome! If you'd like to report a bug or suggest an improvement, feel free to open an issue or submit a pull request.

## License

- The **code** in this project is licensed under the [MIT License](LICENSE).
- The **blog content** is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](CONTENT_LICENSE).
