<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blade Interface</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
</head>
<body class="">
    @include('layouts._partials.messages')
    <div class='has-background-danger p-5 is-flex is-justify-content-space-between is-align-items-center	'>
      <h1 class='title is-5 mb-0'>Sistema usando Web Service</h1>
      <a href="http://localhost:5173/" class='button'>🏠 Menú</a>
    </div>
    <div class="p-5">
        @yield('content')
    </div>
</body>
</html>