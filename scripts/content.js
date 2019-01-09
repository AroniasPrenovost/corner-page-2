 $.ajax({
           type : 'GET',
            dataType : 'json',
            async: false,
            url: '../data/pageData.json',
            success : function(data) {
                console.log(data); 
                // to do... 
        } 
    });