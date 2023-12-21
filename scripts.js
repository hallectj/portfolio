
function changeAvator(){
  const picArray = [
     {pic_id: "1", image: "./images/travis_pic_1.jpg"},
     {pic_id: "2", image: "./images/travis_pic_2.jpg"},
     {pic_id: "3", image: "./images/travis_pic_3.jpg"}
  ];
  
  let myPicImage = document.getElementsByClassName('myPic')[0];

  $('.avator_pic').find('img').on('mouseover', function(){
    const picId = $(this).attr('data-picnum');
    if($(this).is(":hover")){
      const obj = picArray.find(v => v.pic_id === picId);
      myPicImage.setAttribute("src", obj.image);
    }
  });

}

$(document).ready(function() {
  changeAvator()
});