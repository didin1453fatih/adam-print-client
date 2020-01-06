import btoa from "btoa";
import printJS from "print-js";
import axios from "axios";

module.exports.printPdf = async function (url, data, finishCb) {
    var response = await axios.post(
        url,
        {
            data_pdf: btoa(data)
        },
        {
            responseType: "arraybuffer"
        }
    );
    var filePdf = Buffer.from(response.data, "binary").toString("base64");

    await printJS({
        printable: filePdf,
        type: "pdf",
        base64: true,
        onLoadingEnd: finishCb
    });
}