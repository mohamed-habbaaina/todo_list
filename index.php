<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./style/style.css">
    <title>To Do List</title>
</head>
<body>
    <div class="wrapper">
        
        <header>Todo List</header>
        
        <div class="inputField">
            <input type="text" placeholder="Ajouter Une Tache">
            <button><img src="./img/add.png" alt="add"></button>
        </div>
        
        <ul class="todoList">
            <!-- data local storage -->
        </ul>

        <div class="footer">
            <span>Vous Avez <span class="pendingNum"></span> Tâches</span>
            <button>effacer toutes</button>
        </div>
    </div>
<script src="./app.js"></script>
</body>
</html>