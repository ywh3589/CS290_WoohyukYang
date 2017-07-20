#Jquery AJAX How-To

###Background

[Jquery](https://jquery.com) is a third party JavaScript framework that is used for Browser-based scripting. Jquery became popular because it allowed developers to write their JavaScript code once and it would work roughly the same in the majority of browsers. Given our course's focus on AJAX I thought it would be good to document and showcase how the Jquery AJAX API works.

###Getting Started with Jquery

There are multiple ways to include jquery in your projects. One of the more popular avenues is to include a script tag into your main html file like so:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
```

This script tag will call out to the Google Content Delivery Network and load the jquery code so it is avaliable to your custom JavaScript defined off the '$' symbol.

Content delivery networks are nice, but connectivity might be an issue and as such the desired code might not be able to be loaded remotely so as a result the needed libraries can be stored locally with the server. 

This can be accomplished by manually downloading the source files and linking to them using script tags pointing to the local file system on the server, but there is a better way.

Twitter developed a package manager for front-end dependencies known as [bower](http://bower.io). It functions a lot like [npm](https://www.npmjs.com) where you would go to the root of your project and type 'bower init' which tells bower the root directory it will be writing its packages to. After initialization you can have jquery installed by simpling typing 'bower install jquery --save' which will install the jquery source into a folder called 'bower_components' and will write jquery as a dependency to the bower.json file. 

###Simple Example

```javascript
  $.ajax({
    method: "POST",
    url: "some.php",
    data: { name: "John", location: "Boston" }
  }).done(function(msg) {
    alert("Data Saved: " + msg);
  });
```

Jquery is scoped to the '$' when used in the browser so we are using the ajax method defined on the jquery object. As can be seen in the code above a post is being made to a php url with the data being sent as JSON. The resolution of the request is handled using promises notably the .done method. Jquery ajax supports promises as well as the more traditional callback pattern. Let's go over some of the configuration options when composing an AJAX request using Jquery.

###Live Demo

Push the button below to run the code shown below:

```javascript
$.ajax({
   url: 'https://api.github.com/repos/vmg/redcarpet/issues?state=closed',
   dataType: 'jsonp',
   success: function(data, textStatus, jqXHR) {
      var output = data.data[0].labels_url;
      alert(output);
   },
   error: function(jqXHR, textStatus, errorThrown) {
      alert(errorThrown);
   }
});
```

<button id="demo">Click Here</button>


###Comparing Jquery AJAX to native AJAX API

Typical Native AJAX call:

```javascript
var req = new XMLHttpRequest();
var url = "http://httpbin.org/post";
var payload = {
  'name': "Alex",
  'age': 29,
  'weight': 155
};
req.open("POST", url, true);
req.setRequestHeader('Content-Type', 'application/json');
req.addEventListener('load', function() {
  if (req.status >= 200 && req.status < 400) {
    var res = JSON.parse(JSON.parse(req.responseText).data);
    postResponse(res);
  } else {
    var str = "Error in network request: " + res.statusText;
    console.log(str);
    alert(str);
  }
});
req.send(JSON.stringify(payload));
```

Equivalent Jquery AJAX call:

```javascript
$.ajax({
  url: 'http://httpbin.org/post',
  dataType: 'json',
  data: {
    'name': "Alex",
    'age': 29,
    'weight': 155
  },
  type: 'POST'
  success: postResponse,
  error: function(jqXHR, textStatus, errThrown) {
    console.log(errThrown);
  }
});
```

As can be seen by the comparison above jquery lives up to its slogan of "Write less, do more". The main benefit is the jquery API allows for all the request's pieces to be contained within the $.ajax call keeping the request itself modular.

###Sample Settings

The ajax method in Jquery accepts two main arguments. The first argument is the url for where the request is being made/sent to and the second is a JavaScript object that contains settings options used for the call. I will now go over some of the more popular settings:

```javascript
  $.ajax('http://api.github.com/users', {
    method: 'GET'
  });
```
  
The method option specifies which HTTP method you will use in your AJAX request. The available options include 'POST', 'GET' and 'PUT'.

```javascript
  $.ajax('http://api.github.com/users', {
    method: 'GET',
    dataType: 'json'
  });
```
The dataType option specifies the format the data requested should be in when the request completes.

```javascript
  $.ajax('http://api.github.com/users', {
    method: 'GET',
    dataType: 'json',
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  }); 
```

The error option allows the developer to specifiy a callback that will fire if the given request fails.

```javascript
  $.ajax('http://api.github.com/users', {
    method: 'GET',
    dataType: 'json',
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    },
    success: function(data, textStatus, jqXHR) {
      processData(data);
    }
  });
```

The success option allows the developer to specifiy a callback that will fire if the request is successful and will be passed the requested data as the first argument.

###Other Jquery AJAX Methods

Besides the ajax method scoped off the '$' jquery object there are a few other methods that can be reviewed on the Jquery documentation pages.

```javascript
  $.get(url, [settings]);
```

The [jquery.get](http://api.jquery.com/jquery.get/) method is just like the ajax method but it is only for get requests.

```javascript
  $.post(url, [settings]);
```

The [jquery.post](http://api.jquery.com/jquery.post/) method is just like the ajax method but it is only for post requests.

###Promises

Prior to Jquery 1.5 a jquery ajax request needed success and/or error callbacks passed as options into the call so that the request could be properly handled, like so:

```javascript
  $.ajax({
    url: "/serverresource.txt",
    success: successCallback,
    error: errorCallback
  });
```

However now jquery ajax calls return objects that implement the [CommonJS](http://wiki.commonjs.org/wiki/CommonJS/) promises interface which allows for this functionality:

```javascript
  var promise = $.ajax({
    url: "/serverresource.txt"
  });

  promise.done(successCallback);
  promise.fail(errorCallback);
  promise.always(alwaysCallback);
```
