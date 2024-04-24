import { useState } from "react"
import QRCode from "react-qr-code"

const BarCode = () => {
    const [qrcode,setQrcode] = useState('')
    const [input,setINput] = useState('')
    const handleGenerate = () => {
        setQrcode(input)
    }
  return (
    <div>
        <h1>QR code generator</h1>
        <div>
            <input type="text" name="qr-code" value={input} onChange={(e) => setINput(e.target.value)}/>
            <button onClick={handleGenerate} disabled={input && input.trim() !== '' ? false:true}>generate qr code</button>
        </div>
        <div>
            <QRCode id='gr-code' value={qrcode}/>
        </div>
    </div>
  )
}

export default BarCode