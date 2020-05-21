<?php
function hello()
{
    global $i;
    $i++;
    echo "<p>Hello from test.php $i</p>";
}

hello();