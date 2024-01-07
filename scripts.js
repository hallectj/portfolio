
function changeAvator(){
  const picArray = [
     {pic_id: "1", image: "./images/travis_pic_1.jpg"},
     {pic_id: "2", image: "./images/travis_pic_2.jpg"},
     {pic_id: "3", image: "./images/travis_pic_3.jpg"}
  ];
  
  let myPicImage = document.getElementsByClassName('myPic')[0];

  document.querySelectorAll('.avator_pic img').forEach(function(imgElement) {
    imgElement.addEventListener('mouseover', function() {
        const picId = imgElement.getAttribute('data-picnum');
        if (imgElement.matches(':hover')) {
            const obj = picArray.find(function(v) {
                return v.pic_id === picId;
            });
            myPicImage.setAttribute('src', obj.image);
        }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeAvator();
}, false);
