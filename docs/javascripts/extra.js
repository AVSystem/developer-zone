// function siteSearchAnalytics() {
//   const inputSearch = document.querySelector(".md-search__input");

//   inputSearch.addEventListener("keydown", function () {
//     console.log(inputSearch.value);
//     console.log(inputSearch.value.length);
//     if (inputSearch.value.length >= 2) {
//       console.log("request ga tag");
//     }
//   });
// }

// siteSearchAnalytics();

// const btnEvent1 = document.getElementById('event1');

// btnEvent1.addEventListener("click", function() {
//     ga('send', 'event', 'button click', 'button click', 'button click', );
// });

// document.addEventListener('DOMContentLoaded', function() {
//   // Funkcja, która będzie wykonywana po załadowaniu drzewa DOM
//   function changeElementTopStyle() {
//   var mbTabs = document.querySelector('.md-tabs');
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//
//   console.log(mbTabs)
//   console.log(scrollTop)
//
//
//   if (scrollTop > 0) {
//     mbTabs.style.top = '55px'; // Zmienić na żądany styl
//   } else {
//     mbTabs.style.top = '110px'; // Usunąć styl, jeśli scrollTop jest mniejsze lub równe 0
//   }
// }
//
//
//
//  window.addEventListener('scroll', changeElementTopStyle);
// });


document.addEventListener('DOMContentLoaded', function() {
  function adjustTabsPosition() {
    var mbTabs = document.querySelector('.md-tabs');
    var headerNav = document.querySelector('.md-header-nav');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > headerNav.offsetHeight) {
      mbTabs.style.top = headerNav.offsetHeight - 10 + 'px';
    } else {
      mbTabs.style.top = '';
    }
  }

  window.addEventListener('resize', adjustTabsPosition);
  window.addEventListener('scroll', adjustTabsPosition);
});
