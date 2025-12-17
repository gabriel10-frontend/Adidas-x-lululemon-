
        "use strict";

        let next = document.querySelector(".next");
        let prev = document.querySelector(".prev");

        next.addEventListener("click", function () {
          let items = document.querySelectorAll(".item");
          document.querySelector(".slide").appendChild(items[0]);
        });

        prev.addEventListener("click", function () {
          let items = document.querySelectorAll(".item");
          document.querySelector(".slide").prepend(items[items.length - 1]);
        });

        const modal = document.getElementById("videoModal");
        const videoFrame = document.getElementById("videoFrame");
        const closeBtn = document.querySelector(".close");
        const seeMoreButtons = document.querySelectorAll(".seeMore");

        seeMoreButtons.forEach(button => {
          button.addEventListener("click", function(e) {
            e.preventDefault();
            const item = this.closest(".item");
            const videoUrl = item.getAttribute("data-video");
            const imageUrl = item.getAttribute("data-image");
            
             if (imageUrl) {
              modalImage.src = imageUrl;
              modal.style.display = "block";
            }


            if (videoUrl) {
              videoFrame.src = videoUrl;
              modal.style.display = "block";
            }
          });
        });
            closeBtn.addEventListener("click", function() {
          modal.style.display = "none";
          modalImage.src = "";
        });

        window.addEventListener("click", function(e) {
          if (e.target === modal) {
            modal.style.display = "none";
            modalImage.src = "";
          }
        });





        closeBtn.addEventListener("click", function() {
          modal.style.display = "none";
          videoFrame.src = "";
        });

        window.addEventListener("click", function(e) {
          if (e.target === modal) {
            modal.style.display = "none";
            videoFrame.src = "";
          }
        });
