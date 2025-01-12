body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  }
  
  header {
    background-color:darkblue;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  main {
    margin: 20px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: black;
  }
  
  .add-task {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  #taskInput {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  #addTaskBtn {
    padding: 10px 20px;
    background-color: darkblue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  #addTaskBtn:hover {
    background-color: darkblue;
  }
  
  .task-list ul {
    list-style: none;
    padding: 0;
  }
  
  .task-list li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  
  .task-list li button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 10px;
  }
  
  .task-list li button:hover {
    background-color: green;
  }
  
