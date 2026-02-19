import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// Initialize Google Auth
const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID, serviceAccountAuth);

app.post('/register', async (req, res) => {
    try {
        const { name, college, phone, email, protocol, timestamp } = req.body;

        await doc.loadInfo();
        const sheet = doc.sheetsByTitle[process.env.SHEET_NAME || 'Sheet1'];

        if (!sheet) {
            return res.status(404).json({ success: false, error: 'Sheet not found' });
        }

        await sheet.addRow({
            'Timestamp (IST)': timestamp,
            'Full Name': name,
            'College / University': college,
            'Phone Number': phone,
            'Email': email,
            'Protocol / Interest': protocol
        });

        console.log('✅ Registration saved for:', name);
        res.json({ success: true, message: 'Registration secured' });
    } catch (error) {
        console.error('❌ Backend Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'MADMATRIX Backend Active 🚀' });
});

app.listen(PORT, () => {
    console.log(`🚀 MADMATRIX Backend running on port ${PORT}`);
});
