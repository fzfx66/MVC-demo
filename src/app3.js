import $ from "jquery";
import "./app3.css"

const $square = $('#app3 .square')

$square.on('click',()=>{
    //toggleClass:如果有就删掉如果没有就加上；
    $square.toggleClass('active')
})