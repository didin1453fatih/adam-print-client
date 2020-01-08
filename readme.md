#Adam Print Client
This client print library for adam print service. 
I hope adam team helpful when use this library. 😊😊😊 😘😘😘

#Usage

For use this libaray, install using
```
npm i adam-print-client
```

and then you must include this library like this

```
import {printPdf} from "adam-print-client"
```
And call this library with
```
printPdf(URL, data, finishCallback)
```

##Example
```
try {
    var dataPrint=await axios.post("/api/v1/pemeriksaan_pasien/input_hasil/print", this.submitPrint)
    printPdf('http://192.153.2.111/published/view_pdf', dataPrint.data,()=>{
        window.alert('finish')
    })
} catch (error) {
// alert('sistem print error '+error.message)
}    
```

##Description
| Params         |           Description           |                 Example                 |
|----------------|:-------------------------------:|:---------------------------------------:|
| URL            |           String path           | http://192.153.2.111/published/view_pdf |
| DATA           |           JSON Object           |        Javascript Object data {}        |
| finishCallback | Callback when print is finished |         ()=>{ /***finish**/  }          |