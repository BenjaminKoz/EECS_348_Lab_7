<?php
    $num = intval($_POST["num"]);
    echo "<h2>Multiplication Table for $num</h2>";
    echo "<table border='1'>";
    for ($i = 1; $i <= $num; $i++) {
        echo "<tr>";
        for ($j = 1; $j <= $num; $j++) {
            $result = $i * $j;
            echo "<td>$result</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

?>

