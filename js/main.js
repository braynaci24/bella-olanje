$(document).ready(function () {
    let foodData = JSON.parse(localStorage.getItem('food')) || []

    for (let i = 0; i < foodData.length; i++) {
        $('.append-div').append(`<div class="market-box-style"><img src="${foodData[i].image}"> <span>${foodData[i].name}</span> <a class="trash" href="#"><i class="far fa-trash-alt"></i></a></div>`)
    }

    $('.navbar-toggler').click(function () {
        $('.list-container').toggle(320);
    })
    let level = 25;
    let height = level / $(window).height();
    let width = level / $(window).width();
    $("body").mousemove(function (e) {
        let pageX = e.pageX - ($(window).width() / 2);
        let pageY = e.pageY - ($(window).height() / 2);
        let newValueX = width * pageX * -1 - 25;
        let newValueY = height * pageY * -1 - 50;
        $('.enterence, .bottom, .order-background').css("background-position", newValueX + "px     " + newValueY + "px");
    });
    $('.slider-order-container').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 7,
    });

    $('.market-button').click(function () {
        $('.position-container').show();
    })

    $('.cross').click(function () {
        $('.position-container').fadeOut()

    })

    $('.add-food').click(function () {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'SEPETE EKLENDİ',
            showConfirmButton: false,
            timer: 400,
        })

        foodData = JSON.parse(localStorage.getItem('food')) || []
        let foodSrc = $(this).parent().prev().attr('src');
        let foodName = $(this).prev().text();
        let foodAllInformation = {
            name: foodName,
            image: foodSrc,
        }

        foodData.push(foodAllInformation);
        localStorage.setItem('food', JSON.stringify(foodData));
        $('.append-div').append(`<div class="market-box-style"><img src="${foodAllInformation.image}"> <span>${foodAllInformation.name}</span> <a class="trash" href="#"><i class="far fa-trash-alt"></i></a></div>`);
    })

    $('body').on('click', '.trash', function(){
        let text = $(this).prev().text();
        let ind = foodData.indexOf(text)
        foodData.splice(text, 1)
        localStorage.setItem('food', JSON.stringify(foodData))
    })
   
})