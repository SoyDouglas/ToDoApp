# ToDoApp

A lightweight, responsive, and intuitive ToDo application built with vanilla HTML, CSS, and JavaScript. This project is designed for portfolio demonstration, showcasing modern UI/UX practices, modular JavaScript architecture, and `localStorage` persistence.

---

## Table of Contents

1. [Features](#features)
2. [Demo](#demo)
3. [Getting Started](#getting-started)

   * [Prerequisites](#prerequisites)
   * [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Technologies](#technologies)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

* **Category-Based Organization**: Four default categories (Home, Work, University, Gym) plus user-defined custom categories.
* **Task Management**: Add, complete (toggle), and delete tasks with a single click.
* **Persistent State**: All categories and tasks are saved to `localStorage`, preserving user data across sessions.
* **Responsive Design**: Fluid layout using Flexbox, works seamlessly on desktop and mobile.
* **Accessible UI**: Keyboard-friendly interactions and clear visual feedback for active/selected items.

---

## Demo

![ToDoApp Preview](docs/preview.png)

---

## Getting Started

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge)
* Optional: A simple HTTP server for local development (e.g., `Live Server` extension, `http-server`)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ToDoApp.git
   cd ToDoApp
   ```

2. **Open in Browser**

   * Double-click `index.html`, or
   * Serve with an HTTP server:

     ```bash
     npx http-server .
     ```

---

## Usage

1. **Select a Category**

   * Click on any category in the sidebar to view its tasks.
2. **Add a Task**

   * Enter a task description in the input field and click **Add**.
3. **Toggle Completion**

   * Click the circle icon next to a task to mark it complete/incomplete.
4. **Delete a Task**

   * Click the ✕ button to remove a specific task.
5. **Create Custom Category**

   * Click **+ Add category**, enter a name, and a new category will appear.

---

## Project Structure

```
ToDoApp/
├── index.html           # Main HTML page
├── css/
│   └── style.css        # Styling with CSS variables and Flexbox
├── js/
│   └── app.js           # Application logic: rendering, events, storage
├── docs/
│   └── preview.png      # Screenshot for README
└── README.md            # Project documentation (this file)
```

---

## Technologies

* **HTML5** for semantic structure
* **CSS3** (Flexbox, CSS variables) for responsive styling
* **JavaScript (ES6)** for dynamic DOM manipulation and `localStorage` integration

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for enhancements and bug fixes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
