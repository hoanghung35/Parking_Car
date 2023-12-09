// Biến để theo dõi trạng thái hiện tại của các phần tử
let isColorChanged = false;

// icon direct// eg: roadToLocation8//
//right: ==>  <i class="fa-solid fa-right-long"></i>
//left: <==  <i class="fa-solid fa-left-long"></i>
//up: ^  <i class="fa-solid fa-up-long"></i>
//down v  <i class="fa-solid fa-down-long"></i>
//turn up(right - up)    <i class="fa-solid fa-turn-up"></i>

window.onload = function() {
    // Lấy tham chiếu đến phần tử HTML cụ thể (ví dụ: một thẻ div có id là "myDiv")
    var myDiv = document.getElementById("btn5");

    // Kiểm tra xem phần tử có tồn tại không trước khi gọi hàm
    if (myDiv) {
        // Gọi hàm myFunction cho phần tử cụ thể
        roadToLocation4();
    }
};

// Duong den vi tri thu 1
function roadToLocation1() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        document.getElementById("o10").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";
        document.getElementById("o10").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri thu 2
function roadToLocation2() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        //reset direct
        document.getElementById("o11").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        document.getElementById("o38").innerHTML = "";
        document.getElementById("o14").innerHTML = "";
        //reset color button
        document.getElementById('btn3').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";

        document.getElementById("o11").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-up-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o38").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>15m</p>";
        document.getElementById("o14").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i>20m</p>";
        //change color button
        document.getElementById('btn3').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri thu 3
function roadToLocation3() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        //reset direct
        document.getElementById("o38").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        document.getElementById("o12").innerHTML = "";
        document.getElementById("o14").innerHTML = "";
        //reset color button
        document.getElementById('btn4').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";

        document.getElementById("o12").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-up-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o38").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>20m</p>";
        document.getElementById("o14").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i>10m</p>";
        //change color button
        document.getElementById('btn4').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri thu 4 
function roadToLocation4() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        //reset direct
        document.getElementById("o13").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        document.getElementById("o30").innerHTML = "";
        document.getElementById("o14").innerHTML = "";
        //reset color button
        document.getElementById('btn5').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        //direct
        document.getElementById("o13").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-up-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o30").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>10m</p>";
        document.getElementById("o14").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i></p>";
        //change color button
        document.getElementById('btn5').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri thu 5
function roadToLocation5() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri thu 6
function roadToLocation6() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o55").style.backgroundColor = "";
        document.getElementById("o47").style.backgroundColor = "";
        document.getElementById("o39").style.backgroundColor = "";
        document.getElementById("o31").style.backgroundColor = "";
        document.getElementById("o23").style.backgroundColor = "";
        document.getElementById("o15").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o55").style.backgroundColor = "lightblue";
        document.getElementById("o47").style.backgroundColor = "lightblue";
        document.getElementById("o39").style.backgroundColor = "lightblue";
        document.getElementById("o31").style.backgroundColor = "lightblue";
        document.getElementById("o23").style.backgroundColor = "lightblue";
        document.getElementById("o15").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
// Duong den vi tri thu 7
function roadToLocation7() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        document.getElementById("o10").style.backgroundColor = "";
        //reset direct
        document.getElementById("o10").innerHTML="";
        document.getElementById("o12").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        document.getElementById("o38").innerHTML = "";
        document.getElementById("o14").innerHTML = "";
        //reset color button
        document.getElementById('btn9').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";
        document.getElementById("o10").style.backgroundColor = "lightblue";

        document.getElementById("o10").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-left-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o38").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>20m</p>";
        document.getElementById("o14").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i></p>";
        document.getElementById("o12").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i>10m</p>";
        //change color button
        document.getElementById('btn9').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
// Duong den vi tri 8
function roadToLocation8() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o55").style.backgroundColor = "";
        document.getElementById("o47").style.backgroundColor = "";
        document.getElementById("o39").style.backgroundColor = "";
        document.getElementById("o31").style.backgroundColor = "";
        document.getElementById("o23").style.backgroundColor = "";
        document.getElementById("o15").style.backgroundColor = "";
        //reset mark direction
        document.getElementById("o15").innerHTML="";
        document.getElementById("o55").innerHTML="";
        document.getElementById("o31").innerHTML="";
        // reset color button
        document.getElementById('btn16').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o55").style.backgroundColor = "lightblue";
        document.getElementById("o47").style.backgroundColor = "lightblue";
        document.getElementById("o39").style.backgroundColor = "lightblue";
        document.getElementById("o31").style.backgroundColor = "lightblue";
        document.getElementById("o23").style.backgroundColor = "lightblue";
        document.getElementById("o15").style.backgroundColor = "lightblue";
        //change color button
        document.getElementById('btn16').style.backgroundColor = "red";
        //mark direction
        document.getElementById("o15").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-right-long\"></i></p>";
        document.getElementById("o55").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o31").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>10m</p>";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
// Duong den vi tri 9
function roadToLocation9() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        document.getElementById("o10").style.backgroundColor = "";
        document.getElementById("o18").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";
        document.getElementById("o10").style.backgroundColor = "lightblue";
        document.getElementById("o18").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 10
function roadToLocation10() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        //reset direct
        document.getElementById("o12").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        document.getElementById("o38").innerHTML = "";
        document.getElementById("o14").innerHTML = "";
        //reset color button
        document.getElementById('btn20').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";

        document.getElementById("o12").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-down-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o38").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>20m</p>";
        document.getElementById("o14").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i>10m</p>";
        //change color button
        document.getElementById('btn20').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 11
function roadToLocation11() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 12
function roadToLocation12() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o55").style.backgroundColor = "";
        document.getElementById("o47").style.backgroundColor = "";
        document.getElementById("o39").style.backgroundColor = "";
        document.getElementById("o31").style.backgroundColor = "";
        document.getElementById("o23").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o55").style.backgroundColor = "lightblue";
        document.getElementById("o47").style.backgroundColor = "lightblue";
        document.getElementById("o39").style.backgroundColor = "lightblue";
        document.getElementById("o31").style.backgroundColor = "lightblue";
        document.getElementById("o23").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 13
function roadToLocation13() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        document.getElementById("o10").style.backgroundColor = "";
        document.getElementById("o18").style.backgroundColor = "";
        document.getElementById("o26").style.backgroundColor = "";
        //reset direct
        document.getElementById("o10").innerHTML="";
        document.getElementById("o26").innerHTML="";
        document.getElementById("o12").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        document.getElementById("o38").innerHTML = "";
        document.getElementById("o14").innerHTML = "";
        //reset color button
        document.getElementById('btn25').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";
        document.getElementById("o10").style.backgroundColor = "lightblue";
        document.getElementById("o18").style.backgroundColor = "lightblue";
        document.getElementById("o26").style.backgroundColor = "lightblue";

        document.getElementById("o26").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-left-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o38").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>20m</p>";
        document.getElementById("o14").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i></p>";
        document.getElementById("o10").innerHTML = "<p><i class=\"fa-solid fa-down-long\"></i>5m</p>";
        document.getElementById("o12").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i>20m</p>";
        //change color button
        document.getElementById('btn25').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 14
function roadToLocation14() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        document.getElementById("o19").style.backgroundColor = "";
        document.getElementById("o27").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";
        document.getElementById("o19").style.backgroundColor = "lightblue";
        document.getElementById("o27").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 15
function roadToLocation15() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        //reset direct
        document.getElementById("o30").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        //reset color button
        document.getElementById('btn29').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";

        document.getElementById("o30").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-left-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>20m</p>";
        //change color button
        document.getElementById('btn29').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 16
function roadToLocation16() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o55").style.backgroundColor = "";
        document.getElementById("o47").style.backgroundColor = "";
        document.getElementById("o39").style.backgroundColor = "";
        document.getElementById("o31").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o55").style.backgroundColor = "lightblue";
        document.getElementById("o47").style.backgroundColor = "lightblue";
        document.getElementById("o39").style.backgroundColor = "lightblue";
        document.getElementById("o31").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 17
function roadToLocation17() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        document.getElementById("o10").style.backgroundColor = "";
        document.getElementById("o18").style.backgroundColor = "";
        document.getElementById("o26").style.backgroundColor = "";
        document.getElementById("o34").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";
        document.getElementById("o10").style.backgroundColor = "lightblue";
        document.getElementById("o18").style.backgroundColor = "lightblue";
        document.getElementById("o26").style.backgroundColor = "lightblue";
        document.getElementById("o34").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 18
function roadToLocation18() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o46").style.backgroundColor = "";
        document.getElementById("o38").style.backgroundColor = "";
        document.getElementById("o30").style.backgroundColor = "";
        document.getElementById("o22").style.backgroundColor = "";
        document.getElementById("o14").style.backgroundColor = "";
        document.getElementById("o13").style.backgroundColor = "";
        document.getElementById("o12").style.backgroundColor = "";
        document.getElementById("o11").style.backgroundColor = "";
        document.getElementById("o19").style.backgroundColor = "";
        document.getElementById("o27").style.backgroundColor = "";
        document.getElementById("o35").style.backgroundColor = "";
        //reset direct
        document.getElementById("o35").innerHTML="";
        document.getElementById("o11").innerHTML="";
        document.getElementById("o54").innerHTML = "";
        document.getElementById("o38").innerHTML = "";
        document.getElementById("o14").innerHTML = "";
        //reset color button
        document.getElementById('btn36').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o46").style.backgroundColor = "lightblue";
        document.getElementById("o38").style.backgroundColor = "lightblue";
        document.getElementById("o30").style.backgroundColor = "lightblue";
        document.getElementById("o22").style.backgroundColor = "lightblue";
        document.getElementById("o14").style.backgroundColor = "lightblue";
        document.getElementById("o13").style.backgroundColor = "lightblue";
        document.getElementById("o12").style.backgroundColor = "lightblue";
        document.getElementById("o11").style.backgroundColor = "lightblue";
        document.getElementById("o19").style.backgroundColor = "lightblue";
        document.getElementById("o27").style.backgroundColor = "lightblue";
        document.getElementById("o35").style.backgroundColor = "lightblue";

        document.getElementById("o35").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-right-long\"></i></p>";
        document.getElementById("o54").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>30m</p>";
        document.getElementById("o38").innerHTML = "<p><i class=\"fa-solid fa-up-long\"></i>20m</p>";
        document.getElementById("o14").innerHTML = "<p><i class=\"fa-solid fa-left-long\"></i>18m</p>";
        document.getElementById("o11").innerHTML = "<p><i class=\"fa-solid fa-down-long\"></i>20m</p>";
        //change color button
        document.getElementById('btn36').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 19
function roadToLocation19() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o45").style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o45").style.backgroundColor = "lightblue";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}
//Duong den vi tri 20
function roadToLocation20() {
    if (isColorChanged) {
        // Nếu đã thay đổi màu sắc trước đó, đặt lại màu sắc ban đầu
        document.getElementById("o54").style.backgroundColor = "";
        document.getElementById("o55").style.backgroundColor = "";
        document.getElementById("o47").style.backgroundColor = "";
        document.getElementById("o39").style.backgroundColor = "";
        //reset direct
        document.getElementById("o39").innerHTML="";
        document.getElementById("o55").innerHTML="";
        //reset color button
        document.getElementById('btn40').style.backgroundColor = "";
        isColorChanged = false; // Đánh dấu trạng thái đã được đặt lại
    } else {
        // Nếu chưa thay đổi màu sắc trước đó, thay đổi màu sắc thành màu xanh lá cây
        document.getElementById("o54").style.backgroundColor = "lightblue";
        document.getElementById("o55").style.backgroundColor = "lightblue";
        document.getElementById("o47").style.backgroundColor = "lightblue";
        document.getElementById("o39").style.backgroundColor = "lightblue";

        document.getElementById("o39").innerHTML="<p>Điểm đỗ <i class=\"fa-solid fa-right-long\"></i></p>";
        document.getElementById("o55").innerHTML = "<p><i class=\"fa-solid fa-turn-up\"></i>15m</p>";
        //change color button
        document.getElementById('btn40').style.backgroundColor = "red";
        isColorChanged = true; // Đánh dấu trạng thái đã được thay đổi
    }
}