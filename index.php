<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="generator" content="">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="css/css.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <title>Form Manager</title>
</head>
<body class="bg-light">
<div class="container">
    <div class="text-center">
        <h2>Formulaires</h2>
    </div>
    <div class="row">
        <div class=" col-md-3 offset-1">
            <div class="formFields">
                <h4>Champs de formulaire</h4>
                <ul id="sortable1" class="connectedSortable">
                    <li class="ui-state-default">Textfield</li>
                    <li class="ui-state-default">Textarea</li>
                    <li class="ui-state-default">Number</li>
                    <li class="ui-state-default">Email</li>
                    <li class="ui-state-default">Password</li>
                    <li class="ui-state-default">Checkbox</li>
                    <li class="ui-state-default">Select</li>
                    <li class="ui-state-default">Radio</li>
                </ul>
            </div>
            <div class="inputModify inactive">
                <h4> Modifications de l'input</h4>
                <h6>Name</h6>
                <input type="text" id="modifyNameInput" class="modifyInput">
                <h6>Class</h6>
                <input type="text" id="modifyClassInput" class="modifyInput">
                <h6>ID</h6>
                <input type="text" id="modifyIDInput" class="modifyInput">
                <h6>Placeholder</h6>
                <input type="text" id="modifyPlaceholderInput" class="modifyInput">

            </div>
        </div>
        <div id="formContainer" class="col-md-7 offset-1">
            <h4>Form Builder</h4>
            <h4 class="error"></h4>
            <form id="formBuilder">
            </form>
        </div>
    </div>
</div>
</body>
<footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2017-2018 Company Name</p>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
</footer>
</body>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="js/main.js"></script>
</html>
