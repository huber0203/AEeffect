$(document).ready(function () {
  // 分類表單2
  $(function () {
    $.get(
      'https://spreadsheets.google.com/feeds/list/1df73uUaBPzRKgLm8-Vcnsc59dW6kzudAQKFRhjN_CGI/2/public/values?alt=json',
      function (data) {
        console.log(data);

        var feedData = data.feed.entry;
        var items = feedData.map(function (item) {
          return {
            catename: item.gsx$catename.$t,
            catemin: item.gsx$catemin.$t,
          };
        });

        items.forEach(function (item) {
          var Card = `
            <label for="${item.catemin}" class="cate1">
            <input type="checkbox" id="${item.catemin}" checked>
            <span class="arrow"></span>
            <p class="catename">${item.catemin}</p>
            <div class="toggle-box">
            <div class="${item.catemin}"></div>
            </div>
            </label>
          `;
          $('.test').append(Card);
        });
      }
    );
  });

  // 給資料表單1
  $(function () {
    $.get(
      'https://spreadsheets.google.com/feeds/list/1df73uUaBPzRKgLm8-Vcnsc59dW6kzudAQKFRhjN_CGI/1/public/values?alt=json',
      function (data) {
        console.log(data);

        var feedData = data.feed.entry;
        var items = feedData.map(function (item) {
          return {
            name: item.gsx$name.$t,
            video: item.gsx$video.$t,
            image: item.gsx$image.$t,
            content: item.gsx$content.$t,
            catemin: item.gsx$catemin.$t,
          };
        });

        items.forEach(function (item) {
          var Card = `
            <li>
              <a href="#">${item.name}</a>
            </li>    
          `;
          $(`.${item.catemin}`).append(Card);
        });
      }
    );
  });
})