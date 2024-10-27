Here's a `README.md` file for the Tourism Management System project setup.

---

# TourMate

This project is a Tourism Management System built using PHP and MySQL. Follow the steps below to set up the system on your local machine.

## Requirements

- Local Web Server: [XAMPP](https://www.apachefriends.org/index.html) / [WAMP](http://www.wampserver.com/en/)
- PHPMyAdmin (included in XAMPP/WAMP)

## Installation/Setup Guide

### Step 1: Download and Install a Local Web Server

1. Download and install XAMPP or WAMP on your system.
2. Start the Apache and MySQL services through the Control Panel of XAMPP or WAMP.

### Step 2: Download and Extract Source Code

1. Download the provided source code as a zip file.
2. Extract the zip file to get the source code folder.

### Step 3: Set Up the Project Directory

1. If you are using XAMPP:
   - Copy the extracted source code folder.
   - Paste it into the `htdocs` directory in your XAMPP installation folder.
   
   Example path:
   ```
   C:\xampp\htdocs\your_folder_name
   ```

2. If you are using WAMP:
   - Copy the extracted source code folder.
   - Paste it into the `www` directory in your WAMP installation folder.

   Example path:
   ```
   C:\wamp\www\your_folder_name
   ```

### Step 4: Set Up the Database

1. Open PHPMyAdmin in your browser: [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
2. Create a new database and name it `tourism_db`.
3. Import the provided SQL file into this database:
   - Locate the `tourism_db.sql` file inside the `database` folder of the extracted source code.
   - Use the PHPMyAdmin **Import** feature to load `tourism_db.sql` into your newly created `tourism_db` database.

### Step 5: Access the System

1. Open your web browser.
2. To view the client-facing Tourism website, go to:
   - [http://localhost/your_folder_name](http://localhost/your_folder_name)
3. To access the admin side of the system, go to:
   - [http://localhost/your_folder_name/admin](http://localhost/your_folder_name/admin)

---

## Troubleshooting

- **Error 404**: Ensure that Apache and MySQL services are running.
- **Database Connection Error**: Verify the database configuration in the project files, if any changes were made to database credentials.

---

## Project Overview

The Tourism Management System allows users to explore various tourism packages and manage bookings, while the admin panel provides tools for managing packages, users, and booking inquiries.

Enjoy exploring the Tourism Management System!

---
