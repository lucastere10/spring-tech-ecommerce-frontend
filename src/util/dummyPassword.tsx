
export function generateDummyPassword(googleId: string) {
    const crypto = require('crypto');
    const secret = process.env.NEXT_PUBLIC_GOOGLE_PASSWORD_SECRET_KEY!; // replace with your own secret key
    const hash = crypto.createHmac('sha256', secret)
        .update(googleId)
        .digest('hex');
    return hash;
}

