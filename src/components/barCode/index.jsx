import { useState } from "react"
import QRCode from "react-qr-code"

const BarCode = () => {
    const [qrcode,setQrcode] = useState('')
    const [input,setINput] = useState('')
    const handleGenerate = () => {
        setQrcode(input)
        setINput('')
    }
  return (
    <div 
        style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            border:'1px solid red'
        }}
    >
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