# cache for request
## 强制缓存：
通过**`expires、catch-control`**控制   
catch-control 作用高于 expires  
状态码为200  
from cache/from memory
## 协商缓存：  
强制缓存失效会触发协商缓存  
通过**`Last-Modified/If-Modified-Since、Etag/If-None-Match`**控制  
如生效状态码为304 失效为200 
