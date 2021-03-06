(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

  /*  var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Having very messed-up things happen is a key ingredient in the recipe for the Alien film franchise. While audiences have come to expect gory explosions and the like, there’s a chance that this May’s Alien: Covenant might still hold the power to shock fans.</p>'},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];*/

    function WidgetService($http){

        var api = {
            "createWidget": createWidget,
            "findWidgetByPageId": findWidgetByPageId,
            "findWidgetsById": findWidgetsById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "findWidgetById": findWidgetById
        };

        return api;

        function createWidget(pageId, widget){
            /*var newWidget = {
                _id: (new Date()).getTime() + "",
                pageId: pageId,
                widgetType: widget
            };
            widgets.push(newWidget);
            return newWidget;
*/
            return $http.post("/api/page/" + pageId + "/widget", widget);

        }


        function findWidgetsById(widgetId){
            /*var result = [];
            for(var i in widgets){
                if(widgets[i]._id === widgetId){
                    result.push(widgets[i])
                }
            }
            return result;*/
            return $http.get("/api/widget/" + widgetId);
        }

        function findWidgetByPageId(pageId){
            /*var result = [];
            for(var i in widgets){
                if(widgets[i].pageId === pid){
                    result.push(widgets[i])
                }
            }
            return result;*/
            return $http.get("/api/page/" + pageId + "/widget");
        }

        function updateWidget(widgetId, widget){
            /*for (var i in widgets){
                if(widgets[i]._id === widgetId){
                    widgets[i].size = widget.size;
                    widgets[i].text = widget.text;
                    return true;

                }
            }
            return false*/
            $http.put("/api/widget/" + widgetId, widget)
        }

        function deleteWidget(widgetId){
            /*for(var i in widgets){
                if(widgets[i]._id === widgetId){
                    widgets.splice(i, 1);
                    return true;
                }
            }
            return false;*/
            $http.delete("/api/widget/" + widgetId);
        }

        function findWidgetById(widgetId){
            var url = "/api/widget/"+widgetId;
            return $http.get(url);
        }


    }
})();

