$(document).ready(function(){

    
    

    
    // 分類表單2

    $(function() {
        $.get('https://spreadsheets.google.com/feeds/list/1df73uUaBPzRKgLm8-Vcnsc59dW6kzudAQKFRhjN_CGI/2/public/values?alt=json', function(data) {
        console.log(data);
         
        var d = data.feed.entry;
        var items = [];
        for(var i in d) {
        var item = {};
        item.catename = d[i].gsx$catename.$t;
        item.catemin = d[i].gsx$catemin.$t;
        items.push(item);
        }
        
        console.table(items);
          
           
        for(var i in items) {
                    var Card = `
                    <label for="${items[i].catemin}" class="cate1"><input type="checkbox" id="${items[i].catemin}" checked><span class="arrow"></span><p class="catename">${items[i].catemin}</p>
                    <div class="toggle-box">
                    <div class="${items[i].catemin}"></div>
                    </div>
                    </label>
                          
                        
                  ` ;
                    $('.test').append(Card);
                  }
        
       
        
    
    
    
    
    
    
               
        });
        });
    

        // 給資料表單1
        $(function() {
            $.get('https://spreadsheets.google.com/feeds/list/1df73uUaBPzRKgLm8-Vcnsc59dW6kzudAQKFRhjN_CGI/1/public/values?alt=json', function(data) {
            console.log(data);
             
            var d = data.feed.entry;
            var items = [];
            for(var i in d) {
            var item = {};
            item.name = d[i].gsx$name.$t;
            item.video = d[i].gsx$video.$t;
            item.image = d[i].gsx$image.$t;
            item.content = d[i].gsx$content.$t;
            item.catemin = d[i].gsx$catemin.$t;
            items.push(item);
            }
            
            console.table(items);
              
               
            for(var i in items) {
                        var Card = `
                        <li><a href="#">${items[i].name}</a></li>
                              
                            
                      ` ;
                        $(`.${items[i].catemin}`).append(Card);
                      }
            
           
            
        
        
        
        
        
        
                   
            });
            });





    
    
    
    
});

