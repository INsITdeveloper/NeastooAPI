import fetch from 'node-fetch';

export async function gdriveDL(url) {
    try {
        const apiUrl = `https://api.ryzendesu.vip/api/downloader/gdrive?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data; // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Error dalam mendapatkan data dari API Google Drive downloader'
        };
    }
}
