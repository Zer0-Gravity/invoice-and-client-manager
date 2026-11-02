import toast from "react-hot-toast";

export const uploadAvatar = async (file: File): Promise<string> => {
    //Perform data fetching to the api router
    const avt = await fetch("/api/upload_image", { method: "POST" }).then(
        (avt) => avt.json(),
    );

    const { signature, apiKey, cloudName, ...signed } = avt;

    const form = new FormData();
    form.append("file", file);
    form.append("api_key", apiKey);
    form.append("signature", signature);
    Object.entries(signed).forEach(([c, v]) => form.append(c, String(v)));
    
    //Send the image data to Cloudinary
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
            method: "POST",
            body: form,
        },
    );

    //Get the respond from cloudinary
    const data = await res.json();
    if (!res.ok) return toast.error(data.error?.message ?? "Upload failed");

    return data.secure_url as string;
};
