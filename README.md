# Project Management Tool

This is a basic project management tool developed using Laravel for backend and HTML, CSS, and JavaScript for frontend. It allows users to create, view, and delete projects. Tasks can also be associated with each project, though features like adding, editing, or deleting tasks within a project are still to be completed.

## Features

- **Projects:**
  - Create, Read, and Delete projects.
  - Each project contains a unique `id`, `name`, `description`, and timestamps (`created_at`, `updated_at`).

- **Tasks:**
  - Tasks are associated with a project, and the system is designed to support basic CRUD operations (add, edit, delete), though not all are fully implemented.

## Technologies Used

- **Backend:** Laravel (PHP)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MariaDB/MySQL
- **Containerization:** Docker, Docker Compose
- **Authentication:** Basic authentication using Laravel's built-in user system.

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- Docker and Docker Compose
- PHP 7.4 or higher (if running without Docker)
- MySQL or MariaDB

## Installation

To get the project running, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/lelaizalead/pmt.git
cd project-management-tool
