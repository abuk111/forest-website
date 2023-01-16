"use strict";var burgerBtn=document.querySelector(".burger-btn"),burgerBars=document.querySelector(".burger-bar"),navbar=document.querySelector(".navbar"),navbarListItem=document.querySelectorAll(".navbar__listitem"),showNav=function(){navbar.classList.add("navbar-active"),navbar.classList.remove("navbar-hide"),burgerBars.classList.add("burger-active"),burgerBars.classList.remove("burger-back")},hideNav=function(){navbar.classList.remove("navbar-active"),navbar.classList.add("navbar-hide"),burgerBars.classList.remove("burger-active"),burgerBars.classList.add("burger-back")},navbarItemEntry=function(){var r=0;navbarListItem.forEach(function(a){a.classList.toggle("nav-entry"),a.style.animationDelay="."+r+"s",r++})},navHandling=function(){(navbar.classList.contains("navbar-active")?hideNav:showNav)(),navbarItemEntry(),navbarListItem.forEach(function(a){a.addEventListener("click",hideNav)})};burgerBtn.addEventListener("click",navHandling);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVyZ2VyQmFycyIsIm5hdmJhckxpc3RJdGVtIiwibmF2YmFyIiwic2hvd05hdiIsImFkZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImhpZGVOYXYiLCJuYXZiYXJJdGVtRW50cnkiLCJkZWxheVRpbWUiLCJ0b2dnbGUiLCJpdGVtIiwiYW5pbWF0aW9uRGVsYXkiLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwibmF2SGFuZGxpbmciXSwibWFwcGluZ3MiOiJhQUFBLElBQU1BLFVBQVlDLFNBQVNDLGNBQWMsYUFBYSxFQUNoREMsV0FBYUYsU0FBU0MsY0FBYyxhQUFhLEVBRGpERixPQUFTQyxTQUFXQyxjQUFjLFNBQUMsRUFDbkNDLGVBQWFGLFNBQVNDLGlCQUFjLG1CQUFjLEVBRWxERSxRQUFBQSxXQUVOQyxPQUFNQyxVQUFVQyxJQUFBLGVBQU0sRUFFckJGLE9BRE1HLFVBQVVDLE9BQUssYUFBZSxFQUVwQ04sV0FET0ssVUFBVUMsSUFBTyxlQUFjLEVBRXRDTixXQURVSyxVQUFVQyxPQUFLLGFBQWUsQ0FFekMsRUFBQ0MsUUFBQSxXQUNETCxPQUFNSyxVQUFVRCxPQUFWQyxlQUFnQixFQUVyQkwsT0FETUcsVUFBVUQsSUFBQ0UsYUFBTyxFQUV4Qk4sV0FET0ssVUFBYUMsT0FBQyxlQUFjLEVBRW5DTixXQURVSyxVQUFVRCxJQUFDRSxhQUFPLENBRTdCLEVBRU1FLGdCQUFrQixXQUN2QixJQUFBQyxFQUFhLEVBRWJSLGVBQ01JLFFBQVVLLFNBQUFBLEdBQWZDLEVBQ0FBLFVBQVdDLE9BQUFBLFdBQW9CLEVBQS9CRCxFQUNBRixNQUFTRyxlQUFFLElBQUFILEVBQUEsSUFDWkEsQ0FBRSxFQUNGLENBQUEsQ0FFRCxFQUVFTixZQUFTLFlBQ1RELE9BQU1HLFVBQUFRLFNBQUEsZUFBQSxFQUdQTCxRQUpDTCxTQUlESyxFQUFBQSxnQkFFTU0sRUFETmIsZUFFRWMsUUFBQSxTQUFBSixHQUNGQSxFQUFBRyxpQkFBQSxRQUFBUCxPQUFBLENBRURWLENBQUFBLENBRkEsRUFFQUEsVUFBVWlCLGlCQUFpQixRQUFTRSxXQUFXIiwiZmlsZSI6Im1haW4tbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1idG4nKVxyXG5jb25zdCBidXJnZXJCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1iYXInKVxyXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJylcclxuY29uc3QgbmF2YmFyTGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19saXN0aXRlbScpXHJcblxyXG5jb25zdCBzaG93TmF2ID0gKCkgPT4ge1xyXG5cdG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXItYWN0aXZlJylcclxuXHRuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLWhpZGUnKVxyXG5cdGJ1cmdlckJhcnMuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWFjdGl2ZScpXHJcblx0YnVyZ2VyQmFycy5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItYmFjaycpXHJcbn1cclxuY29uc3QgaGlkZU5hdiA9ICgpID0+IHtcclxuXHRuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLWFjdGl2ZScpXHJcblx0bmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1oaWRlJylcclxuXHRidXJnZXJCYXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci1hY3RpdmUnKVxyXG5cdGJ1cmdlckJhcnMuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWJhY2snKVxyXG59XHJcblxyXG5jb25zdCBuYXZiYXJJdGVtRW50cnkgPSAoKSA9PiB7XHJcblx0bGV0IGRlbGF5VGltZSA9IDBcclxuXHJcblx0bmF2YmFyTGlzdEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWVudHJ5JylcclxuXHRcdGl0ZW0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAnLicgKyBkZWxheVRpbWUgKyAncydcclxuXHRcdGRlbGF5VGltZSsrXHJcblx0fSlcclxufVxyXG5cclxuY29uc3QgbmF2SGFuZGxpbmcgPSAoKSA9PiB7XHJcblx0aWYgKCFuYXZiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZiYXItYWN0aXZlJykpIHtcclxuXHRcdHNob3dOYXYoKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRoaWRlTmF2KClcclxuXHR9XHJcblx0bmF2YmFySXRlbUVudHJ5KClcclxuXHRuYXZiYXJMaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVOYXYpXHJcblx0fSlcclxufVxyXG5cclxuYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2SGFuZGxpbmcpXHJcbiJdfQ==
