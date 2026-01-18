import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function getProjects() {
    // If no credentials, return mock data for demonstration
    if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
        console.warn('Google Sheet credentials missing. Returning mock data.');
        return [
            {
                title: "Project Alpha",
                category: "Industrial",
                image: "https://placehold.co/600x400/141416/FFF?text=Alpha",
                description: "High tolerance aerospace component."
            },
            {
                title: "Fluid Form",
                category: "Art",
                image: "https://placehold.co/600x400/141416/dfff00?text=Fluid",
                description: "Generative design sculpture."
            },
            {
                title: "Protype X",
                category: "R&D",
                image: "https://placehold.co/600x400/141416/2980b9?text=X",
                description: "Next-gen material testing."
            }
        ];
    }

    try {
        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();

        return rows.map(row => ({
            title: row.get('Title'),
            category: row.get('Category'),
            image: row.get('Image'),
            description: row.get('Description')
        }));
    } catch (error) {
        console.error('Error fetching sheet:', error);
        return [];
    }
}
