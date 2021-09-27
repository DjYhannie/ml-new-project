<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Excel Reader</title>
</head>
<body>
    <input type="file" name="test" id="test">
    <script src="https://unpkg.com/xlsx/dist/xlsx.full.min.js"></script>
    <script>
        window.onload = () => {
            let input = document.getElementById('test')
            input.addEventListener('change', handleFileInput)
        }

        function handleFileInput(event) {
            let files = event.target.files
            let file = files[0]

            let fileReader = new FileReader()
            fileReader.onload = (e) => {
                let data = new Uint8Array(e.target.result)
                let workbook = XLSX.read(data, {type: 'array'})

                let sheetNames = workbook.SheetNames
                let sheet1 = workbook.Sheets[sheetNames[0]]
                console.log(XLSX.utils.sheet_to_row_object_array(sheet1)[0])
            }

            fileReader.onerror = (event) => {
                console.error('File cannot be read! code: ' + event.target.error.code)
            }

            fileReader.readAsArrayBuffer(file)
        }
    </script>
</body>
</html>
