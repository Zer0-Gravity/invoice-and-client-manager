import { auth } from "@/lib/auth";
import { v2 as cloudinary } from "cloudinary";
import { headers } from "next/headers";

interface UploadParams {
    timestamp: number;
    folder: string;
    public_id: string;
    overwrite: boolean;
    invalidate: boolean;
    allowed_formats: string;
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST() {
    const session = await auth.api.getSession({ headers: await headers() });

    //Check the session user, if no login detected trow error
    if (!session) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const params: UploadParams = {
        timestamp: Math.round(Date.now() / 1000),
        folder: "avatar-finance",
        public_id: session.user.id,
        overwrite: true,
        invalidate: true,
        allowed_formats: "jpg,png,webp",
    };

    const signature = cloudinary.utils.api_sign_request(
        params,
        process.env.CLOUDINARY_API_SECRET as string,
    );

    return Response.json({
        ...params,
        signature,
        apiKey: process.env.CLOUDINARY_API_KEy,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    });
}
