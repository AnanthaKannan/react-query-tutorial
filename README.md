## REACT AMPLIFY

npm i -g @aws-amplify/cli

amplify configure


## React QUERY:

npm i react-query



## About React query:

### isFetching:
    It is used to fetch the data in background. Eg: if the data already there in the front end, if they try to fetch the data again, the isFetching will be true

### cacheTime
    If you are navigate again the same page, first it will use the catch data to show the values to user meanwhile
    it will call the api

### staleTime
    If you are navigate again the page with in the staleTime, then it will not call the api agin to fetch the data

### refetchOnMount : true | false | 'always'
    The default value will be true. If you make this value as false, It will call only once, after that it will not call the api only reuse the old data to render

### refetchOnWindowFocus: true | false | 'always'
    The default value will be true, If you make this value as true, It will call the api, every time you comes to the screen. for eg: now you are different tab, moving to the corresponding tab the api will happen

### refetchInterval: 2000
    It is used to call the API between intervel. you can give the time, the api will call the particular time period

### refetchIntervalInBackground: true | false
    It is comes with refetchInterval, it will call the api even if you are not focusing on the screen

### enabled: true | false
    If the enable is false, the api call will not happen.

### onSuccess:
    It is a call back function, once the api get success this function will call

### onError:
    It is a call back function, once the api get failed this function will call

### select:
    It is a call back function, used to transform the data. once the api get success here the data will receive, you can write the logic here. So once you receive the data, you can get as a transform data.

###