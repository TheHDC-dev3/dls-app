'use strict';

var productCategorydrawer = new kendo.data.DataSource({
                  type:"json",
                  transport:{
                    read:{
                      url : "https://platform.telerik.com/bs-api/v1/PzYpEcwz1mXi1z5z/Invoke/SqlProcedures/getproductinfo",
                      type:"POST",
                      dataType:"json"
	               	}
                  },
                  schema:{
                    parse: function(response){
                    	var categories = [];
                        alert(response.length);
                     	for(var i=0;i<response.length;i++)
                        {
                                var category = {
                                    Product_Image_URL:response[i].Product_Image_URL,
                                    Product_Name:response[i].Product_Name,
                                    cprice:response[i].cprice
                               	}
                                categories.push(category)
                            
                      	}
                      	return categories;
                		}
                  }
			});

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
    categories:productCategorydrawer
});

// START_CUSTOM_CODE_home
// END_CUSTOM_CODE_home