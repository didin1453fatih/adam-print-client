import btoa from "btoa";
import printJS from "print-js";
import axios from "axios";

/**
 * 
 * @param {*} url is string 
 * @param {*} data is object type
 * @param {*} finishCb finish callback when pdf rendered in print popup
 */
export const printPdf = async function (url, data, finishCb) {
    // console.log('print pdf start 2 '+JSON.stringify(data))
    var response = await axios.post(
        url,
        {
            data_pdf: btoa(JSON.stringify(data))
        },
        {
            responseType: "arraybuffer"
        }
    );
    // console.log('print axios')    
    var filePdf = Buffer.from(response.data, "binary").toString("base64");
    await printJS({
        printable: filePdf,
        type: "pdf",
        base64: true,
        onLoadingEnd: finishCb
    });
}