# 🎓 Student Management System

A simple and responsive full-stack **CRUD web application** to manage student records — built using **Node.js**, **Express.js**, **MySQL**, **Handlebars**, and **CSS**.

---

## 🚀 Features

- ✅ Add, view, edit, and delete student records  
- ✅ Clean and responsive UI with modern design  
- 📱 **Mobile-friendly layout**  
- ✅ Fully styled forms and tables  
- ✅ Confirmation prompts before deletion  
- ✅ Organized codebase with modular structure

---

## 🖼️ Screenshots

![home](https://github.com/user-attachments/assets/29d9325f-c1ea-4c83-8778-2e5981551e61)


![addstudent](https://github.com/user-attachments/assets/baf9a384-afaf-4922-95f8-4f8fe1fe058b)


![editstudent](https://github.com/user-attachments/assets/8f6eb484-599b-4f15-a102-087d58af9c22)


---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Frontend**: Handlebars, HTML, CSS  
- **Database**: MySQL  
- **Templating**: Handlebars (hbs)  
- **Version Control**: Git & GitHub

---


## 🧪 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed  
- [MySQL](https://www.mysql.com/) running  
- Basic knowledge of terminal & database

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/charuishika/crud-app.git
cd crud-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Setup MySQL Database

Create a database called studentdb (or your preferred name)

Create a table:

```sql
CREATE TABLE students (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255),
  Age INT,
  City VARCHAR(255)
);
```

Update .env with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=studentdb
```

### 4️⃣ Start the App
```bash
npm start
```

Visit: http://localhost:3000

### 📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute.

### 👤 Author
-Charuishika S
-Email: charusuresh06@gmail.com
-GitHub: charuishika

✨ Made with love and clean code!




