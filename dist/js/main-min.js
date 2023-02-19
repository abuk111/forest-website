"use strict";var burgerBtn=document.querySelector(".burger-btn"),burgerBars=document.querySelector(".burger-bar"),navbar=document.querySelector(".navbar"),navbarListItem=document.querySelectorAll(".navbar__listitem"),footerYear=document.querySelector("#date"),allSections=document.querySelectorAll(".section"),navItemHome=document.querySelector(".navitem-home"),navItemAboutus=document.querySelector(".navitem-aboutus"),navItemOffer=document.querySelector(".navitem-offer"),navItemContact=document.querySelector(".navitem-contact"),showNav=function(){navbar.classList.add("navbar-active"),navbar.classList.remove("navbar-hide"),burgerBars.classList.add("burger-active"),burgerBars.classList.remove("burger-back")},hideNav=function(){navbar.classList.remove("navbar-active"),navbar.classList.add("navbar-hide"),burgerBars.classList.remove("burger-active"),burgerBars.classList.add("burger-back")},navbarItemEntry=function(){var a=0;navbarListItem.forEach(function(e){e.classList.toggle("nav-entry"),e.style.animationDelay="."+a+"s",a++})},navHandling=function(){(navbar.classList.contains("navbar-active")?hideNav:showNav)(),navbarItemEntry(),navbarListItem.forEach(function(e){e.addEventListener("click",hideNav)})},handleCurrentYear=function(){var e=(new Date).getFullYear();footerYear.innerText=e},activePageObserver=function(){var e=window.location.pathname;"/contact.html"===e?(navItemContact.classList.add("nav-item-active"),navItemContact.children[0].classList.add("nav-item-active")):"/offer.html"===e?(navItemOffer.classList.add("nav-item-active"),navItemOffer.children[0].classList.add("nav-item-active")):"/index.html"===e&&(navItemHome.classList.add("nav-item-active"),navItemHome.children[0].classList.add("nav-item-active"),window.addEventListener("scroll",activeSectionObserver))},activeSectionObserver=function(){var a=window.scrollY;allSections.forEach(function(e){e.classList.contains("about-us")&&e.offsetTop<=a+72?(navSectionClear(),navItemAboutus.classList.add("nav-item-active"),navItemAboutus.children[0].classList.add("nav-item-active")):e.classList.contains("offer")&&e.offsetTop<=a+72?(navSectionClear(),navItemOffer.classList.add("nav-item-active"),navItemOffer.children[0].classList.add("nav-item-active")):e.classList.contains("header")&&e.offsetTop<=a+72&&(navSectionClear(),navItemHome.classList.add("nav-item-active"),navItemHome.children[0].classList.add("nav-item-active"))})},navSectionClear=function(){navbarListItem.forEach(function(e){e.classList.remove("nav-item-active"),e.children[0].classList.remove("nav-item-active")})};handleCurrentYear(),activePageObserver(),burgerBtn.addEventListener("click",navHandling);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVyZ2VyQmFycyIsIm5hdmJhciIsImZvb3RlclllYXIiLCJhbGxTZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZJdGVtSG9tZSIsIm5hdkl0ZW1BYm91dHVzIiwibmF2SXRlbU9mZmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGlkZU5hdiIsIm5hdmJhckl0ZW1FbnRyeSIsIml0ZW0iLCJ0b2dnbGUiLCJhbmltYXRpb25EZWxheSIsIm5hdmJhckxpc3RJdGVtIiwiZm9yRWFjaCIsIm5hdkhhbmRsaW5nIiwiZGVsYXlUaW1lIiwiY29udGFpbnMiLCJoYW5kbGVDdXJyZW50WWVhciIsImdldEZ1bGxZZWFyIiwiY3VycmVudFBhZ2UiLCJuYXZJdGVtQ29udGFjdCIsIkRhdGUiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWN0aXZlU2VjdGlvbk9ic2VydmVyIiwiY3VycmVudFNlY3Rpb24iLCJ3aW5kb3ciLCJzZWN0aW9uIiwibmF2U2VjdGlvbkNsZWFyIiwib2Zmc2V0VG9wIiwiYWN0aXZlUGFnZU9ic2VydmVyIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxVQUFZQyxTQUFTQyxjQUFjLGFBQWEsRUFDaERDLFdBQWFGLFNBQVNDLGNBQWMsYUFBYSxFQURqREYsT0FBU0MsU0FBV0MsY0FBYyxTQUFDLEVBQ25DQyxlQUFhRixTQUFTQyxpQkFBYyxtQkFBYyxFQUNsREUsV0FBU0gsU0FBU0MsY0FBYyxPQUFVLEVBRTFDRyxZQUFhSixTQUFTQyxpQkFBYyxVQUFRLEVBRTVDSSxZQUFjTCxTQUFTTSxjQUFnQixlQUFZLEVBQ25EQyxlQUFjUCxTQUFTQyxjQUFjLGtCQUFnQixFQUNyRE8sYUFBaUJSLFNBQVNDLGNBQWMsZ0JBQUEsRUFDeENRLGVBQWVULFNBQVNDLGNBQWMsa0JBQWlCLEVBTzVERSxRQUFPTyxXQURQUCxPQUVBRCxVQUFXUSxJQUFTLGVBQUssRUFEekJQLE9BRUFELFVBQVdRLE9BQVVDLGFBQU8sRUFDNUJULFdBQUFRLFVBQUFFLElBQUEsZUFBQSxFQUNEVixXQUFhUSxVQUFHQyxPQUFWRSxhQUFnQixDQUR0QixFQUdDVixRQUFPTyxXQURQUCxPQUVBRCxVQUFXUSxPQUFVQyxlQUFPLEVBRDVCUixPQUVBRCxVQUFXUSxJQUFTLGFBQUssRUFDekJSLFdBQUFRLFVBQUFDLE9BQUEsZUFBQSxFQUVEVCxXQUFNWSxVQUFrQkYsSUFBQSxhQUFsQkUsQ0FGTixFQU1FQyxnQkFBZUMsV0FIaEIsSUFJQ0QsRUFBV0UsRUFGWkMsZUFJRUMsUUFBQSxTQUFBSixHQUNGQSxFQUFBTCxVQUFBTSxPQUFBLFdBQUEsRUFFREQsRUFBTUssTUFBQUEsZUFBQUEsSUFBQUEsRUFBb0IsSUFDekJDLENBQUtsQixFQUpMLENBQUMsQ0FDRixFQU9DaUIsWUFBQSxZQUNBTixPQUFBQSxVQUFpQlEsU0FBQSxlQUFBLEVBR2pCVCxRQUZBSyxTQUVFLEVBR0hKLGdCQUFNUyxFQUxMTCxlQU1hQyxRQUFXSyxTQUFBQSxHQUN4QnBCLEVBQUFBLGlCQUFvQixRQUFPUyxPQUFBLENBQzNCLENBQUEsQ0FFRCxFQUdLWSxrQkFBZ0IsV0FQcEIsSUFRQ0MsR0FBQUEsSUFBY0MsTUFBQ2pCLFlBQWMsRUFQOUJOLFdBUUNzQixVQUFlRSxDQVBqQixFQVVFbkIsbUJBQXVCLFdBUHhCLElBUUNnQixFQUFVQSxPQUFXSSxTQUFLQyxTQUVkRixrQkFBWnJCLEdBUEFtQixlQVFPSyxVQUFnQm5CLElBQUMsaUJBQVVvQixFQUNuQ04sZUFBQUUsU0FBQSxHQUFBbEIsVUFBQUUsSUFBQSxpQkFBQSxHQUNBLGdCQUFBYSxHQUVEaEIsYUFBTXVCLFVBQXFCcEIsSUFBRyxpQkFBeEJvQixFQUNMdkIsYUFBTXdCLFNBQWlCQyxHQUFBQSxVQUFjdEIsSUFBQSxpQkFBQSxHQUVqQixnQkFBcEJQLElBVENFLFlBVUk0QixVQUFRekIsSUFBVVksaUJBQW1CLEVBVHpDZixZQVVDNkIsU0FBaUIsR0FBQTFCLFVBQUFFLElBQUEsaUJBQUEsRUFUbEJzQixPQVVDMUIsaUJBQWVFLFNBQWNzQixxQkFBa0IsRUFSbEQsRUFZR3ZCLHNCQUF1QkcsV0FUekIsSUFVRUgsRUFBYW1CLE9BQVlsQixRQVIzQkwsWUFVRStCLFFBQWUsU0FBQUQsR0FDZjVCLEVBQUFBLFVBQVlHLFNBQWMsVUFBQSxHQUFBeUIsRUFBa0JFLFdBQUFKLEVBQUEsSUFUNUNHLGdCQVVZUixFQVRacEIsZUFVREUsVUFBQUUsSUFBQSxpQkFBQSxFQUNBSixlQUFDb0IsU0FBQSxHQUFBbEIsVUFBQUUsSUFBQSxpQkFBQSxHQUNGdUIsRUFBQXpCLFVBQUFZLFNBQUEsT0FBQSxHQUFBYSxFQUFBRSxXQUFBSixFQUFBLElBRURHLGdCQUFNQSxFQUNMbEIsYUFBY1IsVUFBU0UsSUFBQSxpQkFBVyxFQVZoQ0gsYUFXT0MsU0FBVUMsR0FBTUQsVUFBQ0UsSUFBQSxpQkFBa0IsR0FDbkNnQixFQUFTbEIsVUFBR0EsU0FBZ0IsUUFBQyxHQUFBeUIsRUFBa0JFLFdBQUFKLEVBQUEsS0FDdkRHLGdCQUFDLEVBQ0Y3QixZQUFBRyxVQUFBRSxJQUFBLGlCQUFBLEVBTURXLFlBQUFBLFNBQW1CLEdBQUFiLFVBQUFFLElBQUEsaUJBQUEsRUFFbkJiLENBQUFBLENBZkEsRUFFTXFDLGdCQUFrQixXQUN2QmxCLGVBQWVDLFFBQVEsU0FBQWdCLEdBQ3RCQSxFQUFRekIsVUFBVUMsT0FBTyxpQkFBaUIsRUFDMUN3QixFQUFRUCxTQUFTLEdBQUdsQixVQUFVQyxPQUFPLGlCQUFpQixDQUN2RCxDQUFDLENBQ0YsRUFNQVksa0JBQWlCLEVBQ2pCZSxtQkFBa0IsRUFDbEJ2QyxVQUFVZ0MsaUJBQWlCLFFBQVNYLFdBQVciLCJmaWxlIjoibWFpbi1taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJ0bicpXHJcbmNvbnN0IGJ1cmdlckJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJhcicpXHJcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKVxyXG5jb25zdCBuYXZiYXJMaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX2xpc3RpdGVtJylcclxuY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJylcclxuXHJcbmNvbnN0IGFsbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVxyXG5jb25zdCBuYXZJdGVtSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpdGVtLWhvbWUnKVxyXG5jb25zdCBuYXZJdGVtQWJvdXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpdGVtLWFib3V0dXMnKVxyXG5jb25zdCBuYXZJdGVtT2ZmZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aXRlbS1vZmZlcicpXHJcbmNvbnN0IG5hdkl0ZW1Db250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdml0ZW0tY29udGFjdCcpXHJcblxyXG5cclxuXHJcbmNvbnN0IHNob3dOYXYgPSAoKSA9PiB7XHJcblx0bmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1hY3RpdmUnKVxyXG5cdG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItaGlkZScpXHJcblx0YnVyZ2VyQmFycy5jbGFzc0xpc3QuYWRkKCdidXJnZXItYWN0aXZlJylcclxuXHRidXJnZXJCYXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci1iYWNrJylcclxufVxyXG5jb25zdCBoaWRlTmF2ID0gKCkgPT4ge1xyXG5cdG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItYWN0aXZlJylcclxuXHRuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWhpZGUnKVxyXG5cdGJ1cmdlckJhcnMuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLWFjdGl2ZScpXHJcblx0YnVyZ2VyQmFycy5jbGFzc0xpc3QuYWRkKCdidXJnZXItYmFjaycpXHJcbn1cclxuXHJcbmNvbnN0IG5hdmJhckl0ZW1FbnRyeSA9ICgpID0+IHtcclxuXHRsZXQgZGVsYXlUaW1lID0gMFxyXG5cclxuXHRuYXZiYXJMaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtZW50cnknKVxyXG5cdFx0aXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9ICcuJyArIGRlbGF5VGltZSArICdzJ1xyXG5cdFx0ZGVsYXlUaW1lKytcclxuXHR9KVxyXG59XHJcblxyXG5jb25zdCBuYXZIYW5kbGluZyA9ICgpID0+IHtcclxuXHRpZiAoIW5hdmJhci5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmJhci1hY3RpdmUnKSkge1xyXG5cdFx0c2hvd05hdigpXHJcblx0fSBlbHNlIHtcclxuXHRcdGhpZGVOYXYoKVxyXG5cdH1cclxuXHRuYXZiYXJJdGVtRW50cnkoKVxyXG5cdG5hdmJhckxpc3RJdGVtLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU5hdilcclxuXHR9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDdXJyZW50WWVhciA9ICgpID0+IHtcclxuXHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0Zm9vdGVyWWVhci5pbm5lclRleHQgPSB5ZWFyXHJcbn1cclxuXHJcbmNvbnN0IGFjdGl2ZVBhZ2VPYnNlcnZlciA9ICgpID0+IHtcclxuXHRjb25zdCBjdXJyZW50UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG5cclxuXHRpZiAoY3VycmVudFBhZ2UgPT09ICcvY29udGFjdC5odG1sJykge1xyXG5cdFx0bmF2SXRlbUNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tYWN0aXZlJylcclxuXHRcdG5hdkl0ZW1Db250YWN0LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtLWFjdGl2ZScpXHJcblx0fSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gJy9vZmZlci5odG1sJykge1xyXG5cdFx0bmF2SXRlbU9mZmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtLWFjdGl2ZScpXHJcblx0XHRuYXZJdGVtT2ZmZXIuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tYWN0aXZlJylcclxuXHR9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSAnL2luZGV4Lmh0bWwnKSB7XHJcblx0XHRuYXZJdGVtSG9tZS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbS1hY3RpdmUnKVxyXG5cdFx0bmF2SXRlbUhvbWUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tYWN0aXZlJylcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhY3RpdmVTZWN0aW9uT2JzZXJ2ZXIpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBhY3RpdmVTZWN0aW9uT2JzZXJ2ZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgY3VycmVudFNlY3Rpb24gPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuXHRhbGxTZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG5cdFx0aWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhYm91dC11cycpICYmIHNlY3Rpb24ub2Zmc2V0VG9wIDw9IGN1cnJlbnRTZWN0aW9uICsgNzIpIHtcclxuXHRcdFx0bmF2U2VjdGlvbkNsZWFyKClcclxuXHRcdFx0bmF2SXRlbUFib3V0dXMuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tYWN0aXZlJylcclxuXHRcdFx0bmF2SXRlbUFib3V0dXMuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tYWN0aXZlJylcclxuXHRcdH0gZWxzZSBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ29mZmVyJykgJiYgc2VjdGlvbi5vZmZzZXRUb3AgPD0gY3VycmVudFNlY3Rpb24gKyA3Mikge1xyXG5cdFx0XHRuYXZTZWN0aW9uQ2xlYXIoKVxyXG5cdFx0XHRuYXZJdGVtT2ZmZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tYWN0aXZlJylcclxuXHRcdFx0bmF2SXRlbU9mZmVyLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtLWFjdGl2ZScpXHJcblx0XHR9IGVsc2UgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXInKSAmJiBzZWN0aW9uLm9mZnNldFRvcCA8PSBjdXJyZW50U2VjdGlvbiArIDcyKSB7XHJcblx0XHRcdG5hdlNlY3Rpb25DbGVhcigpXHJcblx0XHRcdG5hdkl0ZW1Ib21lLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtLWFjdGl2ZScpXHJcblx0XHRcdG5hdkl0ZW1Ib21lLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtLWFjdGl2ZScpXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuY29uc3QgbmF2U2VjdGlvbkNsZWFyID0gKCkgPT4ge1xyXG5cdG5hdmJhckxpc3RJdGVtLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcblx0XHRzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1pdGVtLWFjdGl2ZScpXHJcblx0XHRzZWN0aW9uLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1pdGVtLWFjdGl2ZScpXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmhhbmRsZUN1cnJlbnRZZWFyKClcclxuYWN0aXZlUGFnZU9ic2VydmVyKClcclxuYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2SGFuZGxpbmcpXHJcblxyXG4iXX0=
