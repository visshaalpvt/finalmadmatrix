// ============================================================
// MADMATRIX 2026 - Registration Sheet Automation
// PASTE THIS ENTIRE FILE into Google Apps Script editor
// Then Deploy → New Deployment → Web App → Anyone
// ============================================================

const SPREADSHEET_ID = "12CmYsRaYifEldLqXkx_KQKtB1kpo_e4KU35nfS4Ysvs";
const SHEET_NAME = "Sheet1";

// Main handler — receives data via GET params (most reliable, no CORS issues)
function doGet(e) {
    // If no params, it's a health check
    if (!e.parameter || !e.parameter.name) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: "MADMATRIX Registration API is live ✅" }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    // Write registration data to sheet
    try {
        appendToSheet({
            name: e.parameter.name || "",
            college: e.parameter.college || "",
            phone: e.parameter.phone || "",
            email: e.parameter.email || "",
            protocol: e.parameter.protocol || "General Interest",
            timestamp: e.parameter.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        });

        return ContentService
            .createTextOutput(JSON.stringify({ success: true, message: "Saved!" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: err.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Also keep POST support as fallback
function doPost(e) {
    try {
        appendToSheet({
            name: e.parameter.name || "",
            college: e.parameter.college || "",
            phone: e.parameter.phone || "",
            email: e.parameter.email || "",
            protocol: e.parameter.protocol || "General Interest",
            timestamp: e.parameter.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        });
        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: err.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function appendToSheet(data) {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Get or create sheet
    if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
    }

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
        const headers = ["Timestamp (IST)", "Full Name", "College / University", "Phone Number", "Email", "Protocol / Interest"];
        sheet.appendRow(headers);

        const headerRange = sheet.getRange(1, 1, 1, headers.length);
        headerRange.setBackground("#CC0000"); // Matrix Red
        headerRange.setFontColor("#FFFFFF");
        headerRange.setFontWeight("bold");
        headerRange.setFontSize(11);
        headerRange.setHorizontalAlignment("center");
        sheet.setFrozenRows(1);
        sheet.autoResizeColumns(1, headers.length);
    }

    // Append registration data
    sheet.appendRow([
        data.timestamp,
        data.name,
        data.college,
        data.phone,
        data.email,
        data.protocol
    ]);

    sheet.autoResizeColumns(1, 6);
}

/**
 * OPTIONAL: Send confirmation email to the participant
 */
/*
function sendEmailNotification(data) {
  const subject = `Welcome to MADMATRIX 2026 - Registration Confirmed! 🚀`;
  const body = `Hi ${data.name},

Your registration for MADMATRIX 2026 has been successfully recorded. 

DETAILS:
- Protocol: ${data.protocol}
- College: ${data.college}
- Phone: ${data.phone}
- Timestamp: ${data.timestamp}

We have secured your data. Please proceed with any further steps provided on the official forms.

See you at the Matrix!
- The MADMATRIX Team
`;
  
  try {
    MailApp.sendEmail(data.email, subject, body);
  } catch (e) {
    Logger.log("Email error: " + e.message);
  }
}
*/

